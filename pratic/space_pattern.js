for (let row = 1; row <= 5; row++) {
    let s = "";

    for (let col = 1; col <= 5 - row; col++) {
        s += "- ";
    }
    
    for (let j = 1; j <= row; j++) {
        s += '*' + " ";
    }

    console.log(s);
}
