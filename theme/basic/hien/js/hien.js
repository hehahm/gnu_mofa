$(document).ready(function(){
    // $('body').addClass('ccc')
    $('#gnb a').click(function(event){
        event.preventDefault(); // 이벤트가 발생하면 a태그의 고유의 기능막아라
        var _this = $(this); // 이벤트 호출한 객체를 미리저장하기

        $('body, html').animate({
            scrollTop : $(_this.attr('href')).offset().top
        }, 400, function(){
            $('#gnb li').removeClass('on')
            _this.parent().addClass('on')
        })
    })
    AOS.init();

    var swiper = new Swiper("#mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: "#mySwiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#mySwiper .swiper-button-next",
          prevEl: "#mySwiper .swiper-button-prev",
        },
      });
})