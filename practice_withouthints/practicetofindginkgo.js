window.onload = function(){
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/ptfg.mp3');
  open.autoplay = true;
  open.load();
}




document.addEventListener("click", function(){
  //alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == 'Practice to find Ginkgo through Supplements on Homepage'){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/ptfg.mp3');
  audio.autoplay = true;
  audio.load();}
  
}, false);