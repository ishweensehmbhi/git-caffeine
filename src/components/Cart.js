import firebase from "../firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";

function Cart() {
	const [cartItems, setCartItems] = useState({});

	useEffect(() => {
		// get a snapshot of the database
		const database = getDatabase(firebase);
		// make an inquiry at this node
		const dbRef = ref(database, `/user/basket/current/`);

		onValue(dbRef, (res) => {
			// this returns the items as an object of objects
			const newCart = res.val();

			// setCurrentInventory(newState);
			setCartItems(newCart);
		});
	}, []);

	return null;
}

export default Cart;
