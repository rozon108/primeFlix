//Array of image data
const imgArray = Array.from({ length: 10 }, (value, index) => index+1);
wideCoverImgData = imgArray.map((x) => "wide-movie-cover" + x + ".jpeg");
biggerCoverImgData = imgArray.map((x) => "big-movie-cover-" + x + ".jpg");
let newArray = Array.from({ length: 37 }, (value, index) => index+1);
movieCoverImgData = newArray.map((x) => x + "-movie-cover.jpg");

//End of Array Data

// let topSliderImg;

// const topSliderImgdiv = document.querySelector(".top-slider-img-container");

// const topSliderImgHTML = wideCoverImgData.map((img) => topSlider(img)).join("");
// function topSlider(img) {
//   return `<img 
//           class="top-slider-img1"
//           src="./assets/movie cover/wide-cover/${img}"
//           alt=""
//         />`;
// }
// topSliderImgdiv.innerHTML = topSliderImgHTML;

// const topSliderImgdiv2 = document.querySelector(".top-slider-img-container2");
// topSliderImgdiv2.innerHTML = topSliderImgHTML;

// OUR Data Referenence
// const imgArray = Array.from({ length: 10 }, (value, index) => index+1);
//above is [1,2.....10]
// wideCoverImgData = imgArray.map((x) => "wide-movie-cover" + x + ".jpeg");
// output [ wide-movie-cover1.jpeg,.....,wide-movie-cover10.jpeg]


// Bootstrap Carousel
// INDICATOR
// .wide-movie-cover-Indicator
// //select
const wideMovie_Indicator = document.querySelector(".wide-movie-cover-Indicator");
// //display
const wideMovie_IndicatorHTML = imgArray.map(x=>wideCoverSlider_indicator_Carousel(x)).join("");
function wideCoverSlider_indicator_Carousel(x){
  return `<button type="button" data-bs-target="#top-slider-carousel" data-bs-slide-to="${x}" ></button>`;
}
wideMovie_Indicator.innerHTML += wideMovie_IndicatorHTML;

//IMAGE COVER
// .wide-movie-cover-Div
// query selector
const wideMovie_ImageCover = document.querySelector(".wide-movie-cover-Div");

const wideMovie_IMGCoverHTML = wideCoverImgData.map(img=>wideCoverSlider_IMG_Carousel(img)).join("");
function wideCoverSlider_IMG_Carousel(data){
  return `  
      <div class="carousel-item">
        <img src="./assets/movie cover/wide-cover/${data}" >
      </div>
      `;
}
wideMovie_ImageCover.innerHTML += wideMovie_IMGCoverHTML;






