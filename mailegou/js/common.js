$(function(){
	/*点击关闭按钮关闭广告*/
	$("#top_no_close").click( function(){
		$(this).parent().css("display","none");
	})
	
	/*让存在二级菜单的添加类top-nav-menu-hover   stop()停止当前正在运行的动画 slideDown从上到下显示某个元素*/
	$(".top-nav-menu").mouseenter(function(){
			$(this).has(".top-nav-menu-two").addClass("top-nav-menu-hover").children(".top-nav-menu-two").stop().slideDown(10);
	}).mouseleave(function(){
		$(this).has(".top-nav-menu-two").children(".top-nav-menu-two").stop().slideUp(function(){
			$(this).removeClass("top-nav-menu-hover");
		}.bind(this));
	})
	
	
	/*nav滑动时换classname*/
	var navlist = $("header .nav-ind .nav-ind-list li").not(".active");
//	console.log(navlist);
	navlist.mouseenter(function(){
		var le = $(this).position().left;
		var wid = $(this).children("a").width();
		$(this).children("a").css("color","#c8391d").end().siblings().children("a").css("color","#666");
		$("header .nav-ind-list .active").stop().css({"width":wid}).animate({"left":le},300);
	})
	$("header .nav-ind-list").mouseleave(function(){
		navlist.eq(0).children("a").css("color","#c8391d").end().siblings().children("a").css("color","#666");
		$("header .nav-ind-list .active").stop().css({"width":32}).animate({"left":0},300)
	})
	
	
		
	//选项卡
	var menubox = $(".menubox");
	var menuboxlist = $(".menubox .menubox-left .left-menu-group");
	var menuconlist = $(".menubox-two");
	menuboxlist.mouseenter(function(){
		menuconlist.eq($(this).index()).show().siblings().hide();
	})
	menubox.mouseleave(function(){
		menuconlist.hide();
	})
})
