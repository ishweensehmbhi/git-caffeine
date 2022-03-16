import "./App.css";
import { useState } from "react";
// Import Display component
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
	// Second state is for whether the cart is visible to the user or not at the moment
	const [cartVisible, setCartVisibility] = useState(false);

	return (
		<>
			<Header
			// cartLength={cartLength}
			// setCartLength={setCartLength}
			/>
			<main>
				<Display />
			</main>
			<Footer />
		</>
	);
}

export default App;
