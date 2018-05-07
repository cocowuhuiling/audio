var G_server = "https://da28facf-fd45-4a4e-9927-686e020f9a8c.mock.pstmn.io";
var homeslick =	function() {
	$.ajax({
		dataType: "json",
		url:G_server+"/main/albums?lang=en",
		async:true,
		success: function(response) {
      var _imgArray = response.result.albums;
      $.each(_imgArray,function(index,content) {
      	var slickImageUrl = G_server+"/main/albums?lang=en&"+"id="+content.id;
      	// $('#slick').slick('slickRemove',0);
        $('#slick').slick('slickAdd',"<a href="+slickImageUrl+"><img src="+content.imgUrl+"></a>");
      });
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
				var homeProductUrl = G_server+"/main/tops?lang=en&"+"id="+content.id;
				var element = '<li><a href='+homeProductUrl+'><img src=' +content.imgUrl+ '></a><h2>'+content.title+'</li>';
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


// 菜单
var getNavData = function(argument) {

	$.ajax({
		dataType: "json",
		url:G_server+"/menu/list?lang=en",
		success: function(response) {
			// 一级目录
			$.each(response.result,function(index,content) {
				$.each($(".nav-list"),function(index,content) {
						$(".nav-list").text(content.name);
				});
			});
			// 二级目录
			$("#product-nav").empty();
			$("#brand-nav").empty();
			$("#service-nav").empty();
			
			$.each(response.result.product.sub,function(index,content) {
        var subUrl = "/product.html?lang=en&"+"id="+content.id;
				var element = '<li><a href="'+subUrl+'">'+content.name+'</a></li>';
				$("#product-nav").append(element);
			});
			$.each(response.result.brands.sub,function(index,content) {
        var subUrl = "/brand.html?lang=en&"+"id="+content.id;
				var element = '<li><a href="'+subUrl+'">'+content.name+'</a></li>';
				$("#brand-nav").append(element);
			});
				$.each(response.result.services.sub,function(index,content) {
				var subUrl = "/service.html?lang=en&"+"id="+content.id;
				var element = '<li><a href="'+subUrl+'">'+content.name+'</a></li>';
				$("#service-nav").append(element);
			});
		},
	});
}

var aboutPage = function() {
	$.ajax({
		dataType: "json",
		url:G_server+"/aboutus?lang=en",
		success: function(response) {
				$(".about").text(response.result.description);
				$(".tel").text(response.result.phone);
				$(".email").text(response.result.email);
		},
	});
}

var allProducts = function() {
	$.ajax({
		dataType: "json",
		url:G_server+"/product/byCategory?lang=en&cid=1&psize=5&pindex=1",
		success: function(response) {
					$("#product-list").empty();

				$.each(response.result.products,function(index,content) {
					var proDetailUrl = G_server+"/product/byCategory?lang=en&cid=1&psize=5&pindex=1&"+"id="+content.id;
					var element = "<li><a href="+proDetailUrl+"><img src="+content.imgUrl+"></a><h2>"+content.name+"</h2></li>";
					$("#product-list").append(element);
				})
		},
	})
}


homeslick();
homeProduct();
homeEvaluate();
getNavData();
aboutPage();
// allProducts();