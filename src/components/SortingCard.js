import React from "react";
import Card from "./Card";
import Button from "./Button";
import CardTitle from "./CardTitle";
import InputField from "./InputField";
import "./SortingCard.css";
import sort from "../utils/sort/sort";
import setOutput from "../utils/setOutput";

const parseArray = (arrayStr) => {
	return arrayStr
		.trim()
		.split(" ")
		.map((val) => parseInt(val));
};

class SortingCard extends React.Component {
	submitSort = () => {
		const method = document.getElementById("method").value;
		const inputArray = document.getElementById("array").value;

		const output = `Method: ${method}\n\nSorted Array:\n${sort(
			parseArray(inputArray),
			method
		).join(" ")}`;

		setOutput(output);
	};

	render() {
		return (
			<Card>
				{/* title */}

				<CardTitle>Sorting</CardTitle>

				{/* Card Body */}

				<section>
					<form>
						<div className="selection-menu">
							<label htmlFor="method">Method</label>
							<div>
								<select name="Sorting Method" id="method">
									<option value="Merge Sort">Merge Sort</option>
									<option value="Selection Sort">Selection Sort</option>
									<option value="Bubble Sort">Bubble Sort</option>
									{/* <option value="Quick Sort">Quick Sort</option> */}
									<option value="Counting Sort">Counting Sort</option>
									<option value="Insertation Sort">Insertion Sort</option>
								</select>
								{/* <span>+</span> */}
							</div>
						</div>
					</form>

					<InputField
						id="array"
						label="Single Spaced Seprated Array"
						placeholder="9 5 3 1 1 5"
					></InputField>
				</section>

				{/* Button */}

				<Button onClick={this.submitSort}>Sort</Button>
			</Card>
		);
	}
}

export default SortingCard;
