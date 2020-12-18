import React from "react";
import Button from "./Button";
import Card from "./Card";
import CardTitle from "./CardTitle";
import InputField from "./InputField";
import lcs from "../utils/lcs";
import setOutput from "../utils/setOutput";

const setResult = () => {
	const str1 = document.getElementById("string1").value.toUpperCase();
	const str2 = document.getElementById("string2").value.toUpperCase();

	const output = `Method: Longest Common Sequence\n\nResult: ${lcs(
		str1,
		str2
	)}`;


	setOutput(output);
};

const Longest = () => {
	return (
		<Card>
			{/* title */}
			<CardTitle>Longest Common Sequence</CardTitle>

			{/* body */}
			<div style={{ display: "flex" }}>
				<InputField id="string1" placeholder="ABAZDC" label="String 1" />
				<InputField id="string2" placeholder="BACBAD" label="String 2" />
			</div>
			<Button onClick={setResult}>Submit</Button>
		</Card>
	);
};

export default Longest;
