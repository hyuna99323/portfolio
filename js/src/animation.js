// scrollmagic
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

