let price = +gets();

let money = +gets();

let resto = (money - price) * 100;
let one = 0;
let two = 0;
let five = 0;
let ten = 0;
let twenty = 0;
let fifthy = 0;
let lev = 0;


while (resto > 0) {
    if (resto >= 100) {
        lev +=1;
        resto -=100;
    } else if (resto >= 50) {
        fifthy += 1;
        resto -= 50;
    } else if (resto >= 20) {
        twenty += 1;
        resto -= 20;
    } else if (resto >= 10) {
        ten += 1;
        resto -= 10;
    } else if (resto >= 5){
        five += 1;
        resto -= 5;
        
    } else if (resto >= 2){
        two += 1;
        resto -= 2;
    } else if (resto >= 1){
        one += 1;
        resto -= 1;
    } else {
        break;    
    }
}

switch (lev) {
    case lev: if(lev > 0) {
        print(`${lev} x 1 lev`);
    };
    case fifthy: if (fifthy > 0) {
        print(`${fifthy} x 50 stotinki`);
    };
    case twenty: if (twenty > 0) {
        print(`${twenty} x 20 stotinki`);
    };
    case ten: if (ten > 0) {
        print(`${ten} x 10 stotinki`);
    };
    case five: if (five > 0) {
        print(`${five} x 5 stotinki`);
    };
    case two: if (two > 0){
        print(`${two} x 2 stotinki`);
    };
    case one: if (one > 0){
        print(`${one} x 1 stotinka`);
    }; break;
}