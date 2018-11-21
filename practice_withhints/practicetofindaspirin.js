window.onload = function(){
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/ptfa.mp3');
  open.autoplay = true;
  open.load();
}




document.addEventListener("click", function(){
  //alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == 'Practice to find Aspirin through Drugs and Supplements'){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/ptfa.mp3');
  audio.autoplay = true;
  audio.load();}
  
}, false);