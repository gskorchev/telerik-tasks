let n = +gets();
for (let i = 1; i <= n; i++){
    let line = gets();
    let arr = line.split(",");
    let isOrdered = true;
   for (let j = 0; j <= arr.length - 2;j++){
        if (+arr[j] > +arr[j + 1]) {
            isOrdered = false;
        }
    }
    print(isOrdered);
}