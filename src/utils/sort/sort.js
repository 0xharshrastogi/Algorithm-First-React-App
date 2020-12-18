import mergeSort from "./mergeSort";
import insertionSort from "./insertionSort";
import bubbleSort from "./bubbleSort";
import selectionSort from "./selectionSort";
import countingSort from "./countingSort";

const sort = (array, method) => {
	switch (method) {
		case "Merge Sort":
			return mergeSort(array);
		case "Insertation Sort":
			return insertionSort(array);
		case "Bubble Sort":
			return bubbleSort(array);
		case "Selection Sort":
			return selectionSort(array);
		case "Counting Sort":
			return countingSort(array);
		default:
			return;
	}
};

export default sort;
