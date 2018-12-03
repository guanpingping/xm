$( function(){
	$(".open-menu-btn").mouseenter( function(){
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
		var x = e.pageX - $(".box").offset().left- $(".mask").width()/2;
		var y = e.pageY - $(".box").offset().top - $(".mask").height()/2;
		
		$(".mask").css({
			"left":x,
			"top":y
		});
	})
})
