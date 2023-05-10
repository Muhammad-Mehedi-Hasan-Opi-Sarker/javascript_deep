let isRunnig = true;
while (true) {
    let rand = Math.floor(Math.random() * 10+1);
    if(rand === 9){
        console.log("He is a winner" + " " + rand);
        break;
    }
    else{
        console.log ("you got" + " " + rand )
    }

}