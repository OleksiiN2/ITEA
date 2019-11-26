window.onload = function(){
    let div = document.querySelectorAll('.inner-block');
   //console.log(div);
    for (i=0; i<div.length; i++){
        let btn = document.createElement('button');
        btn.setAttribute("name", "Show More/Less");
        btn.innerText = "Show More/Less";
        btn.setAttribute ("onclick", "disp(this)");
        div[i].appendChild(btn);
    };

    let deleteBtn = document.querySelectorAll('input[type="button"]');
    //console.log(deleteBtn);
    for(i = 0; i<deleteBtn.length; i++){
        deleteBtn[i].setAttribute("onclick", "del(this)");
    };
    
}

 //кнопка Show more/less скрываем спан
 function disp(e){
     //console.log(e);
     let span = e.parentNode.querySelector("span");
       
     //console.log(span);
     if(span.style.display !="block"){
        span.style.display = "block";
    }
    else{
        span.style.display = "none";
    }
 }

 //удаляем колонку с хедером в котором кнопка 
 function del(e){
    // console.log(e);
     let inputs = document.querySelectorAll("tbody tr th input");
    // console.log(inputs)
     let index = Array.prototype.indexOf.call(inputs, e);
   //  console.log(index);
    let tr = document.getElementsByTagName('tbody')[0].children;
  //  console.log(tr);
    for(i=0; i<tr.length; i++){
        let child = tr[i].children[index];
      //  console.log(a);
      child.parentNode.removeChild(child);
    }   
 }

