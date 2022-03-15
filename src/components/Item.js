import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";

function Item(props) {
	// On click, use props to generate an item to add to the cart
	const handleClick = () => {
		const itemToPush = {
			name: props.name,
			imageSource: props.imageSource,
			altText: props.altText,
			price: props.price,
		};
		const database = getDatabase(firebase);
		const currentItemsReference = ref(database, `/user/basket/current`);
		push(currentItemsReference, itemToPush);
	};

	return (
		<li className="item-container">
			<img
				src={`${props.imageSource}`}
				alt={`${props.altText}`}
			></img>
			<h3>{`${props.name}`}</h3>
			<p>${`${props.price}`}</p>
			{/*
				 add a button here that has a value of key and allows for lookups based on that key
				 */}
			<button onClick={handleClick}>Add to Cart +</button>
		</li>
	);
}

export default Item;
