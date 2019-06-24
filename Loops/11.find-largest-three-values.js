let numbers = +gets();
let arr = [];
for (let i = 1; i <= numbers; i++){
    let num = +gets();
    arr.push(num)
}

let sorted = arr.sort(function(a, b) {return a - b})
let reverseSorted = sorted.reverse()

print(`${reverseSorted[0]}, ${reverseSorted[1]} and ${reverseSorted[2]}`)
