import Item from "./Item";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, get } from "firebase/database";

function Display() {
	// A state that represents the currently displayed inventory
	const [currentInventory, setCurrentInventory] = useState([]);
	// A state that represents the currently desired view as selected by the user using the left side buttons
	const [currentlyViewing, setCurrentlyViewing] = useState("all");

	// Show everything from database in initial render of the page/whenever currentlyViewing changes
	useEffect(() => {
		// Get a snapshot of the database
		const database = getDatabase(firebase);
		if (currentlyViewing === "all") {
			const dbRef = ref(database, `/inventory/`);
			const newState = [];
			// Get database repsonse for all items
			get(dbRef).then((res) => {
				const allInventories = res.val();
				// combine all types of merch available at the inventory node into one big node
				newState.push(
					...allInventories.coffees,
					...allInventories.teas,
					...allInventories.merch
				);
				// set it to state
				setCurrentInventory(newState);
			});
		} else {
			const dbRef = ref(database, `/inventory/${currentlyViewing}`);
			// Get database repsonse for currently viewing item
			get(dbRef).then((res) => {
				const inventory = res.val();
				setCurrentInventory(inventory);
			});
		}
	}, [currentlyViewing]);

	// Render the inventory screen along with the sidebar
	return (
		<section className="display-inventory">
			<Sidebar setCurrentlyViewing={setCurrentlyViewing} />
			<ul>
				{
					// Map over array of inventory items returned from database
					currentInventory.map((currentItem) => {
						return (
							<Item
								key={currentItem.key}
								imageSource={currentItem.img}
								name={currentItem.name}
								altText={`an image of ${currentItem.name}`}
								price={currentItem.price}
							/>
						);
					})
				}
			</ul>
		</section>
	);
}

export default Display;
