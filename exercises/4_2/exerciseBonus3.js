let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (let i = 0; i < numbers.length; i++){
    if (i === numbers.length - 1){
        numbersMultiplied.push(numbers[i] * 2);
        continue;
    }
    numbersMultiplied.push(numbers[i] * numbers[i + 1]);
}

console.log(numbersMultiplied) 