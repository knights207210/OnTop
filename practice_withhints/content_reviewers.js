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
var open = new Audio('http://home.ustc.edu.cn/~wyc0807/rev1.mp3');
var audio1 = new Audio('http://home.ustc.edu.cn/~wyc0807/rev2.mp3');
var audio2 = new Audio('http://home.ustc.edu.cn/~wyc0807/icon.mp3')
var audio3 = new Audio('http://home.ustc.edu.cn/~wyc0807/secondmainfeature.mp3');
window.onload = function(){
//var open = new Audio('http://home.ustc.edu.cn/~wyc0807/main feature.mp3');
  //open.autoplay = true;
  open.load();
  open.play();
var a_termreview=document.createElement("a");
a_termreview.href="https://ontop.nickelled.com/mmedlineplus-guide?ngroup=link";
a_termreview.innerText=" \b Intro: \n Basic Computer Terms \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_termreview);
a_termreview.style.lineHeight="30px";
a_termreview.style.border = '2px solid grey';
a_termreview.style.fontSize = '19px';
a_termreview.style.fontWeight = "bold";
a_termreview.style.position = "absolute";
a_termreview.style.top = '20px';
a_termreview.style.left = '1px';
///a_termreview.style.color = "black";
//a_termreview.style.backgroundColor = "yellow";
a_termreview.style.color = "purple";
a_termreview.style.width = '230px';

var a_goal1=document.createElement("a");
a_goal1.href="https://ontop.nickelled.com/homepageinfo?ngroup=link";
a_goal1.innerText="\b GOAL 1: Main Features";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal1);
a_goal1.style.lineHeight="30px";
a_goal1.style.border = '2px solid grey';
a_goal1.style.fontSize = '19px';
a_goal1.style.fontWeight = "bold";
a_goal1.style.position = "absolute";
a_goal1.style.top = '82px';
a_goal1.style.left = '1px';
//a_goal1.style.color = "black";
a_goal1.style.backgroundColor = "yellow";
a_goal1.style.color = "purple";
a_goal1.style.width = '230px';
a_goal1.style.display = "none"

var a_goal2=document.createElement("a");
a_goal2.href="https://ontop.nickelled.com/healthtopics-1?ngroup=link";
a_goal2.innerText="\b GOAL 2:  Health Topics ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal2);
a_goal2.style.lineHeight="30px";
a_goal2.style.border = '2px solid grey';
a_goal2.style.fontSize = '19px';
a_goal2.style.fontWeight = "bold";
a_goal2.style.position = "absolute";
a_goal2.style.top = '114px';
a_goal2.style.left = '1px';
//a_goal2.style.color = "black";
//a_goal2.style.backgroundColor = "white";
a_goal2.style.color = "purple";
a_goal2.style.width = '230px';
a_goal2.style.display = "none"

var a_goal3=document.createElement("a");
a_goal3.href="https://ontop.nickelled.com/healthtopicsinfo?ngroup=link";
a_goal3.innerText="\b GOAL 3: Main Features\n on Health Topics Page";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal3);
a_goal3.style.lineHeight="30px";
a_goal3.style.border = '2px solid grey';
a_goal3.style.fontSize = '19px';
a_goal3.style.fontWeight = "bold";
a_goal3.style.position = "absolute";
a_goal3.style.top = '146px';
a_goal3.style.left = '1px';
//a_goal3.style.color = "black";
//a_goal3.style.backgroundColor = "white";
a_goal3.style.color = "purple";
a_goal3.style.width = '230px';
a_goal3.style.display = "none"

var a_goal4=document.createElement("a");
a_goal4.innerText="\b GOAL 4: Practice using\n Search Box \b ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal4);
a_goal4.style.lineHeight="30px";
a_goal4.style.border = '2px solid grey';
a_goal4.style.fontSize = '19px';
a_goal4.style.fontWeight = "bold";
a_goal4.style.position = "absolute";
a_goal4.style.top = '208px';
a_goal4.style.left = '1px';
a_goal4.style.color = "purple";
a_goal4.style.width = '230px';
a_goal4.style.display = "none"

a_goal4.addEventListener("click", function(){
  document.getElementById("anch_13").style.border = "5px solid white";
  document.getElementById("anch_18").style.border = "5px solid white";
  document.getElementsByClassName("icon icon-home-ht")[0].style.border = "5px solid green";
  document.getElementsByClassName("form-box text-combo")[0].style.border = "5px solid red";
  var instruction_search=document.createElement("a");
  instruction_search.setAttribute("id","instruction_search");
instruction_search.innerText="type in 'diabetes', click 'GO' button";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(instruction_search);
instruction_search.style.border = '3px solid red';
instruction_search.style.fontSize = '20px';
instruction_search.style.position = "absolute";
instruction_search.style.top = '120px';
instruction_search.style.right = '130px';


var list2 = document.getElementById("instruction_healthtopic");
list2.removeChild(list2.childNodes[0]);
list2.removeChild(list2.childNodes[1]);


})

