let numbers = +gets();
let arr = [];
for (let i = 1; i <= numbers; i++){
    let num = +gets();
    arr.push(num)
}

let odd = 1;
let even = 1;

for (let j = 0; j < arr.length; j++){
    if (j % 2 === 1){
        odd *= arr[j];
                
    } else {
        even *= arr[j];
       
    }
}
if (odd === even){
    print(`yes ${odd}`)
} else {
    print(`no ${even} ${odd}`)
}