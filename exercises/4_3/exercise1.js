/*
let n = 5;
let line = []

for (let i = 0; i < n; i++){
  line.push("*")
}

for (let j = 0; j < n; j++){
  console.log(...line)
}
*/

let n = 5;

for (i = 0; i < n; i++){
  let output = ""
  for (j = 0; j < n; j++){
    output = output + "*" 
  } 
  console.log(output)
}

