const MAX_INTEGER = Number.MAX_SAFE_INTEGER;
const MIN_INTEGER = Number.MIN_SAFE_INTEGER;

class Edge {
  constructor(begin, end, weight) {
    this.begin = begin;
    this.end = end;
    this.weight = weight;
  }

  getBegin() {
    return this.begin;
  }

  getEnd() {
    return this.end;
  }

  getWeight() {
    return this.weight;
  }
}

const prim = (matrix) => {
  const rows = matrix.length,
    cols = rows,
    result = [],
    savedNode = [0];
  let minVex = -1,
    minWeight = MAX_INTEGER;

  for (let i = 0; i < rows; i++) {
    let row = savedNode[i],
      edgeArr = matrix[row];

    for (let j = 0; j < cols; j++) {
      let condition = edgeArr[j] < minWeight && edgeArr[j] !== MIN_INTEGER;

      if (condition) {
        minWeight = edgeArr[j];
        minVex = j;
      }
    }

    if (savedNode.indexOf(minVex) === -1 && i === savedNode.length - 1) {
      savedNode.push(minVex);

      result.push(new Edge(row, minVex, minWeight));

      i = -1;
      minWeight = MAX_INTEGER;

      matrix[row][minVex] = MAX_INTEGER;
      matrix[minVex][row] = MAX_INTEGER;
    }
  }
  return result;
};

export default prim;
