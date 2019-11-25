window.onload = function(){
    
    //добавляем класс при клике на элемент(выбранный элемент)
    document.getElementById("list-items").addEventListener("click",function(e) {
        //console.log(e.target);
        if (e.target && e.target.matches("li")) {

          let elements = document.getElementsByClassName("selected");
          for (i = 0; i < elements.length; i++) {
              elements[i].className = "";
          }
          e.target.className = "selected"; 
          
         }
    });
}

let elements = document.getElementsByClassName("selected");

// Выбрать первый элемент 
function selectFirst(){
    for (i = 0; i < elements.length; i++) {
        elements[i].className = "";
    }
    let ul = document.getElementById("list-items");
    
    if(ul.firstElementChild){ 
        ul.firstElementChild.className = "selected";
    }
}

//Выбрать последний элемент
function selectLast(){
    for (i = 0; i < elements.length; i++) {
        elements[i].className = "";
    }
    let ul = document.getElementById("list-items");
    if(ul.firstElementChild){ 
        ul.lastElementChild.className = "selected";
    }
}

//Выбрать следующий элемент
function selectNext(){
    let el = document.getElementsByClassName("selected")[0];
    if(el){
        let nextEl = el.nextElementSibling;
        
        if(nextEl){
            nextEl.className = "selected";
            el.className = "";
        } else {
            selectFirst();
        }
    }
}

//Выбрать предыдущий элемент
function selectPrevious(){
   
    let el = document.getElementsByClassName("selected")[0];
    if(el){
        let prevEl = el.previousElementSibling;
    
        if(prevEl){
            prevEl.className = "selected";
            el.className = "";
        } else {
            selectLast();
        }
    }
}

//Добавить элемент
function addToEnd(){
    for (i = 0; i < elements.length; i++) {
        elements[i].className = "";
    }
    let ul = document.getElementById("list-items");
    let newLi = document.createElement("li");
    newLi.innerText = "element";
    newLi.className = "selected";
    ul.appendChild(newLi);
}

//Удалить эелемент
function deleteElement(){

    let ul = document.getElementById("list-items");
    let el = document.getElementsByClassName("selected")[0];
    if(el){
        el.parentNode.removeChild(el);
        if(ul.firstElementChild){
            ul.firstElementChild.className = "selected";
        }
    }
}

//Добавить в начало
function addToStart(){
    for (i = 0; i < elements.length; i++) {
        elements[i].className = "";
    }
    let ul = document.getElementById("list-items");
    let newLi = document.createElement("li");
    let el = ul.firstElementChild;
    newLi.innerText = "element";
    newLi.className = "selected";
    ul.insertBefore(newLi,el);
}
