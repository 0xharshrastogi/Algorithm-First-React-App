import React from "react";
import "./BodyRight.css";

const bodyRight = () => {
	return (
		<section className="output" data-side="right">
			<h2 className="title">Output Log</h2>
			<pre id="output-log"></pre>
		</section>
	);
};

export default bodyRight;
