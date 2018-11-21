var open = new Audio('http://home.ustc.edu.cn/~wyc0807/has.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/ycs.mp3');
//var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/ctl.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
};

document.addEventListener("click", function(){
  //alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == 'After you click the link, you are now on the Herbs and Supplements page'){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  //open.pause();
  audio1.pause();
  open.load();
  open.play();
  //document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("alphanav bluearea azjump")[0].style.border = "5px solid white";
  //document.getElementById("sh_herbs").style.border = "5px solid red";
  //document.getElementById("anch_50").style.border = "5px solid white";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "You can search for supplement information alphabetically"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  //audio3.pause();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  //document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  //document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("alphanav bluearea azjump")[0].style.border = "5px solid red";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
  //document.getElementById("sh_herbs").style.border = "5px solid white";
  //document.getElementById("anch_50").style.border = "5px solid red";
}
  
}, false);