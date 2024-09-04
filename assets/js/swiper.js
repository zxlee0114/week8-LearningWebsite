// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from "swiper/bundle";

// Start

const heroSwiper = new Swiper(".heroSwiper", {
  // 循環播放
  loop: true,
  // 左右箭頭
  navigation: {
    prevEl: ".heroSwiper-button-prev",
    nextEl: ".heroSwiper-button-next",
  },
  slidesPerView: 1,
  centeredSlides: true, //active slide 置中

  breakpoints: {
    768: {
      slidesPerView: 1.2, // slide 預覽
      spaceBetween: 40, // slide 間距
    },
  },
  // 自動撥放
  autoplay: {
    delay: 2000,
  },
});
// 參考文章:https://blog.csdn.net/qq_42855675/article/details/112850049

const hotSwiper = new Swiper(".hotSwiper", {});

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1, // 一次呈現幾張
//   slidesPerGroup: 1, // 一個群組內有幾張投影片
//   spaceBetween: 24, // 每個內容之間的間隔為 24px
//   //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

//   loop: true, // 循環播放

//   // 分頁展示方式
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction", // 分數
//   },

//   // 左右箭頭 功能設定
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   //RWD
//   breakpoints: {
//     767: {
//       slidesPerView: 2, // 一次呈現幾張
//       slidesPerGroup: 1, // 一個群組內有幾張投影片
//       spaceBetween: 48, // 每個內容之間的間隔為 48px
//     },
//   },
// });
// 以上僅供測試

// 程式課程 Swiper
const courseListSwiper = new Swiper(".course-list-swiper", {
  slidesPerView: 4, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 8, // 每個內容之間的間隔為 8px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: false, // 循環播放

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".course-list-swiper-button-next",
  },

  //RWD
  breakpoints: {
    1200: {
      slidesPerView: 10, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },

    992: {
      slidesPerView: 8, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },

    767: {
      slidesPerView: 6, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },
  },
});

// 課程卡片 Swiper
const courseSwiper = new Swiper(".course-card-swiper", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: false, // 循環播放

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //RWD
  breakpoints: {
    767: {
      slidesPerView: 4, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 48px
    },
  },
});

// 熱門主題 Swiper
const hotTopicSwiper = new Swiper(".hotTopicSwiper", {
  slidesPerView: 1.7, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 16px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".hot-swiper-button-next",
    prevEl: ".hot-swiper-button-prev",
  },

  // 分頁展示方式
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //RWD
  breakpoints: {
    992: {
      slidesPerView: 6, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 24px
    },

    767: {
      slidesPerView: 4, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 20, // 每個內容之間的間隔為 20px
    },
  },
});

// 一探究竟
const categorySwiper = new Swiper(".category-swiper", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 24, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: false, // 循環播放
});
