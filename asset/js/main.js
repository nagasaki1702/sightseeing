var tabEl = document.querySelector('button[data-bs-toggle="tab"]');
tabEl.addEventListener("shown.bs.tab", function (event) {
  event.target; // newly activated tab
  event.relatedTarget; // previous active tab
});

var reviewSlider = document.querySelector('#reviewSlider')
var carousel = new bootstrap.Carousel(reviewSlider)