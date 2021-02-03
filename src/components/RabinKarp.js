import React, { Component } from 'react';
import Button from './Button';
import Card from './Card';
import CardTitle from './CardTitle';
import InputField from './InputField';
import setOutput from '../utils/setOutput';
import rabinKarp from '../utils/rabinKarp';

class RabinKarp extends Component {
	state = {
		string: '',
		subString: '',
	};

	submitInput = async () => {
		const string = document.getElementById('rabinText')
			.value;
		const subString = document.getElementById(
			'rabinPattern'
		).value;

		if (!string || !subString) {
			setOutput('Empty Inputs');
			return;
		}

		await this.setState({ string, subString });
		let output =
			rabinKarp(string, subString)
				.map((position) => {
					return `Found At ${position}`;
				})
				.join('\n') || null;
				
		output = `Algo: Rabin-Karp Algorithm\n\nResult:\n${output}`;

		this.props.setOutput(output);
	};

	render() {
		return (
			<div>
				<Card>
					<CardTitle>Rabin-Karp Algorithm</CardTitle>
					<div style={{ display: 'flex' }}>
						<InputField
							id="rabinText"
							placeholder="this is a text"
							label="Text"
						/>
						<InputField
							id="rabinPattern"
							placeholder="text"
							label="Pattern"
						/>
					</div>
					<Button onClick={this.submitInput}>Submit</Button>
				</Card>
			</div>
		);
	}
}

export default RabinKarp;

// 2359023141526739921
// 31415
