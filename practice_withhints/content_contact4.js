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
//}
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/cont10.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/cont11.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/pri3.mp3')
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/acc4.mp3');
var audio4 = new Audio('http://home.ustc.edu.cn/~wyc0807/acc5.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();

};







document.addEventListener("click", function(){
  //alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "You can use the help desk to ask specific questions and their support team will respond back to you through email."){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();
  }
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Providing a direct line of communication is a good sign of trustworthiness for an organization."){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio1.load();
  audio1.play();
  }

  }, false);





