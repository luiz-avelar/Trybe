function largestNumberIndex (array){
  let maxNumber = Math.max(...array);
  let index = [];
  for (i in array){
    if (array[i] === maxNumber){
      index.push(i);
    }
  }
  return index;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(largestNumberIndex(array));