var a_goal5=document.createElement("a");
a_goal5.href="https://ontop.nickelled.com/herbs-and-supplements?ngroup=link";
a_goal5.innerText="\b GOAL 5: \n Herbs & Supplements \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal5);
a_goal5.style.lineHeight="30px";
a_goal5.style.border = '2px solid grey';
a_goal5.style.fontSize = '20px';
a_goal5.style.fontWeight = "bold";
a_goal5.style.position = "absolute";
a_goal5.style.top = '270px';
a_goal5.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
a_goal5.style.color = "purple";
a_goal5.style.width = '230px';
a_goal5.style.display = "none"

var a_goal6=document.createElement("a");
a_goal6.href="https://ontop.nickelled.com/healthy-recipes?ngroup=link";
a_goal6.innerText="\b GOAL 6: Find Healthy\n Recipes \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal6);
a_goal6.style.lineHeight="30px";
a_goal6.style.border = '2px solid grey';
a_goal6.style.fontSize = '20px';
a_goal6.style.fontWeight = "bold";
a_goal6.style.position = "absolute";
a_goal6.style.top = '332px';
a_goal6.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
a_goal6.style.color = "purple";
a_goal6.style.width = '230px';
a_goal6.style.display = "none"

var a_goal7=document.createElement("a");
a_goal7.href="https://ontop.nickelled.com/healthy-providers?ngroup=link";
a_goal7.innerText="\b GOAL 7: Find \n Healthcare \b Providers \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal7);
a_goal7.style.lineHeight="30px";
a_goal7.style.border = '2px solid grey';
a_goal7.style.fontSize = '20px';
a_goal7.style.fontWeight = "bold";
a_goal7.style.position = "absolute";
a_goal7.style.top = '394px';
a_goal7.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
a_goal7.style.color = "purple";
a_goal7.style.width = '230px';
a_goal7.style.display = "none"

var a_goal8=document.createElement("a");
a_goal8.href="https://ontop.nickelled.com/videos-and-tools?ngroup=link";
a_goal8.innerText="\b GOAL 8: Videos & Tools";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_goal8);
a_goal8.style.lineHeight="30px";
a_goal8.style.border = '2px solid grey';
a_goal8.style.fontSize = '20px';
a_goal8.style.fontWeight = "bold";
a_goal8.style.position = "absolute";
a_goal8.style.top = '456px';
a_goal8.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
a_goal8.style.color = "purple";
a_goal8.style.width = '230px';
a_goal8.style.display = "none"

var b_dropdown = document.createElement("BUTTON");
b_dropdown.innerText="click me to collapse";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(b_dropdown);
b_dropdown.style.position = "absolute";
b_dropdown.style.top = '90px';
b_dropdown.style.left = '30px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";

var a_evaluate=document.createElement("a");
a_evaluate.innerText=" \b Evaluating Websites: \b";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(a_evaluate);
a_evaluate.style.lineHeight="30px";
a_evaluate.style.border = '2px solid grey';
a_evaluate.style.fontSize = '19px';
a_evaluate.style.fontWeight = "bold";
a_evaluate.style.position = "absolute";
a_evaluate.style.top = '180px';
a_evaluate.style.left = '1px';
///a_evaluate.style.color = "black";
//a_evaluate.style.backgroundColor = "yellow";
a_evaluate.style.color = "purple";
a_evaluate.style.width = '230px';
//a_evaluate.style.display = "none";

var e_goal1=document.createElement("a");
e_goal1.href="https://ontop.nickelled.com/sponsorship?ngroup=link";
e_goal1.innerText="\b GOAL 1: Sponsorship";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal1);
e_goal1.style.lineHeight="30px";
e_goal1.style.border = '2px solid grey';
e_goal1.style.fontSize = '19px';
e_goal1.style.fontWeight = "bold";
e_goal1.style.position = "absolute";
e_goal1.style.top = '212px';
e_goal1.style.left = '1px';
//e_goal1.style.color = "black";
//e_goal1.style.backgroundColor = "yellow";
e_goal1.style.color = "purple";
e_goal1.style.width = '230px';
//e_goal1.style.display = "none"

