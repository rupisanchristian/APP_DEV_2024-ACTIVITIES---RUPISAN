


const menu1 =document.querySelector('.sng-1');
const menu2 =document.querySelector('.sng-2');
const menu3 =document.querySelector('.sng-3');
const menu4 =document.querySelector('.sng-4');
const menu5 =document.querySelector('.sng-5');

const hovermenu =document.querySelector('.main-hover');
const title = document.querySelector('.menu');

const blurvid = document.querySelector('.myVideo');
const blurhead = document.querySelector('.head');


const bluredtab = document.querySelector('.Animus-cont');
const bluredprof = document.querySelector('.prof-info')

let mainmenu = gsap.fromTo(hovermenu, {width: 0, duration: 0.5, opacity: 0, delay: 0.7}, {
    opacity:1,
    stagger: 0.02,
    width: 700,
    ease: 'sine.out',
    paused: true
  });


  let blurvideo = gsap.fromTo(blurvid, {filter: "blur(0px)"}, {
    filter: "blur(10px)",
    display: "block",
    stagger: 0.02,
    paused: true
  });
  
  let header = gsap.fromTo(blurhead, {filter: "blur(0px)"}, {
    filter: "blur(10px)",
    display: "block",
    stagger: 0.02,
    paused: true
  });

  let blurtab = gsap.fromTo(bluredtab, {filter: "blur(0px)"}, {
    filter: "blur(10px)",
    stagger: 0.02,
    paused: true
  });
  
  let blurprofile = gsap.fromTo(bluredprof, {filter: "blur(0px)"}, {
    filter: "blur(10px)",
    stagger: 0.02,
    paused: true
  });
  
  

  menu1.addEventListener("mouseover", () => {
    mainmenu.play();
    hovermenu.style.overflow = 'hidden';
    hovermenu.style.whiteSpace = 'nowrap'
     title.innerHTML = 'ABOUT ME';
     blurtab.play();
     header.play();
     blurvideo.play();
     blurprofile.play();
  });
  
  menu1.addEventListener("mouseout", () => {
    mainmenu.reverse();
    blurtab.reverse();
    header.reverse();
    blurvideo.reverse();
    blurprofile.reverse();
  });

  menu2.addEventListener("mouseover", () => {
    mainmenu.play();
    hovermenu.style.overflow = 'hidden';
    hovermenu.style.whiteSpace = 'nowrap'
     title.innerHTML = 'EDUCATION ATTAINMENT';
     blurtab.play();
     header.play();
     blurvideo.play();
     blurprofile.play();
  });
  
  menu2.addEventListener("mouseout", () => {
    mainmenu.reverse();
    blurtab.reverse();
     header.reverse();
     blurvideo.reverse();
     blurprofile.reverse();
  });

  menu3.addEventListener("mouseover", () => {
    mainmenu.play();
    hovermenu.style.overflow = 'hidden';
    hovermenu.style.whiteSpace = 'nowrap'
     title.innerHTML = 'SKILLS';
     blurtab.play();
     header.play();
     blurvideo.play();
     blurprofile.play();
  });
  
  menu3.addEventListener("mouseout", () => {
    mainmenu.reverse();
    blurtab.reverse();
     header.reverse();
     blurvideo.reverse();
     blurprofile.reverse();
  });


  menu4.addEventListener("mouseover", () => {
    mainmenu.play();
    hovermenu.style.overflow = 'hidden';
    hovermenu.style.whiteSpace = 'nowrap'
     title.innerHTML = 'COLLECTION';
     blurtab.play();
     header.play();
     blurvideo.play();
     blurprofile.play();
  });
  
  menu4.addEventListener("mouseout", () => {
    mainmenu.reverse();
    blurtab.reverse();
     header.reverse();
     blurvideo.reverse();
     blurprofile.reverse();
  });

  menu5.addEventListener("mouseover", () => {
    mainmenu.play();
    hovermenu.style.overflow = 'hidden';
    hovermenu.style.whiteSpace = 'nowrap'
     title.innerHTML = 'CONTACT';
     blurtab.play();
     header.play();
     blurvideo.play();
     blurprofile.play();

  });
  
  menu5.addEventListener("mouseout", () => {
    mainmenu.reverse();
    blurtab.reverse();
     header.reverse();
     blurvideo.reverse();
     blurprofile.reverse();
  });

  