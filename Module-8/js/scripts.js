const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play(); 
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const label = document.querySelector("label");
const input = document.querySelector("input");

window.addEventListener("keydown", function callback (e){
    if(keys.includes(e.key)){
        let currentButton = buttons.find((a) => a.innerHTML === e.key || a.innerHTML === "space" );
        const note = currentButton.getAttribute("data-note");
        currentButton.classList.add("keyboard__btn--active");
        playSound(note);
    }
    // currentButton.classList.add("keyboard__btn--active");
} );



window.addEventListener("click", function check(input){
    input = document.getElementById("slideThree");
    let currentButton = callback(e);
    if(input.checked === true) {
        playSound(currentButton.getAttribute("data-note"));
    } else if (input.checked == false){
        playSound(currentButton.removeAttribute("data-note"));
    }
});

