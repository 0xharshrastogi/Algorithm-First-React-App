const findSmallest = (arr, startIndex, endIndex) => {
	//startIndex inclusive, endIndex : exclusive
	let small = startIndex;

	for (let i = startIndex + 1; i < endIndex; i++) {
		if (arr[i] < arr[small]) {
			small = i;
		}
	}

	return small;
};

const selectionSort = (input) => {
	const arr = input;
	const lengthOfArray = arr.length;

	for (let i = 0; i < lengthOfArray - 1; i++) {
		let small = findSmallest(arr, i, lengthOfArray);

		[arr[i], arr[small]] = [arr[small], arr[i]];
	}

	return arr;
};

// Time Complexity: O(n ** 2)
// Auxilarry Space: O(1)
export default selectionSort;
