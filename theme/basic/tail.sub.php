<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
?>

<?php if ($is_admin == 'super') {  ?><!-- <div style='float:left; text-align:center;'>RUN TIME : <?php echo get_microtime()-$begin_time; ?><br></div> --><?php }  ?>

<?php run_event('tail_sub'); ?>
<!-- 스와이퍼 js -->
<script src="//cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<!-- aos js 파일 -->
<script src="//unpkg.com/aos@2.3.1/dist/aos.js"></script>
<!-- 개인 js파일 -->
<script src="/theme/basic/hien/js/sub.js?ver=<?php echo time()?>"></script>
<script src="/theme/basic/hien/js/hien.js?ver=<?php echo time()?>"></script>
</body>
</html>
<?php echo html_end(); // HTML 마지막 처리 함수 : 반드시 넣어주시기 바랍니다.
