import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { onValue, ref, getDatabase } from "firebase/database";

// Eventually import Cart here

function Header() {
	// for stretch goal:
	// declare a state to show whether the cart is visible at the moment or not
	// use a handler function to show the cart

	// Declare a state for cart length
	const [cartLength, setCartLength] = useState(0);

	// On page load and on database update, fetch the amount of items in cart from firebase
	useEffect(() => {
		const database = getDatabase(firebase);
		const dbRef = ref(database, `/user/basket/current/`);
		// get database repsonse (an object of objects which depicts items currently in cart)
		onValue(dbRef, (res) => {
			const itemsInCart = res.val();
			// Get the amount of objects in that object and set that to Cart Length
			// Lift that state back up to App!
			setCartLength(Object.keys(itemsInCart).length);
		});
	}, []);

	return (
		<header className="header">
			<nav>
				<h1>Git Caffeine</h1>
				<div className="icon-container">
					{
						// image goes here
					}
					<FontAwesomeIcon icon={faShoppingCart} />
					<span className="sr-only">
						number of items in cart
					</span>
					<p>{cartLength}</p>
					{/*shopping cart icon and span with count (passed
					as a prop) goes here*/}
				</div>
			</nav>
		</header>
	);
}

export default Header;
