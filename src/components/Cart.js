import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";

function Cart(props) {
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
				{Object.keys(props.cartItems).length === 0 ? (
					<p>
						Your cart is currently empty! Why not go
						take a look at some of our products? We're
						certain we've got something just for you.
					</p>
				) : (
					<p>
						There are{" "}
						{Object.keys(props.cartItems).length} items
						in your cart.
					</p>
				)}
				{props.cartItems.map((cartItem) => {
					return (
						<CartItem
							key={cartItem[0]}
							cartItem={cartItem}
						/>
					);
				})}
				{Object.keys(props.cartItems).length > 0 ? (
					<button
						className="checkout-btn"
						aria-label="checkout items in cart"
					>
						Checkout
					</button>
				) : null}
			</div>
		</section>
	);
}

export default Cart;
