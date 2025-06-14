let slider = document.getElementById("slider");
let images = slider.querySelectorAll("img");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let index = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index++;
    slider.style.transform = `translateX(-${index * 100}%)`;
    //   if (index > images.length - 1 ) {
        //     index = 0;
        //   }
        updateSlider();
    });
    
    prevBtn.addEventListener("click", () => {
        index--;
        slider.style.transform = `translateX(-${index * 100}%)`;
//   if (index < 0) {
//     index = images.length - 1;
//   }
  updateSlider();
});
