import React from "react";
import setOutput from "../utils/setOutput";
import Button from "./Button";
import Card from "./Card";
import CardTitle from "./CardTitle";
import InputField from "./InputField";

const submitKnapsack = () => {
	setOutput("hello");
};

const KnapSack = () => {
	return (
		<Card>
			<CardTitle>Knapsack</CardTitle>
			<div style={{ display: "flex" }}>
				<InputField id="weight" placeholder="1 4 5 2 3" label="Weight" />
				<InputField id="profit" placeholder="8 2 5 6 7" label="Profit" />
			</div>
			<InputField id="maxWeight" placeholder="8" label="Max Weight" />
			<Button onClick={submitKnapsack}>Submit</Button>
		</Card>
	);
};

export default KnapSack;
