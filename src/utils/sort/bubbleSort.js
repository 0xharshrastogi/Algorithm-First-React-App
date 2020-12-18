const bubbleSort = (input) => {
	const arr = input;
	const lenghtOfArray = arr.length;

	for (let i = 0; i < lenghtOfArray; i++) {
		let swapped = false;
		for (let j = 0; j < lenghtOfArray - i - 1; j++) {
			if (arr[j + 1] < arr[j]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
	}
	return arr;
};

// Worst and Average Case Time Complexity: O(n*n)
// Best Case Time Complexity: O(n)
// Auxiliary Space: O(1)
export default bubbleSort;
