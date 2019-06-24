let list = gets();

let array = list.split(",");

let sum = array.reduce((a, b) => {return +a + (+b)})
let avg = sum / array.length;
print(`avg: ${avg.toFixed(2)}`);
let aboveList = [];
let belowList = [];

for (let i = 0; i < array.length; i++){
    if (array[i] < avg) {
        belowList.push(array[i]);
    } else if(array[i] > avg) {
        aboveList.push(array[i]);
    }
}

print(`below: ${belowList.toString()}`);
print(`above: ${aboveList.toString()}`);