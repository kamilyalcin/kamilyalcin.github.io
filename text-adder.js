let j = 0;
let i = 0;
const mailTextStr = "Hello, here you can send me an e-mail.";
const mailAdressStr = "example@mail.com"
const mailText = document.getElementById("message");
const mailAdress = document.getElementById("from-who");

function pushLetters() {
    let newMailStr = mailAdressStr.slice(0, i);
    let newTextStr = mailTextStr.slice(0, j);
    mailAdress.placeholder = newMailStr;
    mailText.placeholder = newTextStr;
    i++;
    if (i >= mailAdressStr.length + 1){
        j++;
        if(j >= mailTextStr.length + 1 ){
            i = 0;
            j = 0;
        }
    }
    console.log(i, j);
}

pushLetters();
setInterval(pushLetters, 100);