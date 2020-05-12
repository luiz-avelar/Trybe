let piece = bishop;
let piece_lowerCase = piece.toLowerCase();

if (piece_lowerCase === pawn){
    console.log(straight)
}

else if (piece_lowerCase === bishop){
    console.log(diagonal)
}
else if (piece_lowerCase === knight){
    console.log("L movement")
}
else if (piece_lowerCase === rook){
    console.log(straight)
}

else if (piece_lowerCase === queen){
    console.log("every direction")
}
else {
    console.log("every direction")
}