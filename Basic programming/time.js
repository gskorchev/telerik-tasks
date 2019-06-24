let days = +gets();
let hours = +gets();
let minutes = +gets();
let seconds = +gets();

let daysInSeconds = days * 24 * 60 * 60;
let hoursInSeconds = hours * 60 * 60;
let minutesInSeconds = minutes * 60;
let total = daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
print(total);