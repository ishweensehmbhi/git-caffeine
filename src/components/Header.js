// import { useState, useEffect } from "react";

// FontAwesome Imports
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<header className="header">
			<nav>
				<a href="#">
					<h1>Git Caffeine</h1>
				</a>
				<div className="icon-container">
					{
						// image goes here
					}
					<span>
						{
							1
							//some prop here that receives data from firebase about what is in the cart
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
