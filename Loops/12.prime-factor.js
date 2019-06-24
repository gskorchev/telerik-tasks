let count = +gets();
let n = count;
for (let i = 2; i <= count/2; i++){
  while(n % i === 0){
    n = n / i;
    print(i);
    
  }
}