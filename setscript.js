var slider=  document.getElementById("myRange");
var output= document.getElementById("demo");

var snakeSpeed=0;
//document.cookie="speed=0;";
var apples=document.querySelector("#fname");
//var bombs=document...
var submitBTN=document.querySelector("#chg");

submitBTN.addEventListener("click", () => {
  document.cookie="apple="+apples.value+";";
  //document.cookie="bomb="+bombs.value+";";
});

function changeSpeed(){
  output.innerHTML = slider.value;
  snakeSpeed=1000-output.innerHTML;
  document.cookie="speed="+snakeSpeed+";";
  
}
console.log(document.cookie);
/*
slider.oninput = function() {
  output.innerHTML = this.value;
  snakeSpeed=1000-output.innerHTML;
  
}



function slider_set(){
    output.innerHTML  = slider.value;   
     
}
slider.addEventListener('input', slider_set);
snakeSpeed=1000-output.innerHTML;
console.log(snakeSpeed);


*/