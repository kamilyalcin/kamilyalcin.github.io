
let funcOutput = document.getElementById("funcOutput");

function convertToRoman() {
    var num = document.getElementById("number").value;
    let numberCatch = /\D/g;
    if (num.match(numberCatch) == null) {
        if (num > 0 && num < 4000) {
            var romanValues = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            }
            let result = "";

            for (var key in romanValues) {
                while (num >= romanValues[key]) {
                    result += key;
                    num -= romanValues[key];
                }
            }
            funcOutput.textContent = result;
        } else {
            return funcOutput.textContent = "Invalid Input.";
        }
    } else {
        return funcOutput.textContent = "Invalid Input.";
    }
}
const button = document.getElementById("colorBtn");
const currentColor = document.getElementById("currentColor");
const bgColor = document.getElementById("bgColorGenerator");
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
button.addEventListener("click", function () {
    let hexColor = "#";
    for (var i = 0; i < 6; i++) {
        hexColor += hex[getRandom()];
        currentColor.textContent = hexColor;
        bgColor.style.backgroundColor = hexColor;
    }
    function getRandom() {
        return Math.floor(Math.random() * hex.length);
    }
});



const quizQuestions = [
    {
        question: 'What is 3*3 ?',
        a: '6',
        b: '9',
        c: '12',
        d: '15',
        correct: 'b'
    },
    {
        question: 'What is our home galaxy?',
        a: 'Andromeda Galaxy',
        b: 'Black Eye Galaxy',
        c: 'Malin 1 Galaxy',
        d: 'Milky Way Galaxy',
        correct: 'd'
    },
    {
        question: 'What is the currency of Turkish Republic?',
        a: 'Ruble',
        b: 'Lira',
        c: 'Dollar',
        d: 'Riyal',
        correct: 'b'
    },
    {
        question: 'Where does the name "Coffee Mocha" comes from?',
        a: 'Yemen',
        b: 'Brazil',
        c: 'Colombia',
        d: 'Mexico',
        correct: 'a'
    }
];
var toaster = document.getElementById("toaster");
const question = document.getElementById("question");
const firstOpt = document.getElementById("first_text");
const secondOpt = document.getElementById("second_text");
const thirdOpt = document.getElementById("third_text");
const fourthOpt = document.getElementById("fourth_text");
const quizBtn = document.getElementById("quizBtn");
let currentQuestion = 0;
let quizScore = 0;
const answers = document.querySelectorAll('.answers');
loadQuiz();
quizBtn.addEventListener('click', () => {
    scoreCount();
    if (currentQuestion < quizQuestions.length) {
        loadQuiz();
    } else {
        toaster.textContent = "You have scored " + quizScore + " points.";
        toaster.className = 'toaster toaster-visible toaster-info';
        var moveAway = setTimeout(hideToaster, 4000);
        currentQuestion = 0;
        quizScore = 0;
        loadQuiz();
    }
});
function loadQuiz() {
    question.textContent = quizQuestions[currentQuestion].question;
    firstOpt.textContent = quizQuestions[currentQuestion].a;
    secondOpt.textContent = quizQuestions[currentQuestion].b;
    thirdOpt.textContent = quizQuestions[currentQuestion].c;
    fourthOpt.textContent = quizQuestions[currentQuestion].d;
}
function scoreCount() {
    answers.forEach((ans) => {
        if (ans.checked) {
            currentQuestion++;
            if (ans.id === quizQuestions[currentQuestion - 1].correct) {
                quizScore++;
            }
            document.getElementById(ans.id).checked = false;
        }
    })
}
function hideToaster() {
    toaster.classList.remove('toaster-visible');
}


function sendMail(params) {
    let adressRegex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var tempParams = {
        from_name: document.getElementById("from-who").value,
        to_name: "Kamil",
        message: document.getElementById("message").value
    };
    if (tempParams.from_name.match(adressRegex) && tempParams.message !== "") {
        emailjs.send('service_r9hjkd8', 'template_5sws4ul', tempParams).then(function (res) {
            if (res.status > 199 && res.status < 300) {
                toaster.textContent = " Your mail has been sent.";
                toaster.className = 'toaster toaster-visible toaster-success';
                var fadeAway = setTimeout(hideToaster, 4000);
                document.getElementById("mail-form").reset();
            } else {
                toaster.textContent = "Failed to send";
                toaster.className = 'toaster toaster-visible toaster-error';
                var hideAway = setTimeout(hideToaster, 4000);
            }
        });
    } else if (tempParams.from_name.match(adressRegex) !== true){
        toaster.textContent = "Please enter a valid mail adress.";
        toaster.className = 'toaster toaster-visible toaster-alert';
        var fadeAway = setTimeout(hideToaster, 4000);
    }
    function hideToaster() {
        toaster.classList.remove('toaster-visible');
    }
    
}
