let list = gets();
let arr = list.split(",")

let result = [];

for(let i = 0; i <= arr.length; i++){
    if (+arr[i] < 0){
        result.push(arr[i]);
    }
}

for(let i = 0; i <= arr.length; i++){
    if (+arr[i] == 0){
        result.push(arr[i]);
    }
}

for (let i = 0; i <= arr.length; i++){
    if (+arr[i] > 0){
        result.push(arr[i]);
    }
}
print(result);