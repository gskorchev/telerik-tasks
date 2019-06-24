let year = +gets();


let sign = year % 12;


let signToYear = {
    8: 'Dragon',
    9: 'Snake',
    10: 'Horse',
    11: 'Sheep',
    0: 'Monkey',
    1: 'Rooster',
    2: 'Dog',
    3: 'Pig',
    4: 'Rat',
    5: 'Ox',
    6: 'Tiger',
    7: 'Hare',
}
print(signToYear[sign])
