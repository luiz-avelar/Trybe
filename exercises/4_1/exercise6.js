let piece = "pawn";
let piece_lowerCase = piece.toLowerCase();

switch (piece_lowerCase){
    case "pawn":
        console.log("Moves vertically one or two squares");
        break;
    case "bishop":
        console.log("Moves diagonally any number of squares");
        break;
    case "knight":
        console.log("Moves in L shape");
        break;
    case "rook":
        console.log("Moves horizontally or vertically any number os squares");
        break;
    case "queen":
        console.log("Moves horizontally, vertically or diagonally any number of squares. But is unable to jump over pieces");
        break;
    default:
        console.log("Moves horizontally, vertically or diagonally any number of squares and is able to jump over pieces");
}   
