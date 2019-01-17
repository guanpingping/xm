$(function(){

	//登录成功后，显示用户名
	var urlstr = localStorage.getItem("loguname");
	if( urlstr ){
		$(".login-after-none").html(`<span>${urlstr}欢迎您！</span><span id="closelogin">退出登录</span>`);
	}
	$("#closelogin").click( function(){
		if( confirm("确认退出登录吗？")){
			localStorage.setItem("loguname","");
			location.reload();
		}
	})
	
	//购物车的件数
	getCount();
	//	购物车中的件数
	function getCount(){
		var count = 0;
		var brr = localStorage.getItem("prolist");
		if( brr ){
			var arr = JSON.parse( brr );
			for( var i = 0 ; i < arr.length ; i++ ){
				count += arr[i].count;
			}
		}
		$("#stopNum").html( count );
	}
	
	
	
	/*点击关闭按钮关闭广告*/
	$("#top_no_close").click( function(){
		$(this).parent().css("display","none");
	})
	
	/*让存在二级菜单的添加类top-nav-menu-hover   stop()停止当前正在运行的动画 slideDown从上到下显示某个元素*/
	$(".top-nav-menu").mouseenter(function(){
			$(this).has(".top-nav-menu-two").addClass("top-nav-menu-hover")
			.children(".top-nav-menu-two").stop().slideDown(10);
	}).mouseleave(function(){
		$(this).has(".top-nav-menu-two").children(".top-nav-menu-two").stop().slideUp(function(){
			$(this).removeClass("top-nav-menu-hover");
		}.bind(this));
	})
	
	
	/*
 	  1、鼠标移入某个导航上，跟随
 	  2、鼠标点击   固定
 	  3、鼠标离开：
 	  	没有点击   恢复原来位置
 	  	有点击      回到点击位置	   
 	*/
	/*nav滑动时换classname，筋斗云效果*/
	var navlist = $("header .nav-ind .nav-ind-list li").not(".active");
	navlist.mouseenter(function(){
		//鼠标滑过时获取li相对于定位的父元素ul的偏移量
		var le = $(this).position().left;
		//找到li中a的宽度
		var wid = $(this).children("a").width();
		//siblings除了自身以外的所有兄弟元素
		$(this).children("a").css("color","#c8391d").end().siblings().children("a").css("color","#666");
		$("header .nav-ind-list .active").stop().css({"width":wid}).animate({"left":le},300); 

	})
	
	$("header .nav-ind-list").mouseleave(function(){
		// var currentVal = getCookie("currentVal") ;
		var currentVal = sessionStorage.getItem("currentVal");
		var le = $(this).find("li:not(.last)").eq(currentVal).position().left;
		var wid = $(this).find("li:not(.last)").eq(currentVal).children("a").width();
	 	navlist.eq(currentVal).children("a").css("color","#c8391d").end().siblings().children("a").css("color","#666");
		$("header .nav-ind-list .active").stop().css({"width":wid}).animate({"left":le},300) 
	})
	//存入cookie，这样换页面也保存了点击了哪一个li
	$("header .nav-ind-list li:not(.last)").click(function(){
		// setCookie("currentVal",$(this).index())
		sessionStorage.setItem("currentVal",$(this).index());
	})
	
	
	/* 点击首页和进口奶粉切换页面 */
	 $("header .nav-ind-list .home").click(function(){
			location.href="../html/index.html";
	})
	$("header .nav-ind-list .importmlik").click(function(){
		location.href="../html/list.html";
	}) 

	/* 解决每一次跳转页面时都是下划线都是默认在首页，跳转页面时会刷新页面，导致每一次跳转时还没执行鼠标离开事件
	，所以每一次跳转之后都下划线和改变的颜色默认在首页上，在每一次页面重新渲染的时候，先从sessionStorage获取到下滑线和改变颜色的位置*/
 	var currentindex = sessionStorage.getItem("currentVal");
	var currentleft = $("header .nav-ind-list").find("li:not(.last)").eq(currentindex).position().left;
	$("header .nav-ind .nav-ind-list li").not(".active").eq(currentindex).children("a").css("color","#c8391d").end().siblings().children("a").css("color","#666");
	$("header .nav-ind .nav-ind-list .active").css("left",currentleft); 

	//选项卡有两级页面的那个
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
