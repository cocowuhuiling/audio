
	$(document).ready(function(){
		// 轮播图
	  $('#slick').slick({
	  	dots: true,
	  });
	  // 底部分享
	  $("#share").jsSocials({
		  showLabel: false,
		  // showCount: false,
      // 上线之后再调用facebook share
      /**
       * Face book share 要求被分享网页必须公网可访问
       * 网页应该添加必要的og tag，参考
       * https://developers.facebook.com/docs/sharing/webmasters#markup
      */
      shares: ["email", "twitter",/* "facebook",*/ "googleplus"]
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
			if($(window).width()>414){
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
			if($(window).width()<=414) {
				$(".menu").on("click",function() {
					$("#nav-wrap").fadeIn();
				});
				$(".menux").on("click",function() {
					$("#nav-wrap").fadeOut();
				});
			}
		};

		var subNavOnPhone = function() {
			$(".nav-list .arrow").on("click",function(event) {
				event.stopPropagation();
				event.preventDefault();
				var subNav =$(this).parent().find(".sub-nav");
				var subShow = $(this).parent().find(".sub-nav").hasClass("sub-show");
				console.log(subShow);
				if(subShow) {
					subNav.removeClass("sub-show");
				}else {
					subNav.addClass("sub-show");
				}
				
			});
		};

		menuOnPhone();
		subNavOnPhone();

		$(window).on("resize",function() {
			menuOnPhone();
		});
		
	});
