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
								key={currentItem.key}
								imageSource={currentItem.img}
								name={currentItem.name}
								altText={`an image of ${currentItem.name}`}
								price={currentItem.price}
							/>
						);
					})
				}
			</ul>
		</section>
	);
}

export default Display;
