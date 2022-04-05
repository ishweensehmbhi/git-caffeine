import firebase from "../firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Cart(props) {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		// get a snapshot of the database
		const database = getDatabase(firebase);
		// make an inquiry at this node
		const dbRef = ref(database, `/user/basket/current/`);

		onValue(dbRef, (res) => {
			// this returns the items as an object of objects
			const response = res.val();
			// keep the key returned from firebase as well as the actual object
			const newCart = Object.keys(response).map((key) => [
				key,
				response[key],
			]);
			// setCurrentInventory(newState);
			setCartItems(newCart);
		});
	}, []);

	// Hide the cart if close button is clicked
	const handleHideCart = () => {
		props.setShowCart(false);
	};

	return (
		<section className="shopping-cart">
			<div className="wrapper">
				<button
					className="close-btn"
					onClick={handleHideCart}
					aria-label="Close shopping cart menu"
				>
					<FontAwesomeIcon
						icon={faClose}
						aria-hidden="true"
					/>
				</button>
				<h2>Items In Your Cart</h2>
				{Object.keys(cartItems).length === 0 ? (
					<p>
						Your cart is currently empty! Why not go
						take a look at some of our awesome products?
						We're certain we've got something just for
						you.
					</p>
				) : (
					<p>
						There are {Object.keys(cartItems).length}{" "}
						items in your cart.
					</p>
				)}
				{cartItems.map((cartItem) => {
					console.log(cartItem);
					return (
						<div className="cart-item" key={cartItem}>
							<div className="img-container">
								<img
									src={`${cartItem[1].imageSource}`}
								></img>
							</div>
							<div className="text-container">
								<h3 className="cart-item-copy">
									{cartItem[1].name}
								</h3>
								<p className="price-copy">
									$ {cartItem[1].price} CAD
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Cart;
