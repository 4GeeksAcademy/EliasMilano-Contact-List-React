import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black mt-3 mb-3">
			<Link to="/">
				<span className="navbar mb-0 text-success h3">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/create">
					<button className="btn btn-success text-black">Create contact</button>
				</Link>
			</div>
		</nav>
	);
};
