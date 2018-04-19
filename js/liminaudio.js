
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
		// 监听滚动条事件
		$(window).scroll(function() {
			while($(window).width()>414){
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
			}
		});
		//手机端
		var menuOnPhone = function() {
			while($(window).width()<=414) {
				$(".menu").on("click",function() {
					$("#nav-wrap").fadeIn();
				});
				$(".menux").on("click",function() {
					$("#nav-wrap").fadeOut();
				})
			}
		};
		menuOnPhone()
		

		var hoverOnNavForPC = function() {
			while($(window).width()>414) {
				$(".nav-list").on("hover",function() {
					var curSubNav = $(this).find(".sub-nav");
					// $(".sub-nav").hide();
					curSubNav.show();
				});
			}
		}
		hoverOnNavForPC();

		$(window).on("resize",function() {
			menuOnPhone();
			hoverOnNavForPC();
		});
		
	});