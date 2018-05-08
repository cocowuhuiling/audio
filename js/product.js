/**
 * 规范，全局变量，变量名前加大写字母加_
*/
var F_loadProductFinished = false;  // 控制loading显示

$(document).ready(function(){
  /*
   * 主流程，这里开始写业务代码，这里的代码越少越好，只描述每一步做什么事情, 所有步骤要求一行做完
   * 1. 逻辑清晰，主流程不应该写注释，函数命名应该做到不注释也清楚每一步做了什么事情
   * 2. 屏蔽细节，只关心抽象做了什么事情，不关心具体怎么做
   * 3. 方便debug，出现问题，只需要逐行注释观察结果，快速定位问题
   * 4. 规范，凡是局部变量，变量名前加下划线_
   */

  var _lang = getUrlParameter('lang');
  var _cid = getUrlParameter('id');

  getProducts(_lang,_cid,renderProductList,renderPage);

  // TODO: 页面加载完成后，需要处理其他逻辑，从这里继续写下去...

});

/**************** Functions ********************
 ***********************************************
 [仅用于当前页面的业务逻辑， 比如整合一个请求 ，
 或者渲染某个组件等， 工具函数不应出现在这里，应
 该写在Helpers下面]
 ***********************************************
*/

/**
 * 渲染分页组件
 *
 * @params page 分页数据
*/
var renderPage = function(page){
  // TODO:
}

/**
 * 该函数负责渲染产品列表
 *
 * @params list 产品列表数据数组
*/
var renderProductList = function(productList){
  $('#product-list').empty();
  var _listNode = productList.map(renderProduct).join('');
  $('#product-list').append(_listNode);
}

/**
 * 该函数渲染每个具体的产品
 *
 * @params product 产品数据
*/
var renderProduct = function(product){
    var _productNode = '';
    _productNode += '<li>';
    _productNode += '<img src="' + product.imgUrl + '" />';
    _productNode += '<h2>' + product.name + '</h2>';
    _productNode += '</li>';
    return _productNode;
}

/**
 * 该函数负责请求产品列表接口，并返回结果
 * 不关心后续的渲染逻辑，渲染由传入的渲染参数render决定,
 * 如后续需要扩展渲染逻辑，请添加渲染参数
 *
 * @params lang 中英文
 * @params cid 产品分类id
 * @params renderList 处理列表渲染的函数，在请求成功后才执行
 * @params renderPage 处理分页组件渲染的函数，在请求成功后才执行
*/
var getProducts = function(lang,cid,renderList,renderPage){

  // 请求参数
  var _params = {
    lang: lang,
    cid: cid,
    psize: 10,
    pindex: 1
  };

  request('/product/byCategory',_params,function(result){
    // 请求结果返回处理，写这里
    renderList(result.products);
    renderPage(result.page);
  });

}

/**************** Helpers **********************
 ***********************************************
  [通用的，工具类的逻辑写这里，如果某些Helper
  函数全站可复用，后期请移到tool.js里]
 ***********************************************
*/

/**
 * 网络请求
 * @params api 请求API
 * @params params 请求参数
 * @params success 成功回调
 * @params flags loading控制标识
 *
 * eg: 请求产品列表
 *
 * request('/product/byCategory',{
 *  xxx:'yyy',
 *  xxx2: 'yyy2',
 *  ...
 * },function(result){
 *  // 在这里处理成功的回调,result 是返回的结果
 * },F_loadProductFinished);
 *
*/
var request = function(api,params,success,flag){
  shouldShowLoading(flag)

	$.ajax({
		dataType: "json",
		url:G_server+api,
    params: params,
		async:true,
		success: function(response) {
      success(response.result);
      shouldHideLoading();
		},
	});
}

/**
 * 显示Loading
 *
 * @params 控制loading的标识
*/
var shouldShowLoading = function(flag){
  window[flag] =  false;
  $("#loading").show();
}

/**
 * 隐藏Loading, 根据实际情况，补充if里的判断条件
 *
 * eg:
 * if(控制变量1 & 控制变量2 & ...)
*/
var shouldHideLoading = function(){
  if (F_loadProductFinished)return; // 有多少loaing 控制就写多少在判断条件里
  $("#loading").hide();
}

