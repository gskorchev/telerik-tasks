let numbers = +gets();
let arr = [];
for (let i = 1; i <= numbers; i++){
    let num = +gets();
    arr.push(num)
}
let memo = arr[0];
for (let j = 1; j < arr.length; j++){
   if (memo < arr[j]){
    memo = arr[j]
   }
}
print(memo)