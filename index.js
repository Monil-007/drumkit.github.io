
var numb=document.querySelectorAll(".drum").length;
var i=0;
for(i=0;i<numb;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonpressed=this.innerHTML;
    buttonanimation(buttonpressed);
    makeSound(buttonpressed)
  });
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonanimation(event.key);
});

function makeSound(keybutton){
  switch (keybutton) {
    case 'w':
      var mus1=new Audio("sounds/tom-3.mp3");
      mus1.play();
      break;
    case 'a':
      var mus2=new Audio("sounds/kick-bass.mp3");
      mus2.play();
      break;
    case 's':
      var mus3=new Audio("sounds/snare.mp3");
      mus3.play();
      break;
    case 'd':
      var mus4=new Audio("sounds/tom-1.mp3");
      mus4.play();
      break;
    case 'j':
      var mus5=new Audio("sounds/crash.mp3");
      mus5.play();
      break;
    case 'k':
      var mus6=new Audio("sounds/tom-2.mp3");
      mus6.play();
      break;
    case 'l':
      var mus7=new Audio("sounds/tom-4.mp3");
      mus7.play();
      break;
    default:
      console.log();
      break;
  }
}

function buttonanimation(currentkey){
  var animate=document.querySelector("."+currentkey);
  animate.classList.add("pressed");
  setTimeout(function(){
    animate.classList.remove("pressed");
  },100);
}
