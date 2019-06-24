let sign = gets();
let number = 0;
switch(sign){
  case "2": number = 2; break;
  case "3": number = 3; break;
  case "4": number = 4; break;
  case "5": number = 5; break;
  case "6": number = 6; break;
  case "7": number = 7; break;
  case "8": number = 8; break;
  case "9": number = 9; break;
  case "10": number = 10; break;
  case "J": number = 11; break;
  case "Q": number = 12; break;
  case "K": number = 13; break;
  case "A": number = 14; break;
}

for (let i = 2; i <= number; i++){
  let str = "";
  switch(i){
    case 11: str = "J"; break;
    case 12: str = "Q"; break;
    case 13: str = "K"; break;
    case 14: str = "A"; break;
    default: str = Number(i); break;
  }
  print(`${str} of spades, ${str} of clubs, ${str} of hearts, ${str} of diamonds`)
}