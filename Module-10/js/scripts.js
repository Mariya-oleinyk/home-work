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
exercise.textContent = `Введите строку идентичную - ${lang}`;
exercise.appendChild(timerOutput);

let keyboard = document.querySelector("#keyboard");
let userInput = document.createElement("input");
let result = document.createElement("p");
keyboard.appendChild(userInput);
keyboard.appendChild(result);


let time = 0;
let timer = setInterval (function (){
  time++;
  timerOutput.textContent = time;
}, 1000);

const updateView = () => {
  setInterval(timer);
  result.textContent = localStorage.getItem('userInput') || '';  
};

const onClick = () => {
  clearInterval(timer);
  localStorage.setItem('userInput', `Ввод - ${userInput.value} - занял - ${time} секунды`);
  updateView();
  countKPS();
};

const btn = document.querySelector('#js-btn');
updateView();
btn.addEventListener('click', onClick);

function countKPS() {
  let a = lang.split("");
  let b = userInput.value.split("");
  let c = 0;
  if (a == b) {
      let test = document.createElement("p");
      test.textContent = "Вы молодец! Введено все правильно!";
      keyboard.appendChild(test);
      localStorage.setItem('userInput',`${test.textContent}`); 
      localStorage.getItem('userInput'); 
  } else {
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
              c = c + 1;
              let test = document.createElement("p");
              test.textContent = `Ошибка - ${a[i]}. Количество ошибок ${c}. Попробуйте пройти задание еще раз.`;
              keyboard.appendChild(test);
              localStorage.setItem('userInput',`${test.textContent}`); 
              localStorage.getItem('userInput'); 
             // localStorage.removeItem('test'); // удалит пару из хранилища
            //  let attempt = 5;
            //  for( let j=0; j< attempt; j++){
            //    if(b[i])
            //  }
          }
      }
  }
}