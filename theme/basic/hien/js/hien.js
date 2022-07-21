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
})