import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import starwarsLogo from "../images/starwars_logo.png"
import "../../styles/navbar.css";

export const Navbar = () => {

	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<button className="SWLogoButton" onClick={() => navigate("/")}>
				<img className="SWLogo" src={starwarsLogo}></img>
			</button>
			<div className="dropdown ml-auto">
				<button className="btn btn-primary dropdown-toggle favoritesButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu px-2">
					{store.favorites.map(item => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
