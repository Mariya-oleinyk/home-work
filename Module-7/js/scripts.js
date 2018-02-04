let topRow = ["q","w","e","r","t","y","u","i","o","p","[","]"];
let middleRow = ["a","s","d","f","g","h","j","k","l",";","'"];
let bottomRow = ["z","x","c","v","b","n","m",",",".","/"];
const keyboard = [topRow, middleRow,bottomRow];

const keyboardTop = document.querySelector(".top");
let Top = '';
for(let i=0; i<topRow.length; i++){
        Top = document.createElement('button');
        Top.textContent = `${topRow[i]}`;
        keyboardTop.append(Top);
}

const keyboardMiddle = document.querySelector(".middle");
let Middle = '';
for(let i=0; i<middleRow.length; i++){
        Middle = document.createElement('button');
        Middle.textContent = `${middleRow[i]}`;
        keyboardMiddle.append(Middle);
}

const keyboardBottom = document.querySelector(".bottom");
let Bottom = '';
for(let i=0; i<bottomRow.length; i++){
        Bottom = document.createElement('button');
        Bottom.textContent = `${bottomRow[i]}`;
        keyboardBottom.append(Bottom);
}

const name = document.createElement("h1");
name.textContent = "Keyboard";
name.style.color = "#cf6fe7";
keyboardTop.before(name);

