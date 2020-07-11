// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const promessa = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    let randomSquareNumber = (Math.random() * 50) ** 2;
    arr.push(randomSquareNumber);
  }
  const sum = arr.reduce((sum, currentNumber) => sum + currentNumber, 0);
  (sum < 8000) ? resolve(Math.floor(sum)) : reject("É mais de oito mil! Essa promise deve estar quebrada!");
});

promessa
  .then(data => [2, 3, 5, 10].map(num => Math.floor(data / num)))
  .then(sum => sum.reduce((total, num) => total + num, 0))
  .then(result => console.log(result))
  .catch(err => console.log(err));