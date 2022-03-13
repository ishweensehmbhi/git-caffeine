function Item(props) {
	return (
		<li className="item-container">
			<img
				src={`${props.imageSource}`}
				alt={`${props.altText}`}
			></img>
			<h2>{`${props.name}`}</h2>
			<p>$ 25.00</p>
		</li>
	);
}

export default Item;
