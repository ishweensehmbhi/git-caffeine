import Item from "./Item";

function Display(props) {
	// run a constructor to display all the items
	return (
		<section className="display-inventory wrapper">
			<ul>
				{
					// map over array
					props.currentlyShowing.map((currentItem) => {
						return (
							<Item
								key={currentItem.data.key}
								imageSource={
									currentItem.data.img
								}
								name={currentItem.data.name}
								altText={currentItem.data.name}
							/>
						);
					})
				}
			</ul>
		</section>
	);
}

export default Display;
