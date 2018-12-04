$( function(){
	$(".open-menu-btn").click( function(){
		$("#left-menu-wrap").show();
	})
	$("#left-menu-wrap").mouseleave( function(){
		$("#left-menu-wrap").hide();
	})
	
	
	//放大镜
	$(".middle").mouseenter(function(){
		$(".mask").show();
		$(".big").show();
	}).mouseleave( function(){
		$(".mask").hide();
		$(".big").hide();
	})
	$(".middle").mousemove( function( e ){
		var e = e || event;
		var x = e.pageX - $(".box").offset().left- $(".mask").outerWidth()/2;
		var y = e.pageY - $(".box").offset().top - $(".mask").outerHeight()/2;
		
		var maxL = $(".box").width() - $(".mask").width(),
			maxT = $(".middle").height() - $(".mask").height();
		//边界处理
		x = Math.min( maxL , Math.max( 0 , x ) );
		y = Math.min( maxT , Math.max( 0 , y) );
		$(".mask").css({
			"left":x,
			"top":y
		});
		
			var bigx = x*($(".bigimg").outerWidth() - $(".big").outerWidth() )/maxL,
				bigy = y*($(".bigimg").outerHeight() - $(".big").outerHeight() )/maxT;
			$(".bigimg").css({
				"left":-bigx,
				"top":-bigy
			})
	})
	
	$(".smallimg").mouseenter( function(){
		$(this).css("border","2px solid red").siblings().css("border","");
		$(".middleimg").eq($(this).index()).show().siblings().hide();
		$(".bigimg").eq($(this).index()).show().siblings().hide();
	})
	
	//点击自定义播放按钮video出现
	$(".video-btn").click( function(){
		$(".video-box").show();
	})
	$(".video-close").click( function(){
		$(".video-box").hide();
	})
	
	
	$(document).scroll( function(){
		var stop = $("body,html").scrollTop();
		var hei = $(".content").offset().top;
		if( stop >= hei ){
			$(".right-tit").css({"position":"fixed","top":0});
		}else{
			$(".right-tit").css({"position":"relative"});
		}
	})
	
	var rtitlist = $(".right-tit ul li");
	var rconlist = $(".right-con-group");
	rtitlist.click( function(){
		$(this).addClass("tit-active").siblings().removeClass("tit-active");
		rconlist.eq($(this).index()).show().siblings().hide();
	})
})
