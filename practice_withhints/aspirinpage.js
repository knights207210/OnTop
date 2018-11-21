var open = new Audio('http://home.ustc.edu.cn/~wyc0807/nyaotap.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/toc.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/cotltfd.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Now you are on the information of Aspirin page"){
  audio1.pause();
  open.load();
  open.play();
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //audio.autoplay = true;
  //audio.load();
}
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == 'There is a table of contents with links of different information about the drug'){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  //document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  //document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  //document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementById("toc-box").style.border = "5px solid red";
  document.getElementById("anch_24").style.border = "5px solid white";
  //document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Clicking on these links will take you to this information"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  //audio3.pause();
  audio2.load();
  audio2.play();
  //document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  //document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  //document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  //document.getElementsByClassName("address")[0].style.border = "5px solid white";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
  //document.getElementById("anch_22").style.border = "5px solid red";
  document.getElementById("toc-box").style.border = "5px solid white";
  document.getElementById("anch_24").style.border = "5px solid red";}
  
}, false);