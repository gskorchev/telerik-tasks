let month = gets();

let date = +gets();

switch (month){
    case "March": if (date >= 20){
        print("Spring");
    } else {
        print("Winter");
    }; break;
    case "April": 
    case "May": print("Spring"); break;
    case "June": if (date <= 20){
        print("Spring");
    } else {
        print("Summer");
    }; break;
    case "July":
    case "August": print("Summer"); break;
    case "September": if (date <= 21){
        print("Summer");
    } else {
        print("Autumn");
    }; break;
    case "Octomber":
    case "November": print("Autumn"); break;
    case "December": if (date <= 20) {
        print("Autumn");
    } else {
        print("Winter");
    }; break;
    case "January":
    case "February": print("Winter"); break;
    default: print("Invalid data"); break;
}