// Refatore a Promise para utilizar somente async e await.

const promessa = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    let randomSquareNumber = (Math.random() * 50) ** 2;
    arr.push(randomSquareNumber);
  }
  const sum = arr.reduce((sum, currentNumber) => sum + currentNumber, 0);
  (sum < 8000) ? resolve(Math.floor(sum)) : reject("É mais de oito mil! Essa promise deve estar quebrada!");
});

const asyncAwaitFunction = async () => {
  try {
    const promise = await promessa;
    const resultado = [2, 3, 4, 5].map(num => Math.floor(promise / num)).reduce((total, num) => total + num, 0);
    console.log(resultado);
  } 
  catch (err) {
    console.log(err);
  }
}

asyncAwaitFunction();
 