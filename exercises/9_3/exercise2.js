// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!


const promessa = new Promise(
  (resolve, reject) => {
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      let randomSquareNumber = (Math.random() * 50) ** 2;
      arr.push(randomSquareNumber);
    }
    const sum = arr.reduce((sum, currentNumber) => sum + currentNumber, 0);
    (sum < 8000) ? resolve() : reject();
  }
)

promessa
  .then(() => console.log("Sucesso"))
  .catch(() => console.log("Falha"))