
const btn = document.getElementsByClassName("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



//this api taken from  https://sv443.net/jokeapi/v2/ 
let getjoke =() =>{
    fetch(url)
    .then(data =>data.json())
    .then(item =>{
        appenddata(item);
    });
}

function appenddata(item){
 var jokeMaterial = document.getElementById('joke');
 var cotegry = document.getElementById('type');
 console.log(item);
jokeMaterial.innerHTML = item.joke;
cotegry.innerHTML = "Category :" + item.category;

    
};

getjoke();