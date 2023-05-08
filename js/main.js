


let buttons = document.querySelectorAll(".area");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", On);
}

function On(e) {
    let text = e.target.nextElementSibling;

    text.classList.toggle("open");



}

let value = document.querySelector("#container");

value = document.getElementsByClassName("faq").children;

console.log(value);



















