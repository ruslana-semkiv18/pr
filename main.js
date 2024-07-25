const btn = document.querySelector(".tema-btn");
const list = document.querySelector(".tema-list");
let color;

const lsKey="tema";

const savedData = localStorage.getItem(lsKey);
const parsedData = JSON.parse(savedData);
color = parsedData;
changeTema();

btn.addEventListener("click", () => {
        list.classList.remove("visually-hidden");
        list.addEventListener("click", handlerClick);
});



function handlerClick(evt) {
    const curColor= evt.target.dataset.color;
    localStorage.setItem(lsKey, JSON.stringify(curColor));
    switch(curColor){
        case "red": 
        color = "red";         
        break;
        case "green": 
        color = "green"; break;
        case "orange": 
        color = "orange"; break;
        case "purple": 
        color = "purple"; break;
        case "blue": 
        color = "blue"; break;
        case "yellow": 
        color = "yellow"; break;
    }
    list.classList.add("visually-hidden");
    changeTema();
}

function changeTema(){
    const temaIcon = document.querySelector(".tema-icon");
    temaIcon.style.backgroundColor = color;
    const benefitsWrapIcon = document.querySelectorAll(".benefits-wrap-icon");

    benefitsWrapIcon.forEach(function(el){
        el.style.backgroundColor = color;
    });
    
}

