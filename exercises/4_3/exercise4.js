let n = 5;
let spaces = 0;
let asterisks = 0;
let lines = 0;

if (n % 2 === 0){
  lines = n / 2;
  asterisks = 2;
} else {
  lines = (n + 1) / 2;
  asterisks = 1;
}

spaces = lines - 1;

for (let i = 0; i < lines; i++){
  let output = "";

  for (let j = spaces; j >= 0; j--){
    output = output + " ";
  }
  for (let k = 0; k < asterisks; k++){
    output = output + "*";
  }
  for (let t = spaces; t >= 0; t--){
    output = output + " ";
  }

  asterisks += 2;
  spaces -= 1;
  console.log(output);
}