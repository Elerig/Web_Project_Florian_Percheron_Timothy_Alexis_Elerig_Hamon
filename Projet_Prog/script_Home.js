// Wrap every letter in a span
var textWrapper = document.querySelector('.title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.title .letter', 
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [360, 0],
    duration: 2000,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })

// Wrap every letter in a span
var textWrapper = document.querySelector('.section_2 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.section_2 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 20 * i
  })

  anime.timeline({loop: false})
  .add({
    targets: '.slogan .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 5000
  })
  .add({
    targets: '.slogan .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  })
  .add({
    targets: '.slogan .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  })
  .add({
    targets: '.slogan .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  })
  .add({
    targets: '.slogan .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  })
  .add({
    targets: '.slogan',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: infinite
  });