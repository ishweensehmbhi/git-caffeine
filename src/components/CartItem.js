import firebase from "../firebase";
import { getDatabase, ref, remove } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItem(props) {
	// add a handleRemove function

	function handleRemove(id) {
		console.log(id);
		const database = getDatabase(firebase);
		const dbRef = ref(database, `/user/basket/current/${id}`);
		remove(dbRef);
	}

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
					value={props.cartItem[0]}
					className="remove-btn"
					aria-label="remove item from cart"
					onClick={() => {
						handleRemove(props.cartItem[0]);
					}}
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
