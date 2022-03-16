// import firebase from "../firebase";
// import { getDatabase, onValue, ref } from "firebase/database";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from "react";

// function Cart() {
// 	const [cartItems, setCartItems] = useState({});

// 	useEffect(() => {
// 		// get a snapshot of the database
// 		const database = getDatabase(firebase);
// 		// make an inquiry at this node
// 		const dbRef = ref(database, `/user/basket/current/`);

// 		onValue(dbRef, (res) => {
// 			// this returns the items as an object of objects
// 			const newCart = res.val();

// 			// setCurrentInventory(newState);
// 			setCartItems(newCart);
// 			console.log(newCart);
// 		});
// 	}, []);

// 	return (
// 		<section className="shopping-cart">
// 			<button>
// 				<FontAwesomeIcon icon={faClose} />
// 			</button>
// 			<h2>Items In Your Cart</h2>
// 			<hr />
// 		</section>
// 	);
// }

// export default Cart;
