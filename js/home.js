
// 首页轮播图
var G_server = "https://bcbb165f-864a-47a4-9487-964633ee5813.mock.pstmn.io";
var homeslick =	function() {
	$.ajax({
		dataType: "json",
		url:G_server+"/main/albums?lang=en",
		success: function(response) {
      var _imgArray = response.result.albums;
      console.log(response.result)
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
		url:G_server+"/main/tops?lang=en",
		success: function(response) {

			$("#welcome h1").text(response.result.info.title);
			$("#welcome p").text(response.result.info.desc);
			$("#home-product").empty();
			$.each(response.result.info.products,function(index,content) {
				var element = '<li><a href=""><img src=' +content.imgUrl+ '></a><h2>'+content.title+'</li>';
				$("#home-product").append(element);
			});
		},
	});
}
// 首页评价
var homeEvaluate = function() {
	$.ajax({
		dataType: "json",
		url:G_server+"/main/evaluates?lang=en",
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
		url:G_server+"/category/list?lang=en",
		success: function(response) {

			$("#product-nav").empty();
			$.each(response.result.categories,function(index,content) {
				var subUrl = G_server+"/category/list?lang=en&"+"id="+content.id;
				var element = '<li><a href="'+subUrl+'">'+content.name+'</a></li>';
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
		url:G_server+"/brands/list?lang=en",
		success: function(response) {
			$("#brand-nav").empty();
			$.each(response.result.brands,function(index,content) {
				var subUrl = G_server+"/brands/list?lang=en&"+"id="+content.id;
				var element = '<li><a href="'+subUrl+'">'+content.name+'</a></li>';
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
		url:G_server+"/service/list?lang=en",
		success: function(response) {
			$("#service-nav").empty();
			$.each(response.result.services,function(index,content) {
				var subUrl = G_server+"/service/list?lang=en&"+"id="+content.id;
				var element = '<li><a href="'+subUrl+'">'+content.name+'</a></li>';
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
		url:G_server+"/aboutus?lang=en",
		success: function(response) {

				console.log(response);
				$(".about").text(response.result.description);
				$(".tel").text(response.result.phone);
				$(".email").text(response.result.email);
		},
	});
}
aboutPage();

$("#loading").hide();