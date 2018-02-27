const wrapper = document.querySelector(".wrapper");
const list = document.querySelector(".list");
const block = document.querySelector(".block");
const compiled = _.template(list);

function getUsers (){
    fetch(`http://fecore.net.ua/rest/`)
   .then(res => res.json())
   .then(res => {
    let test = "";
     res.forEach(element => {
        test += compiled(element); 
     });
     block.innerHTML = test; 
    });
};
getUsers ();

// function addUser (){

// }