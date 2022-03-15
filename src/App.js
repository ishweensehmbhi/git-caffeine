import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import "./App.css";
// Import Display component
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
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
			// get database repsonse (an object of 3 arrays)
			onValue(dbRef, (res) => {
				const allInventories = res.val();
				// combine all arrays into one big array using spread
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
