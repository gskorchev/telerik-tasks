let count = +gets();

for (let i = 1; i <= count; i++){
    let a = +gets();
    let b = a*0.35;
    print(Number(Math.round(b+'e2')+'e-2').toFixed(2));
}