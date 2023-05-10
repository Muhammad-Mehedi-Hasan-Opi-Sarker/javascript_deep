let k = 1;

for (let i = 0; i < 5; i++) {
    let line = ' ';
    for(let j = 1; j <= k; j++){
       line = line + '*';
    }
    console.log(line);
    k++;
}
