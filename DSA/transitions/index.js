//ABOUT ME
$(".btn1").on("click", function (e) {
  e.preventDefault();
  slide();
  setTimeout(function () {
    transition();
  }, 800);
  setTimeout(function () {
    window.location.href = "Aboutme.html";
  }, 3400);
});

$(".btn2").on("click", function (e) {
  e.preventDefault();
  slide();
  setTimeout(function () {
    transition();
  }, 800);
  setTimeout(function () {
    window.location.href = "education.html";
  }, 3400);
});

$(".btn3").on("click", function (e) {
  e.preventDefault();
  slide();
  setTimeout(function () {
    transition();
  }, 800);
  setTimeout(function () {
    window.location.href = "skills.html";
  }, 3400);
});

$(".btn4").on("click", function (e) {
  e.preventDefault();
  slide();
  setTimeout(function () {
    transition();
  }, 800);
  setTimeout(function () {
    window.location.href = "collection.html";
  }, 3400);
});

$(".btn5").on("click", function (e) {
  e.preventDefault();
  slide();
  setTimeout(function () {
    transition();
  }, 800);
  setTimeout(function () {
    window.location.href = "contact.html";
  }, 3400);
});

$(".btn-home").on("click", function (e) {
  e.preventDefault();
  slide();
  setTimeout(function () {
    transition();
  }, 800);
  setTimeout(function () {
    window.location.href = "Homepage.html";
  }, 3400);
});

var tl = gsap.timeline();
function transition() {
  tl.fromTo(
    ".body-before",
    0.2,
    { top: "0%" },
    { top: "50%", ease: Power2.easeOut },
    "close"
  )
    .fromTo(
      ".body-after",
      0.2,
      { bottom: "0%" },
      { bottom: "50%", ease: Power2.easeOut },
      "close"
    )

    .fromTo(
      $(".center"),
      0.2,
      { opacity: 0, visibility: "visible", zIndex: "5000" },
      { opacity: 1 }
    )
    .fromTo(
      $(".msg"),
      0.2,
      { opacity: 0, visibility: "visible", zIndex: "5000" },
      { opacity: 1 }
    )

    .fromTo(
      ".body-before",
      0.2,
      { top: "50%" },
      { top: "0%", ease: Power2.easeOut },
      "+=1.5",
      "open"
    )
    .fromTo(
      ".body-after",
      0.2,
      { bottom: "50%" },
      { bottom: "0%", ease: Power2.easeOut },
      "-=0.2",
      "open"
    )

    .fromTo(
      $(".center"),
      0.2,
      { opacity: 1, visibility: "visible", zIndex: "5000" },
      { opacity: 0, visibility: "hidden", zIndex: "0" },
      "-=0.2"
    )
    .fromTo(
      $(".msg"),
      0.2,
      { opacity: 1, visibility: "visible", zIndex: "5000" },
      { opacity: 0, visibility: "hidden", zIndex: "0" },
      "-=0.2"
    );
}

function slide() {
  const transition_el = document.querySelector(".transition");
  transition_el.classList.add("is-active");
}
