import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { onValue, ref, getDatabase } from "firebase/database";

function Header() {
	const [cartLength, setCartLength] = useState(0);
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	// On page load and on database update
	// fetch the amount of items in cart from firebase
	useEffect(() => {
		const database = getDatabase(firebase);
		const dbRef = ref(database, `/user/basket/current/`);
		// Get database repsonse (an object of objects which depicts items currently in cart)
		onValue(dbRef, (res) => {
			const response = res.val();
			if (response != null) {
				// keep the key returned from firebase as well as the actual object
				const newCart = Object.keys(response).map((key) => [
					key,
					response[key],
				]);
				// get the amount of objects in that object and set that to Cart Length
				setCartLength(Object.keys(response).length);
				// setCurrentInventory(newState);
				setCartItems(newCart);
			} else {
				setCartLength(0);
				setCartItems([]);
			}
		});
	}, []);

	const handleShowCart = () => {
		setShowCart(true);
	};

	// Render header with page title and shopping cart icon + number of items in cart
	return (
		<header className="header">
			<nav>
				<h1>Git Caffeine</h1>
				<div
					className="icon-container"
					onClick={handleShowCart}
				>
					<FontAwesomeIcon icon={faShoppingCart} />
					<span className="sr-only">
						number of items in cart
					</span>
					<p>{cartLength}</p>
				</div>
			</nav>
			{showCart ? (
				<Cart setShowCart={setShowCart} cartItems={cartItems} />
			) : null}
		</header>
	);
}

export default Header;
