// 參考文章：https://ithelp.ithome.com.tw/articles/10208819

const nav = document.querySelector('#navbar');
const topOfNav = nav.offsetTop;

function stickyNav(){
    if ( window.scrollY >= topOfNav ){
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
    }
    else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = `0px`;
    }
}