var e_goal2=document.createElement("a");
e_goal2.href="https://ontop.nickelled.com/purpose?ngroup=link";
e_goal2.innerText="\b GOAL 2:  Purpose ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal2);
e_goal2.style.lineHeight="30px";
e_goal2.style.border = '2px solid grey';
e_goal2.style.fontSize = '19px';
e_goal2.style.fontWeight = "bold";
e_goal2.style.position = "absolute";
e_goal2.style.top = '244px';
e_goal2.style.left = '1px';
//e_goal2.style.color = "black";
//e_goal2.style.backgroundColor = "yellow";
e_goal2.style.color = "purple";
e_goal2.style.width = '230px';
//e_goal2.style.display = "none"

var e_goal3=document.createElement("a");
e_goal3.href="https://ontop.nickelled.com/reviewers?ngroup=link";
e_goal3.innerText="\b GOAL 3: Reviewers";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal3);
e_goal3.style.lineHeight="30px";
e_goal3.style.border = '2px solid grey';
e_goal3.style.fontSize = '19px';
e_goal3.style.fontWeight = "bold";
e_goal3.style.position = "absolute";
e_goal3.style.top = '276px';
e_goal3.style.left = '1px';
//e_goal3.style.color = "black";
e_goal3.style.backgroundColor = "yellow";
e_goal3.style.color = "purple";
e_goal3.style.width = '230px';
//e_goal3.style.display = "none"

var e_goal4=document.createElement("a");
e_goal4.href="https://ontop.nickelled.com/authorship?ngroup=link";
e_goal4.innerText="\b GOAL 4: Authorship ";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal4);
e_goal4.style.lineHeight="30px";
e_goal4.style.border = '2px solid grey';
e_goal4.style.fontSize = '19px';
e_goal4.style.fontWeight = "bold";
e_goal4.style.position = "absolute";
e_goal4.style.top = '308px';
e_goal4.style.left = '1px';
e_goal4.style.color = "purple";
e_goal4.style.width = '230px';
//e_goal4.style.display = "none"


var e_goal5=document.createElement("a");
e_goal5.href="https://ontop.nickelled.com/updates?ngroup=link";
e_goal5.innerText="\b GOAL 5: Updates";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal5);
e_goal5.style.lineHeight="30px";
e_goal5.style.border = '2px solid grey';
e_goal5.style.fontSize = '20px';
e_goal5.style.fontWeight = "bold";
e_goal5.style.position = "absolute";
e_goal5.style.top = '340px';
e_goal5.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
e_goal5.style.color = "purple";
e_goal5.style.width = '230px';
//e_goal5.style.display = "none"

var e_goal6=document.createElement("a");
e_goal6.href="https://ontop.nickelled.com/accuracy?ngroup=link";
e_goal6.innerText="\b GOAL 6: Accuracy";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal6);
e_goal6.style.lineHeight="30px";
e_goal6.style.border = '2px solid grey';
e_goal6.style.fontSize = '20px';
e_goal6.style.fontWeight = "bold";
e_goal6.style.position = "absolute";
e_goal6.style.top = '372px';
e_goal6.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
e_goal6.style.color = "purple";
e_goal6.style.width = '230px';
//e_goal6.style.display = "none"

var e_goal7=document.createElement("a");
e_goal7.href="https://ontop.nickelled.com/privacy-policy?ngroup=link";
e_goal7.innerText="\b GOAL 7: Privacy Policy";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal7);
e_goal7.style.lineHeight="30px";
e_goal7.style.border = '2px solid grey';
e_goal7.style.fontSize = '20px';
e_goal7.style.fontWeight = "bold";
e_goal7.style.position = "absolute";
e_goal7.style.top = '404px';
e_goal7.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
e_goal7.style.color = "purple";
e_goal7.style.width = '230px';
//e_goal7.style.display = "none"

var e_goal8=document.createElement("a");
e_goal8.href="https://ontop.nickelled.com/contact-information?ngroup=link";
e_goal8.innerText="\b GOAL 8: Contact Information";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(e_goal8);
e_goal8.style.lineHeight="30px";
e_goal8.style.border = '2px solid grey';
e_goal8.style.fontSize = '20px';
e_goal8.style.fontWeight = "bold";
e_goal8.style.position = "absolute";
e_goal8.style.top = '466px';
e_goal8.style.left = '1px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
e_goal8.style.color = "purple";
e_goal8.style.width = '230px';
//e_goal8.style.display = "none"

