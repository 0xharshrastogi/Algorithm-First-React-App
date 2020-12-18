const insertionSort = (array, start = 0, end = array.length) => {
	for (let i = start + 1; i < end; i++) {
		let keyElement = array[i];

		let j = i - 1;
		while (j >= 0 && keyElement < array[j]) {
			j--;
		}
		for (let k = i; k >= j + 1; k--) {
			array[k] = array[k - 1];
		}

		array[j + 1] = keyElement;
	}
	return array;
};
export default insertionSort;
