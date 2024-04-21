const seq = document.querySelector('.set-seq');

/*SEQUENCE*/
const sng1 = document.querySelector('.sng-1');
const sng2 = document.querySelector('.sng-2');
const sng3 = document.querySelector('.sng-3');




const schoolpri = document.querySelector('.school-pri');
const datepri = document.querySelector('.date-pri');

const schoolsecon = document.querySelector('.school-secon');
const datesecon = document.querySelector('.date-secon');

const schoolthird = document.querySelector('.school-ter');
const datethird = document.querySelector('.date-ter');

/*ACHIEVEMENTS*/
const achievables1 =document.querySelector('.achieve-show1');
const achievables2 =document.querySelector('.achieve-show2');


const datachur = document.querySelector('.percentages');
const stats = document.querySelector('.statistic');

const tab = document.querySelector('.syncer');
const sequence = document.getElementById('seq');

/*BLUR BG */
const blurvid = document.querySelector('.myVideo');
const blurhead = document.querySelector('.head');


const blureduc = document.querySelector('.Animus-cont');
const bluredbar = document.querySelector('.navbar');

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


let achievable1 = gsap.fromTo(achievables1, {opacity: 0, x: 20}, {
  opacity: 0.8666,
  display: "block",
  x: 0,
  stagger: 0.02,
  paused: true
});



let achievable2 = gsap.fromTo(achievables2, {opacity: 0, x: 20}, {
  opacity: 0.8666,
  display: "block",
  x: 0,
  stagger: 0.02,
  paused: true
});



let schoolprimary = gsap.fromTo(schoolpri, {opacity: 0, y: 20}, {
  opacity: 0.8666,
  display: "block",
  y: 0,
  stagger: 0.02,
  paused: true
});

let dateprimary = gsap.fromTo(datepri, {opacity: 0, y: 20}, {
  opacity: 0.8666,
  display: "block",
  y: 0,
  stagger: 0.02,
  paused: true
});


let schoolsecond = gsap.fromTo(schoolsecon, {opacity: 0, y: 20}, {
  opacity: 0.8666,
  display: "block",
  y: 0,
  stagger: 0.02,
  paused: true
});

let datesecond = gsap.fromTo(datesecon, {opacity: 0, y: 20}, {
  opacity: 0.8666,
  display: "block",
  y: 0,
  stagger: 0.02,
  paused: true
});


let schoolfinal = gsap.fromTo(schoolthird, {opacity: 0, y: 20}, {
  opacity: 0.8666,
  display: "block",
  y: 0,
  stagger: 0.02,
  paused: true
});

let datefinal = gsap.fromTo(datethird, {opacity: 0, y: 20}, {
  opacity: 0.8666,
  display: "block",
  y: 0,
  stagger: 0.02,
  paused: true
});



let titleAnimation = gsap.fromTo(seq, {y: -20, opacity: 0}, {
  y: 0,
  opacity: 1,
  ease: Elastic.easeIn,
  paused: true
});

let percent = gsap.fromTo(tab, {width: 0, duration: 0.5, opacity: 0, delay: 0.7}, {
  opacity:1,
  stagger: 0.02,
  width: 700,
  ease: 'sine.out',
  paused: true
});

let affiliation = gsap.fromTo(blureduc, {filter: "blur(0px)"}, {
  filter: "blur(10px)",
  stagger: 0.02,
  paused: true
});

let buttonbar = gsap.fromTo(bluredbar, {filter: "blur(0px)"}, {
  filter: "blur(10px)",
  duration: 0.2,
  stagger: 0.02,
  paused: true
  });

/*Part 1 */
sng1.addEventListener("mouseover", () => {
  schoolprimary.play();
  titleAnimation.play();
   percent.play();
   dateprimary.play();
   achievable1.play();


   blurvideo.play();
   header.play();

   affiliation.play();
   buttonbar.play();
   achievables1.innerHTML = 'NO RECORDED ACHIEVEMENTS';
  schoolpri.innerHTML = 'DARAPIDAP ELEMENTARY SCHOOL';
  datepri.innerHTML = 'DARAPIDAP, 2009-2016';
  sequence.innerHTML = 'PRIMARY SCHOOL';
  tab.style.overflow = 'hidden';
  datachur.innerHTML = '100%';
  stats.innerHTML = 'COMPLETED';

});

sng1.addEventListener("mouseout", () => {

  achievable1.reverse();
  achievable2.reverse();
  schoolprimary.reverse();
  dateprimary.reverse();
  percent.reverse();
  titleAnimation.reverse();
  dateprimary.reverse();
  achievable1.reverse();

  blurvideo.reverse();


  header.reverse();
  affiliation.reverse();
  buttonbar.reverse();
});


/*Part 2*/
sng2.addEventListener("mouseover", () => {
  schoolprimary.play();
  dateprimary.play();

  schoolsecond.play();
  datesecond.play();

  schoolfinal.play();
  datefinal.play();

  titleAnimation.play();
   percent.play();
  
   achievable1.play();
   achievable2.play();
   blurvideo.play();
  header.play();

  affiliation.play();
  buttonbar.play();

   achievables1.innerHTML = 'PERFECT ATTENDANCE';
   achievables2.innerHTML = 'GPA at 93.0';
  schoolpri.innerHTML = 'NICOSAT COLLEGES INC';
  datepri.innerHTML = 'OAIG DAYA, 2016-2019';

  schoolsecon.innerHTML = 'CANDON NATIONAL HIGH SCHOOL';
  datesecon.innerHTML = 'GABOR, 2019-2021';


  schoolthird.innerHTML = 'CVCITC';
  datethird.innerHTML = 'ISABELA 2021-2022';

  sequence.innerHTML = 'SECONDARY SCHOOL';
  tab.style.overflow = 'hidden';

  datachur.innerHTML = '100%';
  stats.innerHTML = 'COMPLETED';
});

sng2.addEventListener("mouseout", () => {
  achievable1.reverse();
  achievable2.reverse();
  schoolprimary.reverse();
  dateprimary.reverse();

  schoolsecond.reverse();
  datesecond.reverse();
 blurvideo.reverse();


  header.reverse();

  schoolfinal.reverse();
  datefinal.reverse();
  blurvideo.reverse();
  percent.reverse();
  titleAnimation.reverse();
  affiliation.reverse();
  buttonbar.reverse();
});


/*THIRD*/

sng3.addEventListener("mouseover", () => {
  schoolprimary.play();
  titleAnimation.play();
   percent.play();
   dateprimary.play();

   achievable1.play();
   blurvideo.play();


   header.play();
   affiliation.play();
   buttonbar.play();
   achievables1.innerHTML = 'PERFECT ATTENDANCE';
  schoolpri.innerHTML = 'ISPSC';
  datepri.innerHTML = 'SAN NICOLAS, 2022 - PRESENT';
  sequence.innerHTML = 'COLLEGE';
  tab.style.overflow = 'hidden';
  datachur.innerHTML = '45%';
  stats.innerHTML = 'IN COMPLETION';
});

sng3.addEventListener("mouseout", () => {
  achievable1.reverse();
  schoolprimary.reverse();
  dateprimary.reverse();
  percent.reverse();
  titleAnimation.reverse();
  dateprimary.reverse();
  blurvideo.reverse();


  header.reverse();
  affiliation.reverse();
  buttonbar.reverse();
});