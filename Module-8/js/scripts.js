 const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

  window.addEventListener("keydown", function callback (e){
        if(keys.includes(e.key)){
            let currentButton = buttons.find((a) => a.innerHTML === e.key || a.innerHTML === "space" );
            let note = currentButton.classList.add('keyboard__btn--active');
            setTimeout(()=>currentButton.classList.remove('keyboard__btn--active'), 100);
            let soundCheckbox = document.getElementById('slideThree');
         
      if(soundCheckbox.checked){
            playSound(currentButton.dataset.note);
         }
        }
} )

