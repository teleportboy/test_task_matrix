import { toArray, addSpacesToArray } from "./util.mjs";

export const mapRow = (row, minPositive, signOverlaps, asterisk, reservedSpace) => { 
  const mappedRow = row.map(element => {
    const num = toArray(element);
    return addSpacesToArray(num, reservedSpace);
  });

  mappedRow.push(addSpacesToArray(toArray(minPositive), reservedSpace));
  mappedRow.push(addSpacesToArray(toArray(signOverlaps), reservedSpace));
  mappedRow.push(addSpacesToArray(toArray(asterisk), reservedSpace));

  return mappedRow;
}

export const mapMatrix = (matrix, absoluteMinimum, allMinimums, allOverlaps, reservedSpace) => {
  const mappedMatrix = [];
  matrix.forEach((column, i) => {
    const asterisk = absoluteMinimum.column === i ? '*' : ' ';
    mappedMatrix.push(mapRow(
      column, allMinimums[i], allOverlaps[i], asterisk, reservedSpace
    ));
  });

  return mappedMatrix;
}


export const displayArray = array => {
  array.forEach(element => {
    console.log(element);
  });
}

export const displayMatrix = matrix => {
  const rowLength = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < rowLength; j++) {
      const whatToWrite = rowLength - j;
      switch (whatToWrite) {
        case 3:
          process.stdout.write('\x1b[32m' + matrix[i][j] + ' ' + '\x1b[0m');
          break;
        case 2:
          process.stdout.write('\x1b[33m' + matrix[i][j] + ' ' + '\x1b[0m');
          break;
        case 1:
          process.stdout.write('\x1b[31m' + matrix[i][j] + ' ' + '\x1b[0m');
          break;
        default:
          process.stdout.write('\x1b[34m' + matrix[i][j] + ' ' + '\x1b[0m');
          break;
      }
    }
    process.stdout.write('\r\n');
  }
}