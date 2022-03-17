function Sidebar(props) {
	function handleClick(e) {
		// When button is clicked, set the state of currentlyViewing [as received from Display] to the value received
		props.setCurrentlyViewing(e.target.value);
	}
	// Return a sidebar where the buttons all have unique values and a handle click function assigned
	return (
		<aside className="buttons-bar">
			<h2>filter by</h2>
			<button
				value={"all"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				all
			</button>
			<button
				value={"coffees"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				coffee
			</button>
			<button
				value={"teas"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				tea
			</button>
			<button
				value={"merch"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				merch
			</button>
		</aside>
	);
}

export default Sidebar;
