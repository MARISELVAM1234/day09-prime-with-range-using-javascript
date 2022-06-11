let n = parseInt(prompt());
console.log('input is', n)
for (var i = 2; i <= n; i++) {
    let a = 0;
    for (var j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            a = 1;
        }
    }
    if (a == 0) {
        console.log(i, 'is a prime number');
    }
}