<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/shop.tail.php');
    return;
}
?>

    </div>
    <div id="aside">
        <?php echo outlogin('theme/basic'); // 외부 로그인, 테마의 스킨을 사용하려면 스킨을 theme/basic 과 같이 지정 ?>
        <?php echo poll('theme/basic'); // 설문조사, 테마의 스킨을 사용하려면 스킨을 theme/basic 과 같이 지정 ?>
    </div>
</div>

</div>
<!-- } 콘텐츠 끝 -->

<hr>

<!-- 하단 시작 { -->
<div id="ft">

    <div id="ft_wr">
        
        <div id="ft_company" class="ft_cnt d-flex row align-items-center justify-content-between">
        	<img src="/img/mofa_logo.png">
	        <p class="ft_info pl-4">
            주소 : (110-787) 서울시 종로구 사직로 8길 60 외교부 유엔과 국제기구 인사센터<br>
            전화 : 02-2100-8421, 7241 팩스 : 02-2100-7963 이메일 : unrecruit@mofa.go.kr
			</p>
            <div class="ft_sns">
                <strong>외교부 소셜미디어</strong>
                <ul class="d-flex row justify-content-between align-items-center">
                    <li><a href="//www.facebook.com/mofakr.kr"><img src="/img/fb.png"></a></li>
                    <li><a href="//www.instagram.com/mofa_kr/"><img src="/img/insta.png"</a></li>
                    <li><a href="//www.youtube.com/user/MOFAKorea"><img src="/img/youtube.png"></a></li>
                </ul>
            </div>
	    </div>
        <div id="ft_link" class="ft_cnt d-flex justify-content-end">
            <a href="//unrecruit.mofa.go.kr/new/">홈페이지</a>
            <a href="//www.mofa.go.kr/www/wpge/m_4194/contents.do">개인정보처리방침</a>
        </div>
        <?php
        //공지사항
        // 이 함수가 바로 최신글을 추출하는 역할을 합니다.
        // 사용방법 : latest(스킨, 게시판아이디, 출력라인, 글자수);
        // 테마의 스킨을 사용하려면 theme/basic 과 같이 지정
        echo latest('theme/notice', 'notice', 4, 13);
        ?>
        
		<?php echo visit('theme/basic'); // 접속자집계, 테마의 스킨을 사용하려면 스킨을 theme/basic 과 같이 지정 ?>
	</div>      
        <!-- <div id="ft_catch"><img src="<?php echo G5_IMG_URL; ?>/ft_logo.png" alt="<?php echo G5_VERSION ?>"></div> -->
        <div id="ft_copy">Copyright &copy; <b>Hee-eun Hahm</b> All rights reserved.</div>
    
    <button type="button" id="book_btn" href="#brochure">
    	<i class="fa-solid fa-book" aria-hidden="true"></i><span class="sound_only">브로슈어</span>
    </button>
    <button type="button" id="top_btn">
    	<i class="fa-solid fa-globe" aria-hidden="true"></i><span class="sound_only">상단으로</span>
    </button>
    <script>
    $(function() {
        $("#top_btn").on("click", function() {
            $("html, body").animate({scrollTop:0}, '500');
            return false;
        });
    });
    </script>
</div>

<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");