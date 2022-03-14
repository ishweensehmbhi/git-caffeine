import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import "./App.css";
// Import Display component
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
	const [currentInventory, setCurrentInventory] = useState([]);
	// a state that represents the current inventory as selected by the user
	// const [currentInventory, setCurrentInventory] = useState({});
	const [currentlyViewing, setCurrentlyViewing] = useState("/coffees");

	// show everything from DB in initial render of the page
	useEffect(() => {
		const database = getDatabase(firebase);

		if (currentlyViewing === "/") {
			// show all
			const dbRef = ref(database, `/inventory/`);
			const newState = [];
			// get database repsonse
			onValue(dbRef, (res) => {
				const allInventories = res.val();
				// add all returned properties to our state
				for (let type in allInventories) {
					// for each of the objects, iterate through and push each item to the newState array
					for (
						let i = 0;
						i < allInventories[type].length;
						i++
					) {
						newState.push({
							key: allInventories[type][i].key,
							data: allInventories[type][i],
						});
					}
				}
				// set it to state
				setCurrentInventory(newState);
				console.log(newState);
			});
		} else {
			const dbRef = ref(database, `/inventory/${currentlyViewing}`);
			// placeholder state
			const newState = [];
			// get database repsonse
			onValue(dbRef, (res) => {
				const data = res.val();
				// add all returned properties to our state
				for (let key in data) {
					newState.push({
						key: key,
						data: data[key],
					});
				}
				// set it to state
				setCurrentInventory(newState);
				console.log(newState);
			});
		}
	}, [currentlyViewing]);

	return (
		<>
			<Header />
			<main>
				<Display
					currentInventory={currentInventory}
					setCurrentlyViewing={setCurrentlyViewing}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
