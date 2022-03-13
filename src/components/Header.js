// import { useState, useEffect } from "react";

function Header() {
	// const [shoppingBag, setShoppingBag] = useState([]);

	return (
		<header className="header">
			<nav>
				<a href="#">
					<h1>Git Some Caffeine!</h1>
				</a>
				<div className="icon-container">
					{
						// image goes here
					}
					<span>
						{
							1
							//some prop
						}
					</span>
					{/*shopping cart icon and span with count (passed
					as a prop) goes here*/}
				</div>
			</nav>
			<p>
				Code got you down? Git some caffeine! (We have decaf
				too!)
			</p>
		</header>
	);
}

export default Header;