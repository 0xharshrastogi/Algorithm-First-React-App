import React from "react";
import "./Body.css";
import BodyLeft from "./BodyLeft";
import BodyRight from "./bodyRight";

const Body = () => {
	return (
		<section className="wrapper split">
			{/* left */}
			<BodyLeft />

			{/* Right */}
			<BodyRight />
		</section>
	);
};
export default Body;
