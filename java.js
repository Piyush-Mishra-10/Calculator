
let board = document.querySelector('.board');
let button = document.querySelector('.board1');
let cross = document.querySelector('.cross');
let count = 0;
button.addEventListener("click", function () {
    board.style.transform = 'translateX(85%) scale(1)';
    board.style.opacity = 1;
    count = 1;


})
cross.addEventListener("click", function () {
    board.style.transform = 'translateX(-100px)';
    board.style.opacity = 0;


})
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'B' || e.target.innerHTML == 'X') {
            string = "";
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})


