/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

let exercise = document.querySelector("#exercise");
exercise.textContent = `Введите строку идентичную - ${string}`;
exercise.appendChild(timerOutput);

let keyboard = document.querySelector("#keyboard");
let userInput = document.createElement("input");
let result = document.createElement("p");

keyboard.appendChild(userInput);
keyboard.appendChild(result);


let time = 0;
let letters = 5;
let userString = [];

let timer = setInterval (function (){
    time++;
    timerOutput.textContent = time;
  }, 1000); 

  localStorage.getItem('userInput') || '';  
  
function click (e){
  if (e.keyCode >= 65 && e.keyCode <= 90){
    setInterval(timer);
  }

  userString.push(e.key);
  
  if(userString.length == letters){
          clearInterval(timer);
          let firstRes = time;
          result.textContent = firstRes;
        }
         
}

window.addEventListener("keydown", click);

