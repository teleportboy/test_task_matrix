import { initMatrix, fillMatrix, minMatrixElement,
         allPositiveMinimums, allSignOverlaps } from './matrix.mjs';
import { displayMatrix, mapMatrix } from './display.mjs';
import { createArray, fillArrayByRandomNums } from './util.mjs'

const n = 10, m = 10;
const elementsCount = n * m;

let array = createArray(elementsCount);
array = fillArrayByRandomNums(array, -100, 100);

let matrix = initMatrix(n, m);
matrix = fillMatrix(matrix, array);

const absoluteMinimum = minMatrixElement(matrix);
const allMinimums = allPositiveMinimums(matrix);
const allOverlaps = allSignOverlaps(matrix, 3);

displayMatrix(mapMatrix(matrix, absoluteMinimum, allMinimums, allOverlaps, 5));