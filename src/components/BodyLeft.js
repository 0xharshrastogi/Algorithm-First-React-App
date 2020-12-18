import React from "react";
import "./BodyLeft.css";
import SortingCard from "./SortingCard";
import NaivaCard from "./NaivaCard";
import Longest from "./Longest";
import Prefix from "./Prefix";
import Kmp from "./Kmp";

const BodyLeft = () => {
	return (
		<section className="container left-body mt2" data-side="left">
			{/* sorting card */}
			<SortingCard />

			{/* nieve */}
			<NaivaCard />

			{/* Longest Comman Sequence */}
			<Longest />

			<Prefix />

			<Kmp />
		</section>
	);
};

export default BodyLeft;
