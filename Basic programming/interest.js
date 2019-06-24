let deposit = +gets();

let deposit1 = deposit + (deposit * 0.05);

let deposit2 = deposit1 + (deposit1 * 0.05);

let deposit3 = deposit2 + (deposit2 * 0.05);

print(deposit1.toFixed(2));
print(deposit2.toFixed(2));
print(deposit3.toFixed(2));