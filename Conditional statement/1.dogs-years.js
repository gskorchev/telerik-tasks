let humanYear = +gets();
let dogYear = 0;

for (let count = 0; count <= humanYear; count++)
if (count == 1) {
    dogYear += 10;
} else if (count == 2) {
    dogYear += 10;
} else if (count > 2) {
    dogYear += 4;
}
print(dogYear);