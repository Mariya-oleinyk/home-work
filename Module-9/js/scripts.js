/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
        en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
      };
const firstLine = lang.en.substr(0, lang.en.indexOf("a"));
const secondLine = lang.en.substr(lang.en.indexOf("a"), lang.en.indexOf("z") - lang.en.indexOf("a"));
const thirdLine = lang.en.substr(lang.en.indexOf("z"));
    
const firstArr = firstLine.split('');
const secondArr = secondLine.split('');
const thirdArr = thirdLine.split('');

const keyboard = [firstArr, secondArr, thirdArr];

const html = document.getElementById('menu').textContent.trim();
const output = document.getElementById('output');
const compiled = _.template(html);
const result = compiled(keyboard);
output.innerHTML = result;

const pressed = document.querySelector(".pressed");
const currentButton = {
    press: null
};

function onClick(event) {
    if (currentButton.press !== null) {
        currentButton.press.classList.remove("keyboard__btn--active")
    }
    if (event.target.classList.contains("keyboard__btn")) {
        event.target.classList.add("keyboard__btn--active");
        currentButtonwq.press = event.target
        pressed.textContent = event.target.textContent
    }
}
output.addEventListener("click", onClick);
