let line = gets();

line.split(" ").forEach(n=> {
  print(Math.round((n * 9 / 5) + 32));
})