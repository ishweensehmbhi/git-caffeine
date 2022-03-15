import Item from "./Item";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

// use state to control what is being showed with display

function Display() {
	// a state that represents the currently displayed inventory
	const [currentInventory, setCurrentInventory] = useState([]);
	// a state that represents the currently desired view as selected by the user using the left side buttons
	const [currentlyViewing, setCurrentlyViewing] = useState("all");

	// show everything from DB in initial render of the page, as well as whenever currentlyViewing changes
	useEffect(() => {
		// get a snapshot of the database
		const database = getDatabase(firebase);

		if (currentlyViewing === "all") {
			// if user wants to view all, show all
			const dbRef = ref(database, `/inventory/`);
			const newState = [];
			// get database repsonse
			onValue(dbRef, (res) => {
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
			// get database repsonse
			onValue(dbRef, (res) => {
				const inventory = res.val();
				setCurrentInventory(inventory);
			});
		}
	}, [currentlyViewing]);

	return (
		<section className="display-inventory">
			<Sidebar setCurrentlyViewing={setCurrentlyViewing} />
			<ul>
				{
					// map over array
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
