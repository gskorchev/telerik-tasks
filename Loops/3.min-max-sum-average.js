let count = +gets();
let arr = [];
for (let i = 1; i <= count; i++) {
    let a = +gets();
    arr.push(a);

}

let min = +Infinity;
let max = -Infinity;
let sum = 0;

    for (let j = 0; j < arr.length ; j++) {
        
        sum += arr[j];
        
        if (arr[j] < min){
            min = arr[j];
        }

        if (arr[j] > max){
            max = arr[j];
        }
    
    }
let ave = sum / count;

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${ave.toFixed(2)}`);