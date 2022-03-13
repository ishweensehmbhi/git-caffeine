function Item(props) {
	return (
		<li className="item-container">
			<h2>{`${props.name}`}</h2>
			<img
				src={`${props.imageSource}`}
				alt={`${props.altText}`}
			></img>
		</li>
	);
}

export default Item;
