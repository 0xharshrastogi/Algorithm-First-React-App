const newMatrix = (m = 0, n = 0) => {
	const matrix = new Array(m);
	for (let i = 0; i < m; i++) {
		matrix[i] = new Array(n);
	}
	return matrix;
};

const knapSack = (items, maxWeight) => {
	const matrix = newMatrix(items.length + 1, maxWeight + 1);
	for (let i = 0; i < items.length + 1; i++) {
		for (let j = 0; j < maxWeight + 1; j++) {
			matrix[i][j] = Math.max(
				matrix[i - 1][j],
				matrix[i - 1][j - items[i].weight] + items[i].profit
			);
		}
	}
	console.log(matrix);
};

class Item {
	constructor(weight, profit) {
		this.weight = weight;
		this.profit = profit;
	}
}

const data = [new Item(3, 2), new Item(4, 3), new Item(6, 1), new Item(5, 4)];

knapSack(data, 8);
