let idx = 0;
const str = "Hello, here you can send me an e-mail.";
const text = document.getElementById("text");

function pushLetters () {
    let newStr = str.slice(0, idx);
    text.placeholder = newStr;
    idx++;
    if(idx == str.length +1){
        idx = 0;
    }
}

pushLetters();
setInterval(pushLetters, 100);