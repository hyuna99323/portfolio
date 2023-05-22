(function(){

  ('#main_contant').headinner({
		//options here
    anchors: ['portfolio', 'about', 'skills', 'project_m', 'clone', 'contact'],
		autoScrolling:true,
    navigation:true,
    navigationPosition:'right',
	});
});



// page move -----------------------------
function home(){
  let url = "https://hyuna323.github.io/hyuna_portfolio/html/portfolio_main.html";
  window.location = url;
}

function ohou(){
  window.open("https://hyuna323.github.io/ohou_project/html/01_prototype_1280_main.html", "_blank");
}

function ediya(){
  window.open("https://hyuna323.github.io/ediya_project/html/01_ediya_main.html", "_blank");
}

function portfolio(){
  window.open("https://hyuna323.github.io/hyuna_portfolio/html/portfolio_main.html", "_blank");
}

function ofproject(){
  window.open("https://hyuna323.github.io/OF_project/html/ofproject.html", "_blank");
}

function interactive(){
  window.open("https://hyuna323.github.io/interactive_learning/html/interactive_main.html", "_blank");
}

// notion으로 이동
function ohouModal(){
  window.open("https://www.notion.so/01-71c60410f5c74f69b8b49065891e48e6?pvs=4", "_blank");
}

function ediyaModal(){
  window.open("https://www.notion.so/02-3d5c4a90ba414e3da535fa7a8317be6d?pvs=4", "_blank");
}

function portfoiloaModal(){
  window.open("https://www.notion.so/03-1ace6e61c74a4a8aa76c130b1b3e4007?pvs=4", "_blank");
}

function ofModal(){
  window.open("https://www.notion.so/04-OF-9c4ee08888404e90b37a2a673b8d47db?pvs=4", "_blank");
}

function interactiveModal(){
  window.open("https://www.notion.so/05-Interactive-learning-de57dfa3643c470dbfcef449f1f2003e?pvs=4", "_blank");
}

(function() {
    
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".project_inner",
    triggerHook: 0.8
  })

var revealElements = document.getElementsByClassName("project");
for (var i = 0; i < revealElements.length; i++) {

  var scene2 = new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: -350,
    triggerHook: 0.3
  })
  .setClassToggle(revealElements[i], "visible")
  .addTo(controller)
    // .addIndicators({name: "(box) " + (i+1), colorStart:"#F6B352", colorTrigger:"#F6B352"});

}

}())




// 페이지 넘김 animation
  const observer = new IntersectionObserver((e)=>{
    e.forEach((Scrolling)=>{
      if (Scrolling.isIntersecting){
        Scrolling.target.style.opacity = 1;
      } else {
        Scrolling.target.style.opacity = 0;
      }
      Scrolling.intersectionRatio
    })
  }) // 감시 중 박스가 화면 등장 시 해당코드 실행

  const scrolling = document.querySelectorAll('.scroll')

  observer.observe(scrolling[0])
  observer.observe(scrolling[1])
  observer.observe(scrolling[2])



