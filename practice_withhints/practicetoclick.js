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
window.onload = function(){
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/practicetoclick.mp3');
  open.autoplay = true;
  open.load();
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == 'Practice to click on "Health Topics"'){
  var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/practicetoclick.mp3');
  audio.autoplay = true;
  audio.load();}
  
}, false);








