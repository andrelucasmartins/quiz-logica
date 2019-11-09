// Fibonacci ou proporção Aurea

fibonacci = n =>{
    if(n <=1) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}

const p = 10
for(let i =0; i<= p; i++)
    console.log(`${i} ${fibonacci(i)}`)