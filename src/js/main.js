import Swiper from '../node_modules/swiper/swiper-bundle';


window.addEventListener('DOMContentLoaded',()=>{
    function createdSiper(){
        new Swiper('.product__swiper-container',{
            slidesPerView: 1,
            coverflowEffect: {
                modifier:1,
                depth:100,
                rotate: 30,
                slideShadows:true,
                stretch:0
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }
    
        })
    }

    const menu = document.querySelector('.menu__wrapper'),
    hamburger = document.querySelector('.hamburger');


function activeClass() {
    hamburger.addEventListener('click',(e)=>{
        const target = e.target;
        const me = menu.classList.contains('menu__wrapper')
        if(target && menu.classList.contains('menu__wrapper')){
           hamburger.classList.toggle('hamburger-active')
           menu.classList.toggle('menu__wrapper-active')
        }

    })
}



    createdSiper()
    activeClass()

})