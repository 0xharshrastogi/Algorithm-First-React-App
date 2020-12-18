import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import InputField from "./InputField";
import Button from "./Button";
import kmp from "../utils/kmp";
import setOutput from "../utils/setOutput";

const submitKmp = () => {
	const word = document.getElementById("word").value;
	const text = document.getElementById("text").value;

	const result = kmp(word, text);
	if (result === -1) {
		setOutput("Not Matched");
	} else {
		const { piValues, value } = result;
		const output = `PI Values: ${piValues.join(
			" "
		)}\n\nPattern Found At Index: ${value}`;
		setOutput(output);
	}
};

const Kmp = () => {
	return (
		<Card>
			<CardTitle>KMP Algorithm</CardTitle>
			<div style={{ display: "flex" }}>
				<InputField id="word" placeholder="aabbaac" label="Sentence" />
				<InputField id="text" placeholder="aa" label="Text" />
			</div>
			<Button onClick={submitKmp}>Submit</Button>
		</Card>
	);
};

export default Kmp;
