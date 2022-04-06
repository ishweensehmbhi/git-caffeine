import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItem(props) {
	// add a handleRemove function

	return (
		<div className="cart-item" key={props.cartItem[0]}>
			<div className="img-container">
				<img
					src={`${props.cartItem[1].imageSource}`}
					alt={`${props.cartItem[1].altText}`}
				></img>
			</div>
			<div className="text-container">
				<h3 className="cart-item-copy">
					{props.cartItem[1].name}
				</h3>
				<p className="price-copy">
					$ {props.cartItem[1].price} CAD
				</p>
				<button
					className="remove-btn"
					aria-label="remove item from cart"
				>
					<FontAwesomeIcon
						icon={faTrash}
						aria-hidden="true"
					/>
				</button>
			</div>
		</div>
	);
}

export default CartItem;
