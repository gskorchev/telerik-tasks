const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
  '-12,-2,0,0,0,3,13,5,1'
  ];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let list = gets();
let arr = list.split(",")

let belowList = [];

for(let i = 0; i <= arr.length; i++){
    if (arr[i] <= 0){
        belowList.push(arr[i]);
    }
}
let result = belowList.sort(function(a, b) {return a - b});
for (let i = 0; i <= arr.length; i++){
    if (arr[i] > 0){
        result.push(arr[i]);
    }
}
print(result)