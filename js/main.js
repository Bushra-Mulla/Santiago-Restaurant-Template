
$(".class").on("click", function (event) {
  const current = event.target;
  $(".active").removeClass("active");
  $(current).addClass("active");
});

//create accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}
//  overlay visiblity
$(".new-comment").on('click',()=>{
  $(".overlay").addClass("visible");

});
$(".add-comment").on("click", () => {
  $(".visible").removeClass("visible");
});



//propgress bar step
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const content = document.getElementById("content");
const bullets = [...document.querySelectorAll(".bullet")];

const MAX_STEPS = 3;
let currentStep = 1;

nextBtn.addEventListener("click", () => {
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  previousBtn.disabled = false;
  if (currentStep === MAX_STEPS) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
  content.innerText = `Step Number ${currentStep}`;
});

previousBtn.addEventListener("click", () => {
  bullets[currentStep - 2].classList.remove("completed");
  currentStep -= 1;
  nextBtn.disabled = false;
  finishBtn.disabled = true;
  if (currentStep === 1) {
    previousBtn.disabled = true;
  }
  content.innerText = `Step Number ${currentStep}`;
});

finishBtn.addEventListener("click", () => {
  location.reload();
});

// slider

$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

