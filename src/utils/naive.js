function naive(string, str) {
	var i = string.indexOf(str, 0);
	let output = "";

	while (i !== -1) {
		// ++counter;
		output += `Shift ${i} \n`;
		i = string.indexOf(str, i + 1);
	}
	return output;
}

export default naive;
