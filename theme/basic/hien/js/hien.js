$(document).ready(function(){
    // $('body').addClass('ccc')
    AOS.init();

    var swiper = new Swiper("#mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {el: "#mySwiper .swiper-pagination", clickable: true,},
      navigation: {nextEl: "#mySwiper .swiper-button-next", prevEl: "#mySwiper .swiper-button-prev",}
    });


    var scrollPos = '';
     $(window).scroll(function(){ 
      scrollPos = $(window).scrollTop()
      if(scrollPos == 0){
        $('#gnb li').removeClass('on')
        $('#gnb li:first-child').addClass('on')}
      $('.deskNavi').each(function(){
        if( scrollPos > $(this).offset().top - 200){
          $('#gnb li').removeClass('on')
          $('#gnb li a[href="#'+$(this).attr('id')+'"]').parent().addClass('on')}
      })
     });

    $('#gnb a').click(function(event){
        event.preventDefault(); // 이벤트가 발생하면 a태그의 고유의 기능막아라
        var _this = $(this); // 이벤트 호출한 객체를 미리저장하기

        $('body, html').animate({
            scrollTop : $(_this.attr('href')).offset().top
        }, 400, function(){
            $('#gnb li').removeClass('on')
            _this.parent().addClass('on')})
    })
    

    const org = new Swiper('#orgSwiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
    
      // If we need pagination
      pagination: {
        el: '#orgSwiper .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '#orgSwiper .swiper-button-next',
        prevEl: '#orgSwiper .swiper-button-prev',
      },
      
    });

    $('#book_btn > a').click(function(){
      $('#book_btn').toggleClass('on')
    });
    $('#book_btn').click(function(){
      $('body, html').animate({
        scrollTop: $($('#brochure')).offset().top
      },400,function(){
        $('#book_btn').removeClass('on')
      });
    })
  

})