//var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/test1.mp3');
//audio.autoplay = true;
//audio.load();
//audio.play()

//var btn =document.getElementById("111889") ; btn.style.border="1px solid #FF9933" ; 
//h3.nickelled__slide__title nickelled__component__title

//var title = window.guideJSON.getElementById("111889").title;
//alert(title);
//if(title == "Medline Plus Tutorial"){
	//var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/test1.mp3');
    //audio.autoplay = true;
    //audio.load();
//}
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/aswepracticed.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/healthtopicstitle.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/searchdiabetesalph.mp3');
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/searchdiabetescate.mp3');

window.onload = function(){
  //open.autoplay = true;
  open.load();
  open.play();
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "As we practiced, after you click on Health Topics on the homepage, you will be on Health Topics Page"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/aswepracticed.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();
}
  
}, false);




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Now you are on the Health Topics Page"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/healthtopicstitle.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  /*document.getElementById("anch_26").style.border = "5px solid white";*/}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "We can search for a health topic alphabetically through clicking on these letters, you will get a list of health topics with corresponding initial letter"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/searchdiabetesalph.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  audio3.pause();
  audio2.load();
  audio2.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid white";
  /*document.getElementById("anch_26").style.border = "5px solid white";*/}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "We can also search for a disease according to categories"){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/searchdiabetescate.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio2.pause();
  //audio4.pause();
  audio3.load();
  audio3.play();
  document.getElementsByTagName("h1")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[0].style.border = "5px solid white";
  document.getElementsByClassName("section-header")[1].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[2].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[3].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[4].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid red";
  document.getElementsByClassName("section-header")[5].style.border = "5px solid red";
  /*document.getElementById("anch_26").style.border = "5px solid white";*/}
  
}, false);


/*document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Goal 1: Main Features of MedlinePlus Homepage"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/complete.mp3');
  audio.autoplay = true;
  audio.load();}
}, false);


document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Three broad categories: Health Topics, Drugs and Supplements, Videos and Tools"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementById("mplus-nav-bar").style.border = "5px solid red";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "This is Search box"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/secmainfeature.mp3');
  audio.autoplay = true;
  audio.load();
  document.getElementById("mplus-nav-bar").style.border = "5px solid white";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  document.getElementsByClassName("form-box text-combo")[1].style.border = "5px solid white";
  document.getElementsByClassName("address")[0].style.border = "5px solid white";
  document.getElementsByClassName("slide selected")[0].style.border = "5px solid white";}
  
}, false);

document.addEventListener("click", function(){
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Practice: Click on the link of Health Topics"){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/practice.mp3');
  audio.autoplay = true;
  audio.load();}
}, false);*/

