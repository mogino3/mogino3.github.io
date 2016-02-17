$(function(){
  $('.text_01').hover(
    function(){
    $(this).css("color","red");
  },
    function(){
      $(this).css("color","#fff");
    }
);
});
$(function() {

    //ページ内スクロール
    $(".scroll_btn").click(function () {
        var i = $(".scroll_btn").index(this)
        var p = $(".content").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
        return false;
    });



});
