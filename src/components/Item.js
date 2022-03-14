function Item(props) {
	return (
		<li className="item-container">
			<img
				src={`${props.imageSource}`}
				alt={`${props.altText}`}
			></img>
			<h3>{`${props.name}`}</h3>
			<p>${`${props.price}`}</p>
		</li>
	);
}

export default Item;
