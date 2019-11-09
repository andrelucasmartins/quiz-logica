// Fibonacci ou proporção Aurea

fibonacci = n =>{
    if(n <=1) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}

for(let i =0; i<= 8; i++)
    console.log(`${i} ${fibonacci(i)}`)