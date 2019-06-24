let arr = gets();

let array = arr.split(", ");
let sorted = array.sort(function(a, b){return b - a})


let result = sorted.toString().replace("[","").replace("]","").replace(/,/g,", ")

print(result);