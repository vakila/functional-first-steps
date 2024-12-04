
const imperativeFactorial = (n) => {
    let product = 1;
    while (n > 0) {
        product *= n;
        n--;
    }
    return product;
};


const recursiveFactorial = (n) => {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(6));