let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount: function (num){
        num = prompt("Какое количество символов Вы хотите ввести?", " ");
        return(keyTrainer.charCount = num);
    },//как использовать while и функцию checkPositiveInteger?????
    checkPositiveInteger: function (){
        let a = keyTrainer.charCount;
        return ((a ^ 0) == a && a > 0);
    },
    task: '',
    createTask: function (){
        let b = keyTrainer.chars;
        let arr = [];
        for(let i = 0; i < this.charCount-1; i++){
            arr[i] = b[Math.floor(Math.random()*this.charCount)];
            arr.push(arr[i]);
        }
        return(keyTrainer.task = arr);
    },
    userInput: '',
    startTask: function (task){
        task = prompt(`Введите символы- ${this.task} - через запятую в этом сообщении:`);
        task = task.split(",");
        return (keyTrainer.userInput = task);
    },
    userErrors: function (){
        let a = keyTrainer.task;
        let b = keyTrainer.userInput;
        let c = [];
        for(let i=0; i<a.length; i++){
            for(let j=0; j<b.length; j++){
                if(a == b){
                    console.log(`молодец`);
                } else if (a[i] !== b[j]){
                    // как записать количество ошибок ????
                    console.log(`Количество ошибок`);
                } else {
                    console.log("error");
                }
            }
        }
    }
}

keyTrainer.setCharCount();
keyTrainer.checkPositiveInteger();
console.log(keyTrainer.checkPositiveInteger());
keyTrainer.createTask();
keyTrainer.startTask();
keyTrainer.userErrors();
console.log(keyTrainer.userErrors());
console.log(keyTrainer);
