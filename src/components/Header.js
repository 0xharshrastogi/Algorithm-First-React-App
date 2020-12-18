import React from "react";
import "./Header.css";

const Header = ({ children }) => {
	return (
		<header className="head-wrapper">
			<h1 className="title">{children}</h1>
		</header>
	);
};

export default Header;
