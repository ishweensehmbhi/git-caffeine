import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Item(props) {
	// On click, use the passed in props to generate an item to add to the cart
	const handleAdd = () => {
		const addedItem = {
			name: props.name,
			imageSource: props.imageSource,
			altText: props.altText,
			price: props.price,
		};
		const database = getDatabase(firebase);
		// Add this item to the user's basket
		const currentItemsRef = ref(database, `/user/basket/current`);
		push(currentItemsRef, addedItem);
	};

	// Create Item Card based on the props passed in by the Display element
	return (
		<li className="item-container">
			<img src={`${props.imageSource}`} alt={`${props.altText}`} />

			<div className="details-container">
				<h3>{`${props.name}`}</h3>
				<p>${`${props.price}`}</p>
			</div>
			<button onClick={handleAdd}>
				<FontAwesomeIcon icon={faSquarePlus} />
				Add to Cart
			</button>
		</li>
	);
}

export default Item;
