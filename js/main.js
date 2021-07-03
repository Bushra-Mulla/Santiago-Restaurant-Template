$(document).ready(function () {
  console.log("object");
  const lang = $(".select:first").text();
  $(".language").text(lang);
});

$(".lang").on("click", (event) => {
  const selectLang = event.target;
  $(".select").removeClass("select");
  $(selectLang).addClass("select");
  $(".language").text($(selectLang).text());
});

const nav = $(".nav");
$(".toggle-menu").on("click", () => {
  $(nav).addClass("nav--open");
});

$(".nav__overlay").on("click", () => {
  $(nav).removeClass("nav--open");
});

var mixer = mixitup(".menu", {
  animation: {
    duration: 610,
    nudge: true,
    reverseOut: false,
    effects: "fade",
  },
});
$("li.nav-link").on("click", function (event) {
  const current = event.target;
  $(".active").removeClass("active");
  $(current).addClass("active");
  $(".corrent").text(" < " + $(current).text());
});
$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    rtl: true,
    centerMode: true,
    centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//  overlay visiblity
$(".new-comment").on("click", () => {
  $(".overlay").addClass("visible");
});
$(".add-comment").on("click", () => {
  $(".visible").removeClass("visible");
});
