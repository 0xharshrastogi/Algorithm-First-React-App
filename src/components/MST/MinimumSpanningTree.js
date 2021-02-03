import React from 'react';
import Button from '../Button';
import Card from '../Card';
import CardTitle from '../CardTitle';
import InputField from '../InputField';
import prim from '../../utils/Graph/graph';

const MinimumSpanningTree = ({ setOutput }) => {
  const onClickHandler = () => {
    const matrixStr = document.getElementById('adjecentMat').value;

    const parseMatrix = (str) => {
      const matrix = str.split(',').map((strArr) => {
        let str = strArr.trim().split(' ');
        str = str.map((val) => {
          if (val === '_') {
            return Number.MAX_SAFE_INTEGER;
          } else if (val === '0') {
            return Number.MIN_SAFE_INTEGER;
          } else {
            return parseInt(val);
          }
        });

        return str;
      });
      return matrix;
    };
    // 0 9 2 _ 6, 9 0 3 _ _, 2 3 0 5 _, _ _ 5 0 1, 6 _ _ 1 0
    const adjectMatrix = parseMatrix(matrixStr);

    let output = prim(adjectMatrix)
      .map((edge) => {
        return `Begin ${edge.begin} End ${edge.end} Weight ${edge.weight}`;
      })
      .join('\n');

    setOutput(output);
  };

  return (
    <Card>
      <CardTitle>Prim's Algorithm MST</CardTitle>
      <div>
        <InputField
          label={`Enter Array Matrix("_" for no edge "," for next array in adjecent matrix)`}
          placeholder="0 9 2 _ 6, 9 0 3 _ _, 2 3 0 5 _, _ _ 5 0 1, 6 _ _ 1 0"
          id="adjecentMat"
        />
      </div>
      <Button onClick={onClickHandler}>Submit</Button>
    </Card>
  );
};

export default MinimumSpanningTree;
