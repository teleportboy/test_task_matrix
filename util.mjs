export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const addSpacesToArray = (array, maxSize) => {
  const result = [];
  for (let i = 0; i < maxSize; i++) {
    result.push(array[i] || ' ');
  }
  return result.join('');
}

export const toArray = element => Array.from(String(element));

export const fillArrayByRandomNums = (array, min, max) => {
  return array.map(() => {
    return randomIntFromInterval(min, max); 
  });
}

export const createArray = size => new Array(size).fill(null);

export const minPositiveNum = array => {
  return Math.min(...array.filter(element => element >= 0));
}