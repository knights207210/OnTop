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
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/acc6.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/acc7.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/icon.mp3')
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();

};






document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Take a moment to read over this information on Healthy aging and Falls. Please note you are on a new page."){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  audio1.pause();
  open.load();
  open.play();
  document.getElementsByTagName("strong")[0].style.border = "5px solid white";
  document.getElementsByTagName("strong")[1].style.border = "5px solid white";
  document.getElementsByTagName("strong")[2].style.border = "5px solid white";}
  else if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "Notice that there are very similar themes between the information here by the Mayo Clinic to information on MedlinePlus."){
  open.pause();
  audio1.load();
  audio1.play();
  document.getElementsByTagName("strong")[0].style.border = "5px solid red";
  document.getElementsByTagName("strong")[1].style.border = "5px solid red";
  document.getElementsByTagName("strong")[2].style.border = "5px solid red";
  }
  
}, false);




