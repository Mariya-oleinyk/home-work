const keyboard = {
    layouts: {
        en: {
            topRow: ["q","w","e","r","t","y","u","i","o","p","[","]"],
            middleRow: ["a","s","d","f","g","h","j","k","l",";","'"],
            bottomRow: ["z","x","c","v","b","n","m",",",".","/"]
        },
        ru: {
            topRow: ["й","ц","у","к","е","н","г","ш","щ","з","х","ъ"],
            middleRow: ["ф","ы","в","а","п","р","о","л","д","ж","э"],
            bottomRow: ["я","ч","с","м","и","т","ь","б","ю","."]
        },
        ua: {
            topRow: ["й","ц","у","к","е","н","г","ш","щ","з","х","ї"],
            middleRow: ["ф","і","в","а","п","р","о","л","д","ж","є"],
            bottomRow: ["я","ч","с","м","и","т","ь","б","ю","."]
        },
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};


function choise (){

    const choiceLanguage = prompt("Введите число от 0 до 2", "");

    if (choiceLanguage == 0){
        console.log(keyboard.langs[0]);
        keyboard.currentLang = "0 - en";
        console.log(keyboard);
    } else if (choiceLanguage == 1){
        console.log(keyboard.langs[1]);
        keyboard.currentLang = "0 - ru";
        console.log(keyboard);
    } else if (choiceLanguage == 2){
        console.log(keyboard.langs[2]);
        keyboard.currentLang = "0 - ua";
        console.log(keyboard);
    } else if (choiceLanguage > 2 || choiceLanguage < 0 || typeof choiceLanguage == "string"){
        alert('Вы выбрали недоступный язык. Повторите попытку');
        choise();
    } else{
        console.log("Error");
    }
}

choise();

// function test (){
//     for (let key in keyboard){
//         if (keyboard.currentLang = "0 - en"){
//             let a = Math.floor(Math.random() * layouts["en"].length);
//             console.log(topRow[a]);
//         } else{
//             return ("no");
//         }
//     }
// }
//
// test ();