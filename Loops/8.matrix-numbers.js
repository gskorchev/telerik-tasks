let n = 3; // +gets();
for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n; j++) {
      result += (i + j - 1) + " ";
    }
    console.log(result);
  }