import React from "react";
import "./CardTitle.css"

const CardTitle = ({ children }) => {
	return (
		<section className="card-title" >
			<h2>{children}</h2>
		</section>
	);
};

export default CardTitle;
