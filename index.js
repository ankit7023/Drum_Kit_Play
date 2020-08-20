
var numOfDrumButton = document.querySelectorAll(".drum").length;

for(var i= 0; i< numOfDrumButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", onClick);

function onClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
}
document.addEventListener("keypress", events)
function events(){
  makeSound(event.key);
  buttonAnimation(event.key);
}


function makeSound(key){
  switch(key){
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
    return tom1.play();
    break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
    return tom2.play();
break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
    return tom3.play();
break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
    return tom4.play();
break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
    return snare.play();
break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
    return crash.play();
break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
    return kickBass.play();
break;

  }
}

function buttonAnimation(press){
  var activeButton = document.querySelector("." + press);
  activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100)



}
