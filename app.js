// TEXT Animation

const texts = [
    "a Front End Developer.",
    "a Web Developer.",
    "I build responsive websites.",
    "I build fast and interactive websites.",
    "I convert designs to readable codes.",
    "I build semantic HTML webpages.",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}
type();

// HAMBURGER
let hamburger = document.querySelector(".bars");
let navBar = document.querySelector("nav");
hamburger.onclick = function () {
    navBar.classList.toggle("active");
};