$(function(){
  // $('.text_01').hover(function(){
  //   $(this).css("color","red");
  // },
  //   function(){
  //     $(this).css("color","#fff");
  //   });

    //ページ内スクロール
    $(".scroll_btn").click(function () {
        var i = $(".scroll_btn").index(this)
        var p = $(".content").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
        return false;
    });

});

// 一連の処理
$( function(){
	// グローバル変数
	var syncerTimeout = null ;
	// スクロールイベントの設定
	$( window ).scroll( function()
	{
		// 1秒ごとに処理
		if( syncerTimeout == null )
		{
			// セットタイムアウトを設定
			syncerTimeout = setTimeout( function(){

				// 対象のエレメント
				var element = $( '#page-top' ) ;

				// 現在、表示されているか？
				var visible = element.is( ':visible' ) ;

				// 最上部から現在位置までの距離を取得して、変数[now]に格納
				var now = $( window ).scrollTop() ;

				// 最下部から現在位置までの距離を計算して、変数[under]に格納
				var under = $( 'body' ).height() - ( now + $(window).height() ) ;

				// 最上部から現在位置までの距離(now)が200以上かつ
				if( now > 200 )
				{
					// 非表示状態だったら
					if( !visible )
					{
						// [#page-top]をゆっくりフェードインする
						element.fadeIn( 'slow' ) ;
					}
				}

				// 200px以下かつ
				// 表示状態だったら
				else if( visible )
				{
					// [#page-top]をゆっくりフェードアウトする
					element.fadeOut( 'slow' ) ;
				}

				// フラグを削除
				syncerTimeout = null ;
			} , 500 ) ;
		}
	} ) ;

	// クリックイベントを設定する
	$( '#move-page-top' ).click(
		function()
		{
			// スムーズにスクロールする
			$( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
		}
	) ;
} ) ;
