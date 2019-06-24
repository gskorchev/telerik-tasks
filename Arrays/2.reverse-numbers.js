let arr = gets();

let array = arr.split(", ");
let sorted = array.reverse();


let result = sorted.toString().replace(/,/g,", ");

print(result);