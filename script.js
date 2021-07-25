const display = document.getElementById('display');
const generateBtn = document.getElementById('generate-btn');

let randomNumber = "", count = 3;
let userInput = "";
generateBtn.addEventListener('click', function () {
    if (count == 0) {
        count = 3;
        actionLeft.textContent = count + ' Try Left';
    }
    matched.style.display = 'none';
    notMatched.style.display = 'none';
    randomNumber = Math.floor((Math.random() * 10000));
    randomNumber = '' + randomNumber;

    while (randomNumber.length < 4) {
        randomNumber = '0' + randomNumber;
    }
    display.value = randomNumber;
})

const Buttons = document.getElementsByClassName('button');
const displayUserInput = document.getElementById('display-user-input');

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener('click', function (element) {
        if (randomNumber.length == 0) {
            alert("Generate a Number First");
        }
        else if (userInput.length == 4 && !(element.target.innerText === 'C' || element.target.innerText === ',')) {
            alert("You can only give 4 inputs");
        }
        else {
            if (element.target.innerText === 'C') {
                userInput = "";
            }
            else if (element.target.innerText === ',') {
                userInput = userInput.slice(0, -1);
            }
            else {
                userInput += element.target.innerText;
            }
        }
        displayUserInput.value = userInput;
    })
}


const submitButtons = document.getElementsByClassName('submit-btn');
const matched = document.getElementById('matched');
const notMatched = document.getElementById('not-matched');
const actionLeft = document.getElementById('action-left');

submitButtons[0].addEventListener('click', function () {
    if (count === 0) {
        console.log("Hello");
        actionLeft.textContent = "You have 0 Try Left, please Generate a new Number";
    }
    else if (userInput == randomNumber) {
        notMatched.style.display = 'none';
        matched.style.display = 'block';
        count = 3;
        display.value = "";
        randomNumber = "";
        actionLeft.textContent = count + ' Try Left';
    }
    else {
        matched.style.display = 'none';
        notMatched.style.display = 'block';
        count--;
        actionLeft.textContent = count + ' Try Left';
    }
    displayUserInput.value = "";
    userInput = "";
})