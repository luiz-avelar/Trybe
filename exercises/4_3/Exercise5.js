let n = 7;
let lines = (n + 1) / 2;
let spaces = lines - 1;
let middle_spaces = 0;

for (let i = 0; i < lines; i+=1){
  let output = "";
  if (spaces === 0){
    for (let j = 0; j < n; j+=1){
      output = output + "*";
    }
    console.log(output);
    break;
  } 
  for (let k = spaces; k > 0; k--){
    output = output + " ";
  }
  output = output + "*";
  if (middle_spaces === 0){
    for (let p = spaces; p > 0; p--){
      output = output + " ";
    }
    middle_spaces += 1;
  } else {
    for (let l = 0; l < middle_spaces; l++){
      output = output + " ";
    }
    output = output + "*";
    for (let t = spaces; t > 0; t--){
      output = output + " ";
    }
    middle_spaces += 2;
  }
  spaces -= 1; 
  console.log(output);
}

 