function sendMessage() {
    let input = document.getElementById("input").value
    // let input2 = document.getElementById("input2").value
    let resiveM = document.getElementById("resiveM")
    let sendM = document.getElementById("sendM")


    if (input != "") {
        sendM.innerHTML +=
            `
        <span class="message right">${input}</span> 
        `
        resiveM.innerHTML +=
            `
        <span class="message left">${input}</span>
        
        `
        let inputt1 = document.getElementById("input")
        inputt1.value = ""

    }
    else {
        alert("Ples Enter Message...")
    }



    // 👇 Auto scroll to bottom
    sendM.scrollTop = sendM.scrollHeight;
    resiveM.scrollTop = resiveM.scrollHeight;
}
function replayMessage() {
    // let input = document.getElementById("input").value
    let input2 = document.getElementById("input2").value
    let resiveM = document.getElementById("resiveM")
    let sendM = document.getElementById("sendM")

    if (input2 != "") {


        sendM.innerHTML +=
            `
        <span class="message left">${input2}</span>
        `
        resiveM.innerHTML +=
            `
        <span class="message right">${input2}</span> 
        
        `
        let inputt2 = document.getElementById("input2")
        inputt2.value = ""
    }
    else {
        alert("Ples Enter Message...")

    }
    // 👇 Auto scroll to bottom
    sendM.scrollTop = sendM.scrollHeight;
    resiveM.scrollTop = resiveM.scrollHeight;
}