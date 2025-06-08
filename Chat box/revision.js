function sendMessage() {
    let input = document.getElementById("input").value
    // console.log(input);
    let sendM = document.getElementById("sendM")

    if (input != "") {


        let resiveM = document.getElementById("resiveM")
        sendM.innerHTML +=
            `
    <div class="message right">${input}</div>
    `
        resiveM.innerHTML +=
            `
    <div class="message left">${input}</div>
    `

        let input1 = document.getElementById("input")
        input1.value = ""

    }
    else {
        alert("Ples Enter Any Message...")
    }
    sendM.scrollTop = sendM.scrollHeight
    resiveM.scrollTop = resiveM.scrollHeight
}
function replayMessage() {
    let input2 = document.getElementById("input2").value
    // console.log(input2);
    let resiveM = document.getElementById("resiveM")

    if(input2 != ""){

        let sendM = document.getElementById("sendM")
        
        resiveM.innerHTML +=
        `
        <div class="message right">${input2}</div>
    `
    sendM.innerHTML +=
    `
    <div class="message left">${input2}</div>
    `
    
    let input22 = document.getElementById("input2")
    input22.value = ""
    
}
else{
    alert("Ples Enter Any message...")
}
    sendM.scrollTop = sendM.scrollHeight
    resiveM.scrollTop = resiveM.scrollHeight
}