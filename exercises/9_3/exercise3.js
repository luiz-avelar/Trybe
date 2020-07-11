// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

const promessa = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    let randomSquareNumber = (Math.random() * 50) ** 2;
    arr.push(randomSquareNumber);
  }
  const sum = arr.reduce((sum, currentNumber) => sum + currentNumber, 0);
  (sum < 8000) ? resolve(Math.floor(sum)) : reject('Falha');
});

promessa
  .then(data => [2, 3, 5, 10].map(num => Math.floor(data / num)))
  .then(result => console.log(result))
  .catch(err => console.log(err));

