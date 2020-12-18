function solve(string) {
	for (let i = Math.floor(string.length / 2); i > 0; i--) {
		let prefix = string.slice(0, i);
		let suffix = string.slice(-i);

		if (prefix === suffix) {
			return i;
		}
	}
	return 0;
}

export default solve;
