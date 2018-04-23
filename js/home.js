
// 首页轮播图

var homeslick =	function() {
	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/main/albums?lang=en",
		success: function(response) {
			$("#slick").empty();
			$.each(response.result.albums,function(index,content) {
				var imgStr = "<img src="+content+">";
				$("#slick").append(imgStr);
			});

			// 轮播图
		  $('#slick').slick({
		  	dots: true,
		  });

			
			$("#loading").hide();
		},
	});
}		


// 首页推荐接口

var homeProduct = function() {			
	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/main/tops?lang=en",
		success: function(response) {

			$("#welcome h1").text(response.result.info.title);
			$("#welcome p").text(response.result.info.desc);
			$("#home-product").empty();
			$.each(response.result.info.products,function(index,content) {
				var element = '<li><a href=""><img src=' +content.imgUrl+ '></a><h2>'+content.title+'</li>';
				$("#home-product").append(element);
			});
			$("#loading").hide();
		},
	});
}
// 首页评价
var homeEvaluate = function() {
	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/main/evaluates?lang=en",
		success: function(response) {
			$(".evaluate").empty();
			console.log(response.result.evaluates);
			$.each(response.result.evaluates,function(index,content) {
				var element = '<li><p class="eva-con">' +content.evaluate+ '</p><p class="author clearfix">'+"--"+content.company+content.reviewer+'</p></li>';
				$(".evaluate").append(element);
			});
		}
	})
}



// homeslick();
homeProduct();
homeEvaluate();