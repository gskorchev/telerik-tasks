let line = gets();

let arr = line.split(",")
let result = [];

arr.forEach(item => {
    if (+item != 0){
        result.push(item);
    }
});

arr.forEach(item => {
    if (+item === 0){
        result.push(item);
    }
});

let str = "";
for (let i = 0; i < result.length; i++){
    if (i === result.length - 1){
        str += result[i];
    } else {
        str += result[i] + ",";
    }
}
print(str);