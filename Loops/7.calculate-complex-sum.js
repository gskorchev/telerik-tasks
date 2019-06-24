let N = +gets();
let x = +gets();


const calculate = (N, x) => {
  let result = 1

  for (let i = 1; i <= N; i++) {
    result += fact(i) / Math.pow(x, i)
  }

  return result
}

const fact = x => {
  if (x === 0 || x === 1) { return 1 }

  return fact(x - 1) * x
}

print(calculate(N, x).toFixed(5))