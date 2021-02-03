import mergeSort from './mergeSort';
import insertionSort from './insertionSort';
import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';
import countingSort from './countingSort';
import heapSort from '../heapSort';


const sort = (array, method) => {
  switch (method) {
    case 'Merge Sort':
      return mergeSort(array);
    case 'Insertation Sort':
      return insertionSort(array);
    case 'Bubble Sort':
      return bubbleSort(array);
    case 'Selection Sort':
      return selectionSort(array);
    case 'Counting Sort':
      return countingSort(array);
    case 'Heap Sort':
      return heapSort(array);
    default:
      return;
  }
};

export default sort;
