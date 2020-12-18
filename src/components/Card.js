import React from "react";
import "./Card.css";

const Card = ({ children }) => {
	return <article className="card">{children}</article>;
};

export default Card;
