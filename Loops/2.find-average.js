let count = +gets();
let result = 0;
for (let i = 1; i <= count; i++){
    let a = +gets();
    result += a;
}

print((result / count).toFixed(2));
