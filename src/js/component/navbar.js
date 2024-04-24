import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light m-5 d-flex justify-content-end">
			<div className="">
				<Link to="/add">
					<button className="btn btn-primary ">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
