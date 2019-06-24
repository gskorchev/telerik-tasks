let line1 = gets();
let line2 = gets();

let arr1 = line1.split(",");
let arr2 = line2.split(",");

let result = [];

for (let i = 0; i <= arr1.length - 1; i++){
    result.push(arr1[i]);
    result.push(arr2[i]);
}
let abc = "";
for (let i = 0; i < result.length; i++){
    if (i === result.length - 1){
        abc += result[i];
    } else {
        abc += result[i] + ",";

    }
}

print(abc);