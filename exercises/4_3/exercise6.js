let number = 13;
let counter = 0;

for (i = 1; i <= number; i+=1){
  if (number % i === 0){
    counter += 1;
  }
}

if (counter === 2){
  console.log("Prime number")
} else {
  console.log("Not a prime number")
}