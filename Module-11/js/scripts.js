function getUsers (){
    let wrapper = document.querySelector(".wrapper");
    let listName = document.querySelector(".list_name");
fetch(`http://fecore.net.ua/rest/`)
   .then(res => res.json())
   .then(res => {
     console.log(res);
     for(let i = 0; i < res.length; i++){
       wrapper.innerHTML += `<h3> ID: ${res[i].name}<h4>`;
       wrapper.innerHTML += `<h4>Name: ${res[i].name}<h4>`;
       wrapper.innerHTML += `<p>Score: ${res[i].score}</p>`;
     }
   }); 
}

getUsers ();
