import { createArray, minPositiveNum } from "./util.mjs";

//Модуль для работы с двумерным массивом. Назвал его матрицей
export const initMatrix = (rowsCount, columnsCount) => {
  const rows = createArray(rowsCount);
  return rows.map(() => createArray(columnsCount));
}

export const fillMatrix = (matrix, values) => {
  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      matrix[i][j] = (values[j + i * length]);
    }
  }
  return matrix;
  // return matrix.map(column => {
  //   return column.map(() => callback());
  // });
}

//Абсолютный минимум
export const minMatrixElement = matrix => {
  let min = 100;

  const result = {
    column: null,
    row: null,
    value: null
  };

  matrix.forEach((column, index) => {
    const minOfColumn = Math.min(...column);
    if (min > minOfColumn) {
      min = minOfColumn;
      result.column = index;
      result.value = min;
    }
  });

  result.row = matrix[result.column].indexOf(result.value);

  return result;
}

//Минимальное положительное число
export const allPositiveMinimums = matrix => {
  const result = [];
  matrix.forEach(column => {
    result.push(minPositiveNum(column));
  })
  return result;
}

//Подсчёт повторений цифр с одинаковым знаком
export const numberSignOverlap = (array, step) => {
  let count = 0;
  let overlapCount = 0;
  let lastSign = Math.sign(array[0]) >= 0 ? '+' : '-';
  array.forEach(element => {
    let currentSign = Math.sign(element) >= 0 ? '+' : '-';;
    count = currentSign === lastSign ? count + 1 : 1;
    lastSign = currentSign;
    if (count === step) {
      overlapCount++;
      count = 1;
    }
  });
  return overlapCount;
}

export const allSignOverlaps = (matrix, step) => {
  const result = [];
  matrix.forEach(column => {
    result.push(numberSignOverlap(column, step));
  });
  return result;
}