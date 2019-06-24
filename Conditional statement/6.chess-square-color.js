let label = gets();

switch (label){
    case "a": label = 1; break;
    case "b": label = 2; break;
    case "c": label = 3; break;
    case "d": label = 4; break;
    case "e": label = 5; break;
    case "f": label = 6; break;
    case "g": label = 7; break;
    case "h": label = 8; break;
}

let rank = +gets();
let color = "dark";
if (label % 2 === 0){
    color = "light";
    if (rank % 2 === 0){
        color = "dark";
    }
} else {
    if (rank % 2 === 0) {
        color = "light";
    }
}

print(color);