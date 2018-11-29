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
	$("header .nav-ind .nav-ind-list li").mouseenter(function(){
		$(this).children("a").addClass("active").end().siblings().children("a").removeClass("active");
	})
	
	
	/*轮播图的函数*/
	function lbt(){
		var index = 0;
		var timer = setInterval( autoplay , 2000 );
		var ulist = $(".lbt_list li");
		var olist = $(".lbt_ol li");
		function autoplay(){
			index++;
			if( index > $(".lbt_list li").length ){
				index = 0;
			}
			$(".lbt_list li").eq(index).fadeIn(1500).siblings().fadeOut();
			$(".lbt_ol li").eq(index).css("top",-8).siblings().css("top",0);
		}
		olist.mouseenter(function(){
			clearInterval(timer);
			index = $(this).index()-1;
			autoplay();
		}).mouseleave(function(){
			timer = setInterval( autoplay , 2000 );
		})
	
	}
	//调用轮播图函数
	lbt();
	
	
	//选项卡
	var menubox = $(".menubox");
	var menuboxlist = $(".menubox .menubox-left .left-menu-group");
	var menuconlist = $(".menubox-con .menubox-two");
	menuboxlist.mouseenter(function(){
		menuconlist.eq($(this).index()).show().siblings().hide();
	})
	menubox.mouseleave(function(){
		menuconlist.hide();
	})
	
})
