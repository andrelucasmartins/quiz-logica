let number = 4
for(let i = 1; i <=8; i++){
    if(i == 1)
        console.log(`${i} + ${number} = ${result = i + number++}`);
    else
        console.log(`${i} + ${number} = ${result+=(i+number++)}`);
}