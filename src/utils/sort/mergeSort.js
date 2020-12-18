const mergeSort = (array) => {
	const lengthOfArray = array.length;

	if (lengthOfArray <= 1) {
		return array;
	}

	const mid = Math.floor(lengthOfArray / 2);

	const leftArray = array.slice(0, mid);
	const rightArray = array.slice(mid);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
	const mergedArray = [];
	const leftArrayLen = leftArray.length;
	const rightArraylen = rightArray.length;

	let i = 0,
		j = 0;

	while (i < leftArrayLen && j < rightArraylen) {
		let elmentA = leftArray[i];
		let elmentB = rightArray[j];

		if (elmentA < elmentB) {
			mergedArray.push(elmentA);
			i++;
		} else {
			mergedArray.push(elmentB);
			j++;
		}
	}

	const sortedArr = [
		...mergedArray,
		...leftArray.slice(i),
		...rightArray.slice(j),
	];

	return sortedArr;
};

export default mergeSort;