var b_dropdown2 = document.createElement("BUTTON");
b_dropdown2.innerText="click me to collapse";
//a_backtohome.innerText.style.border = '5px solid red';
document.body.appendChild(b_dropdown2);
b_dropdown2.style.position = "absolute";
b_dropdown2.style.top = '540px';
b_dropdown2.style.left = '30px';
//a_goal4.style.color = "black";
//a_goal4.style.backgroundColor = "white";
//b_dropdown2.style.display = "none";


  b_dropdown.addEventListener("click", function(){
    if (a_goal1.style.display === "block" & e_goal1.style.display === "none"){
      a_goal1.style.display = "none";
      a_goal2.style.display = "none";
      a_goal3.style.display = "none";
      a_goal4.style.display = "none";
      a_goal5.style.display = "none";
      a_goal6.style.display = "none";
      a_goal7.style.display = "none";
      a_goal8.style.display = "none";
      b_dropdown.style.top = "90px";
      b_dropdown.innerText = "click me to expand";
      a_evaluate.style.top = '180px';
      b_dropdown2.style.top = "220px";}
    else if (a_goal1.style.display === "none" & e_goal1.style.display === "none"){
      a_goal1.style.display = "block";
      a_goal2.style.display = "block";
      a_goal3.style.display = "block";
      a_goal4.style.display = "block";
      a_goal5.style.display = "block";
      a_goal6.style.display = "block";
      a_goal7.style.display = "block";
      a_goal8.style.display = "block";
      b_dropdown.style.top = "528px";
      b_dropdown.innerText = "click me to collapse";
      a_evaluate.style.top = '598px';
      b_dropdown2.style.top = '638px';

    }
    else if (a_goal1.style.display === "none" & e_goal1.style.display === "block"){
      a_goal1.style.display = "block";
      a_goal2.style.display = "block";
      a_goal3.style.display = "block";
      a_goal4.style.display = "block";
      a_goal5.style.display = "block";
      a_goal6.style.display = "block";
      a_goal7.style.display = "block";
      a_goal8.style.display = "block";
      b_dropdown.style.top = "528px";
      b_dropdown.innerText = "click me to collapse";
      a_evaluate.style.top = '598px';
      b_dropdown2.style.top = '638px';
      e_goal1.style.display = "none";
      e_goal2.style.display = "none";
      e_goal3.style.display = "none";
      e_goal4.style.display = "none";
      e_goal5.style.display = "none";
      e_goal6.style.display = "none";
      e_goal7.style.display = "none";
      e_goal8.style.display = "none";
      b_dropdown2.innerText = "click me to expand";

    }
  });

  b_dropdown2.addEventListener("click", function(){
    if (e_goal1.style.display === "block" & a_goal1.style.display === "none"){
      e_goal1.style.display = "none";
      e_goal2.style.display = "none";
      e_goal3.style.display = "none";
      e_goal4.style.display = "none";
      e_goal5.style.display = "none";
      e_goal6.style.display = "none";
      e_goal7.style.display = "none";
      e_goal8.style.display = "none";
      b_dropdown2.style.top = "220px";
      b_dropdown2.innerText = "click me to expand";}
    else if (e_goal1.style.display === "none" & a_goal1.style.display === "none"){
      e_goal1.style.display = "block";
      e_goal2.style.display = "block";
      e_goal3.style.display = "block";
      e_goal4.style.display = "block";
      e_goal5.style.display = "block";
      e_goal6.style.display = "block";
      e_goal7.style.display = "block";
      e_goal8.style.display = "block";
      b_dropdown2.style.top = "540px";
      b_dropdown2.innerText = "click me to collapse";}
    else if(e_goal1.style.display === "none" & a_goal1.style.display === "block"){
      e_goal1.style.display = "block";
      e_goal2.style.display = "block";
      e_goal3.style.display = "block";
      e_goal4.style.display = "block";
      e_goal5.style.display = "block";
      e_goal6.style.display = "block";
      e_goal7.style.display = "block";
      e_goal8.style.display = "block";
      b_dropdown2.style.top = "540px";
      b_dropdown2.innerText = "click me to collapse";
      a_goal1.style.display = "none";
      a_goal2.style.display = "none";
      a_goal3.style.display = "none";
      a_goal4.style.display = "none";
      a_goal5.style.display = "none";
      a_goal6.style.display = "none";
      a_goal7.style.display = "none";
      a_goal8.style.display = "none";
      b_dropdown.style.top = "90px";
      b_dropdown.innerText = "click me to expand";
      a_evaluate.style.top = '180px';
    }
  });
};




document.addEventListener("click", function(){
	//alert(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML);
  if(document.getElementsByClassName("nickelled__slide__title nickelled__component__title")[0].innerHTML == "Reviewers:"){
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
  if(document.getElementsByClassName("nickelled__step__title nickelled__component__title")[0].innerHTML == "To look for reviewers, first click on Quality Guidelines."){
  //var audio = new Audio('http://home.ustc.edu.cn/~wyc0807/cate.mp3');
  //audio.autoplay = true;
  //audio.load();
  open.pause();
  audio2.pause();
  audio1.load();
  audio1.play();
  document.getElementById("anch_61").style.border = "5px solid red";}
  
}, false);




