let piece = "bishop";
let piece_lowerCase = piece.toLowerCase();

switch (piece_lowerCase){
    case "pawn":
        alert("Moves vertically one or two squares")
        break;
    case "bishop":
        alert("Moves diagonally any number of squares")
        break;
    case "knight":
        alert("Moves in L shape")
        break;
    case "rook":
        alert("Moves horizontally or vertically any number os squares")
        break;
    case "queen":
        alert("Moves horizontally, vertically or diagonally any number of squares. But are unable to jump over pieces")
        break;
    default:
        alert("Moves horizontally, vertically or diagonally any number of squares and is able to jump over pieces");
}   
