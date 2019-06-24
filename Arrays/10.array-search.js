let line = gets();

let arr = line.split(",")
arr = arr.map(Number);
let n = arr.length;

let missingInts = [];
for (let i = 1; i <= n; i++){
    if (arr.indexOf(i) == -1) {
        missingInts.push(i);
    }
}
print(missingInts.toString());
