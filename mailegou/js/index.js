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
	
	/*天天特卖的小运动*/
	function tiananimate(){
		var oi = $(".tiantian-betcon-ani i");
//		console.log(i);
		var index = 0;
		var arr = [];
		for( var i = 0 ; i < oi.length ; i++ ){
			arr.push({"x":$(oi[i]).position().left,"y":$(oi[i]).position().top});
		}
		for( var i = 0 ; i < oi.length ; i++ ){
//			console.log(arr[i].x);
			$(oi[i]).css({"position":"absolute","left":arr[i].x,"top":arr[i].y});
		}
		var timer = setInterval(function(){
			index++;
			if(index>=oi.length){
				index=0;
			}
			oi.eq(index).css("top",-6).siblings().css("top",0);
		},500)
	}
	 tiananimate();
	 
	//楼梯效果
	var barlist = $(".bar-ind-list li");
	var floorlist = $(".floor .floorcon");
	console.log(floorlist,barlist);
	barlist.click( function(){
		var hei = floorlist.eq($(this).index()).offset().top - barlist.outerHeight() - 25;
		$("body,html").animate({"scrollTop":hei},1000);
	})
	 /*吸顶效果*/
	var bartop = $("#bar").offset().top;
	$(window).scroll( function(){
		var stop = $("body,html").scrollTop();
//		console.log(bartop);
		if( stop > bartop ){
			$("#bar").css({"position":"fixed","top":0,"left":0});
		}else{
			$("#bar").css({"position":"static"});
		}
		var btop = barlist.eq(0).offset().top;
		floorlist.each(function( index ,ele ){
			if( stop + window.innerHeight - $(ele).offset().top > (window.innerHeight)/2){
				barlist.eq(index).css("color","red").siblings().css("color","#666");
			}
			if( stop + window.innerHeight < btop ){
				barlist.css("color","#666");
			}
		})
	})
	
	/*楼层块下的小轮播*/
	function xlb(){
		var floorxbl = $(".floor-left-bottom-xlb");
		var timer = setInterval( function(){
			floorxbl.animate({"left":-180},500,function(){
//				console.log(this)
				$(this).css("left",0).find("li").first().appendTo($(this) );
			})
		},3000)
	}
	xlb();
	
	

})
