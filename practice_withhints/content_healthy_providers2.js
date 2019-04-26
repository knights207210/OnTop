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
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/hp5.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/hp6.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/hp7.mp3')
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
};








document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Please note that you are on a new webpage for the Academy of General Dentistry."){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();
  document.getElementsByClassName("logo")[0].style.border = "5px solid red";
  document.getElementById("searchText").style.border = "5px solid white";
  document.getElementsByClassName("btn")[1].style.border = "5px solid white"}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "To find dentists nearby, enter your Zip code, city and state, or full address."){
  audio1.load();
  audio1.play();
  open.pause();
  audio2.pause();
  document.getElementsByClassName("logo")[0].style.border = "5px solid white";
  document.getElementById("searchText").style.border = "5px solid red";
  document.getElementsByClassName("btn")[1].style.border = "5px solid white"
  }
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "After you enter your information, click the FIND AN AGD DENTIST button."){
  audio2.load();
  audio2.play();
  audio1.pause();
  document.getElementsByClassName("logo")[0].style.border = "5px solid white";
  document.getElementById("searchText").style.border = "5px solid white";
  document.getElementsByClassName("btn")[1].style.border = "5px solid red"
  }
}, false);



