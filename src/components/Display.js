import Item from "./Item";
import Sidebar from "./Sidebar";

// use state to control what is being showed with display

function Display(props) {
	// run a constructor to display all the items
	return (
		<section className="display-inventory">
			<Sidebar setCurrentlyViewing={props.setCurrentlyViewing} />
			<ul>
				{
					// map over array
					props.currentInventory.map((currentItem) => {
						return (
							<Item
								key={currentItem.data.key}
								imageSource={
									currentItem.data.img
								}
								name={currentItem.data.name}
								altText={currentItem.data.name}
								price={currentItem.data.price}
							/>
						);
					})
				}
			</ul>
		</section>
	);
}

export default Display;
