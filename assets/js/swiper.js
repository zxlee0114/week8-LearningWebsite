// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from "swiper/bundle";

// Start

const heroSwiper = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  // 左右箭頭
  navigation: {
    prevEl: ".heroSwiper-button-prev",
    nextEl: ".heroSwiper-button-next",
  },
  pagination: {
    el: ".heroSwiper-pagination",
  },

  watchSlidesProgress: true,
  breakpoints: {
    768: {
      spaceBetween: 15, // slide 間距
    },
    992: {
      spaceBetween: 40, // slide 間距
    }
  },
  // 循環播放
  loop: true,
  // 自動撥放
  autoplay: {
    delay: 2000,
  },
});

// 參考文章：https://blog.csdn.net/qq_42855675/article/details/112850049

const hotCategorySwiper = new Swiper('.hotCategorySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 8,
  breakpoints: {
    768:{
      spaceBetween: 12,
    },
    1200:{
      slidesPerView: 3,
      grid: {
        fill: 'row',
        rows: 3,
      },
    }
  }
});
const hotSwiper = new Swiper('.hotSwiper', {
  slidesPerView: 1.1,
  spaceBetween: 24,
  pagination: {
    el: ".hotSwiper-pagination",
  },
  breakpoints: {
    768:{
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
    }
  }
});


const teachersSwiper = new Swiper('.teachersSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".teachersSwiper-pagination",
  },
  breakpoints: {
    768:{
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});

// 程式課程 Swiper
const courseListSwiper = new Swiper(".course-list-swiper", {
  slidesPerView: 4, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 8, // 每個內容之間的間隔為 8px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。
  
  loop: true, // 循環播放
  
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
  slidesPerView: 1.1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 16px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".course-swiper-button-next",
    prevEl: ".course-swiper-button-prev",
  },

  //RWD
  breakpoints: {
    1200: {
      slidesPerView: 4, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 24px
    },

    992: {
      slidesPerView: 3, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 24px
    },

    768: {
      slidesPerView: 2.3, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 24px
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

    bulletActiveClass: "swiper-pagination-bullet-active",
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
const categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: 1.2,
  grid: {
    fill: 'row',
    rows: 2,
  },
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 3.2,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 2,
      grid: {
        rows: 4,
      }
    }
  }
  //swipwer行列式，參考文章：https://stackoverflow.com/questions/72873652/swiper-js-rows-2-is-stacking-everything-resulting-in-infinite-rows
});




// const testSwiper = new Swiper(".testSwiper", {
//   slidesPerView: 4,
  
//   pagination: {
//     el: ".testSwiper-pagination",
//   },
//   spaceBetween: 24,
//   watchSlidesProgress: true,
//   breakpoints: {
//     992: {
//       navigation: {
//         nextEl: ".testSwiper-button-next",
//         prevEl: ".testSwiper-button-prev",
//       },
//     }
//   }
// });

// const testSwiper2 = new Swiper(".testSwiper2", {
//   slidesPerView: 1,
//   centeredSlides: true,
//   pagination: {
//     el: ".testSwiper2-pagination",
//   },
//   spaceBetween: 40,
//   watchSlidesProgress: true,
//   breakpoints: {
//     992: {
//       navigation: {
//         nextEl: ".testSwiper2-button-next",
//         prevEl: ".testSwiper2-button-prev",
//       },
//     }
//   },
//   loop:true,
// });