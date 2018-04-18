
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
		});
		// 获取滚动条的高度
		$(window).scroll(function() {
		var height= $(document).scrollTop();
			if(height>185) {
				$("#logo").hide();
				$("#language").hide();
				$("#nav-wrap").css({position:"fixed","border-bottom": "1px solid rgb(221, 221, 221)"});
			}else{
				$("#logo").show();
				$("#language").show();
				$("#nav-wrap").css({position:"relative",border: 0});
			}
		});
	});