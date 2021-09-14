var increament=document.querySelector(".increase");
var decreament=document.querySelector(".decrease");
var reset=document.querySelector(".reset");
var number=document.querySelector(".number");

var count=0;

//Creating EventListener for Increament Button
increament.addEventListener('click',function(){
    count++;
    number.innerHTML=count;
    if(count>0){
        decreament.removeAttribute("disabled");
    }
});

//Creating EventListener for decreament Button
decreament.addEventListener('click',function(){
    count--;
    number.innerHTML=count;
    if(count===0){
        decreament.setAttribute("disabled","disabled");
    }
});

//Creating EventListener for Reset Button
reset.addEventListener('click',function(){
    count=0;
    number.innerHTML=count;
    if(count===0){
        decreament.setAttribute("disabled","disabled");
    }
});

if(count===0){
    decreament.setAttribute("disabled","disabled");
}
