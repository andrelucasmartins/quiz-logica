# Quiz lógica

## Adivinhe o proximo resultado
<p> 
1 + 4 = 5 <br />
2 + 5 = 12 <br />
3 + 6 = 21 <br />
8 + 11 = ?
</P>

```
let number = 4
for(let i = 1; i <=8; i++){
    if(i == 1)
        console.log(`${i} + ${number} = ${result = i + number++}`);
    else
        console.log(`${i} + ${number} = ${result+=(i+number++)}`);
}

// Minha alternativa para saber

```