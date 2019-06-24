let line = gets();
let n = +gets();

let arr1 = line.split(",")
if (n > arr1.length) {
    n = n % arr1.length;
}

let cuted = arr1.splice(0, n);
let result = arr1.concat(cuted);
print(result)
