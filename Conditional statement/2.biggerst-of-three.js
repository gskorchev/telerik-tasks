let a = +gets();
let b = +gets();
let c = +gets();

let result = [a,b,c].sort((x1, x2) => x2 - x1)[0]
print(result);

// variant 2
// let a = +gets();
// let b = +gets();
// let c = +gets();

// print(Math.max(a, b, c));

