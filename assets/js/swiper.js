// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from 'swiper/bundle';

// Start

const heroSwiper = new Swiper('.heroSwiper', {
  // 循環播放
  loop: true,
  // 左右箭頭    
  navigation: {
    prevEl: '.heroSwiper-button-prev',
    nextEl: '.heroSwiper-button-next',
  },
  slidesPerView: 1,
  centeredSlides: true, //active slide 置中

  breakpoints: {
    768: {
      slidesPerView: 1.2, // slide 預覽 
      spaceBetween: 40, // slide 間距
    }
  },
  // 自動撥放
  autoplay: {
    delay: 2000,
  },
});
// 參考文章:https://blog.csdn.net/qq_42855675/article/details/112850049

const hotSwiper = new Swiper('.hotSwiper', {
  
});
  