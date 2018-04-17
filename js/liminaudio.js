
	$(document).ready(function(){
		// 轮播图
	  $('#slick').slick({
	  	dots: true,
	  });
	  // 底部分享
	  $("#share").jsSocials({
		  showLabel: false,
		  // showCount: false,
		  shares: ["email", "twitter", "facebook", "googleplus"]
		});
		// 产品详情选项卡
		$(".tab-title li").on("click",function(){
			var index =$(this).index();
			$(".tab-title li").removeClass("active")
			$(this).addClass("active");
			$(".tab-content li").removeClass("active");
			$(".tab-content li").eq(index).addClass("active");
		})
	});