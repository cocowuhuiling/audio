
// 首页轮播图

var homeslick =	function() {
	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/main/albums?lang=en",
		success: function(response) {
      /*
      $("#slick").empty();
			$.each(response.result.albums,function(index,content) {
				var imgStr = "<img src="+content+">";
				$("#slick").append(imgStr);
			});

			// 轮播图
		  $('#slick').slick({
		  	dots: true,
		  });

      */
      //$('#slick').slick('unslick');
      var _imgArray = response.result.albums;
      _imgArray.forEach(function(elm,index){
        $('#slick').slick('slickRemove',0);
        $('#slick').slick('slickAdd',"<img src="+elm+">");
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
			$.each(response.result.evaluates,function(index,content) {
				var element = '<li><p class="eva-con">' +content.evaluate+ '</p><p class="author clearfix">'+"--"+content.company+content.reviewer+'</p></li>';
				$(".evaluate").append(element);
			});
		}
	})
}

homeslick();
homeProduct();
homeEvaluate();


// 产品二级目录
var productSubNav = function(argument) {

	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/category/list?lang=en",
		success: function(response) {
			$("#product-nav").empty();
			$.each(response.result.categories,function(index,content) {
				var element = '<li><a href="">'+content.name+'</a></li>';
				$("#product-nav").append(element);
			});


			$("#loading").hide();
		},
	});
}
// 品牌二级目录
var brandSubNav = function(argument) {

	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/brands/list?lang=en",
		success: function(response) {
			$("#brand-nav").empty();
			$.each(response.result.brands,function(index,content) {
				var element = '<li><a href="">'+content.name+'</a></li>';
				$("#brand-nav").append(element);
			});


			$("#loading").hide();
		},
	});
}
// 服务二级目录
var serviceSubNav = function() {
	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/service/list?lang=en",
		success: function(response) {
			$("#service-nav").empty();
			$.each(response.result.services,function(index,content) {
				var element = '<li><a href="">'+content.name+'</a></li>';
				$("#service-nav").append(element);
			});


			$("#loading").hide();
		},
	});
}

productSubNav();
brandSubNav();
serviceSubNav();

var aboutPage = function() {
	$.ajax({
		dataType: "json",
		url:"https://2be1dd65-2f85-4018-a17c-784b9bd4693a.mock.pstmn.io/aboutus?lang=en",
		success: function(response) {
			$.each(response.result,function(index,content) {
				console.log("test");
				$(".about").text(content.description);
				$(".tel").text(content.phone);
				$(".email").text(content.email);
			});
			$("#loading").hide();
		},
	});
}
aboutPage();

