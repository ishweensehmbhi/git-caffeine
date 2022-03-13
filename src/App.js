import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import "./App.css";
// Import Display component
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
	// a state that represents what the user wants to view

	const [currentInventory, setCurrentInventory] = useState([]);
	// a state that represents the current inventory as selected by the user
	// const [currentInventory, setCurrentInventory] = useState({});
	const [currentlyViewing, setCurrentlyViewing] = useState("");

	// show everything from DB in initial render of the page
	useEffect(
		() => {
			const database = getDatabase(firebase);
			const allRef = ref(database, "/");
			const teaRef = ref(database, "/inventory/teas");
			const coffeeRef = ref(database, "/inventory/coffees");
			const newState = [];

			// get database repsonse
			onValue(coffeeRef, (res) => {
				// placeholder state

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
			});
		},
		[] // this would likely be changed to currentView later, so that the page can re-render based on what the user wants to see)
	);

	return (
		<>
			<Header />
			<main>
				<Display currentlyShowing={currentInventory} />
			</main>
			<Footer />
		</>
	);
}

export default App;
