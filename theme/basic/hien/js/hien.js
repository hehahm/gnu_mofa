$(document).ready(function(){
    // $('body').addClass('ccc')
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
      }
    });

 


    // //console.log($('#pagetop > div[id]').length)
    // var _thisid = '';
    // var _arrTop = [];
    // $('#pagetop > div[id]').each(function(){
    //   _arrTop.push($(this).offset().top)
    //   //$(this).attr('data-pos',_thistopPos)  
    // });
    // console.log(_arrTop)

    // $(window).scroll(function(){ // 스크롤을 일으킬때마다 계산해라

    //   $('#pagetop > div[id]').each(function(){
    //   if( $(window).scrollTop() > $(this).offset().top ){ 

    //     _thisid = $(this).attr('id');
    //     console.log( '#'+_thisid )

        
    //   }
    // })

      

    // })

    

    



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
    

    
})