let num = +gets();
let result = 0;

for (let i = 1; i <= num; i++) {
    if ((i % 3 == 0) || (i % 7 == 0)) {

    } else {
        result = result + i + " ";
    }
}

print(result);