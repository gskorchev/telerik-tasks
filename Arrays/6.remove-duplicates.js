let n = gets();

let arr = n.split(",")
let uniqueItems = Array.from(new Set(arr))
print(uniqueItems)