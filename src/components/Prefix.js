import React from "react";
import Button from "./Button";
import Card from "./Card";
import CardTitle from "./CardTitle";
import InputField from "./InputField";
import prefix from "../utils/longestPrefixSuffix";
import setOutput from "../utils/setOutput";

const findPrefix = () => {
	const val = document.getElementById("prefixStr").value.toLowerCase();
	const output = `Method: Longest prefix which is also suffix\nResult:  ${prefix(
		val
	)}`;

	setOutput(output);
};

const Prefix = () => {
	return (
		<Card>
			<CardTitle>Longest prefix which is also suffix</CardTitle>
			<InputField id="prefixStr" label="String" placeholder="abbcaab" />
			<Button onClick={findPrefix}>Submit</Button>
		</Card>
	);
};

export default Prefix;
