# Quiz lógica

## Adivinhe o proximo resultado
<p> 
1 + 4 = 5 <br />
2 + 5 = 12 <br />
3 + 6 = 21 <br />
8 + 11 = ?
</P>

```js
let number = 4
for(let i = 1; i <=8; i++){
    if(i == 1)
        console.log(`${i} + ${number} = ${result = i + number++}`);
    else
        console.log(`${i} + ${number} = ${result+=(i+number++)}`);
}

// Minha alternativa para saber

```
## Fibonacci ou proporção Aurea
<p>0 1 2 3 4 5  6 -> Índice<br />
    1 1 2 3 5 8 13 -> resultado</p>
<p>Qual é o valor do resultado se o índice é igual à 10?

```js
fibonacci = n =>{
    if(n <=1) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}

const p = 10
for(let i =0; i<= p; i++)
    console.log(`${i} ${fibonacci(i)}`)

```