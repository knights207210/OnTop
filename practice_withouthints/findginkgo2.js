var open = new Audio('http://home.ustc.edu.cn/~wyc0807/hass.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/sco.mp3');
//var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/fcodasp.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
  document.getElementById("sh_herbs").style.border = "5px solid red";
};



document.addEventListener("click", function(){
  //alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == 'After you click on Drugs and Supplements, you are now on "Drugs and Supplements" page with find Herbs and Supplements section'){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();
  //document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  //document.getElementsByClassName("icon-area")[0].style.border = "5px solid red";
  //document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  //document.getElementsByClassName("address")[0].style.border = "5px solid white";
  //document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  //document.getElementById("anch_14").style.border = "5px solid red";
  document.getElementById("sh_herbs").style.border = "5px solid red";
  document.getElementById("anch_51").style.border = "5px solid white";
  //document.getElementsByClassName("blue-label alphalink")[0].style.border = "5px solid white";
}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Second, click on All herbs and supplements link to find the Herbs and Supplements page"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  //audio2.pause();
  audio1.load();
  audio1.play();
  document.getElementById("sh_herbs").style.border = "5px solid white";
  document.getElementById("anch_51").style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  //document.getElementsByClassName("address")[0].style.border = "5px solid white";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
  //document.getElementById("blue-label alphalink").style.border = "5px solid red";
}
  
}, false);