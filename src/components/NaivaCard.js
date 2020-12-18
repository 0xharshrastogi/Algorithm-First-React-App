import React from "react";
import Button from "./Button";
import Card from "./Card";
import CardTitle from "./CardTitle";
import InputField from "./InputField";
import naive from "../utils/naive";
import setOutput from "../utils/setOutput";

class NaivaCard extends React.Component {
	state = {
		string: "",
		subString: "",
	};

	submitInput = async () => {
		const string = document.getElementById("string").value;
		const subString = document.getElementById("sub-string").value;

		if (!string || !subString) {
			setOutput("Empty Inputs");
			return;
		}

		await this.setState({ string, subString });
		let output = naive(string, subString) || null;
		output = `Algo: Naive String Matching Algorithm\n\n<strong>Result</strong>:\n${output}`;
		setOutput(output);
	};

	render() {
		return (
			<Card>
				{/* title */}
				<CardTitle>Naive String Matching Algorithm </CardTitle>

				{/* body */}
				<div style={{ display: "flex" }}>
					<InputField id="string" placeholder="abbbcaabc" label="String" />
					<InputField id="sub-string" placeholder="abc" label="Sub String" />
				</div>
				<Button onClick={this.submitInput}>Submit</Button>
			</Card>
		);
	}
}

export default NaivaCard;
