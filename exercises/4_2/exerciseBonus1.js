let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux;
for (let i = 1; i < numbers.length; i++){
    for (let j = 0; j < i; j++){
        if (numbers[j] > numbers[i]){
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers)