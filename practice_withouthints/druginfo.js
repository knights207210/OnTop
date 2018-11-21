var open = new Audio('http://home.ustc.edu.cn/~wyc0807/ywbodasp.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/yanodasp.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/searcha.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Like Health Topics, after you click on Drugs and Supplements on the homepage, you will be on Drugs and Supplements Page"){
  audio1.pause();
  open.load();
  open.play();
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //audio.autoplay = true;
  //audio.load();
}
  /*else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Terms Review"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/term review.mp3');
  audio.autoplay = true;
  audio.load();}
  else if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Text box"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/text box.mp3');
  audio.autoplay = true;
  audio.load();}*/
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == 'You are now on "Drugs and Supplements" page'){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  //document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  //document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementById("anch_22").style.border = "5px solid white";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "We can search for a drug alphabetically through clicking on these letters, you will get a list of drugs with corresponding initial letter"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  //audio3.pause();
  audio2.load();
  audio2.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  //document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  //document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  //document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  //document.getElementsByClassName("address")[0].style.border = "5px solid white";
  //document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";
  document.getElementById("anch_22").style.border = "5px solid red";}
  
}, false);