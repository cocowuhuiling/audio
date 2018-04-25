/**********************************************
 * 工具函数 & 全站全局常量
 *
 */

var G_server = "https://da28facf-fd45-4a4e-9927-686e020f9a8c.mock.pstmn.io";

/**
 * 获取浏览器地址栏里传过来的参数
 * @params sParam : 参数名
 * @return 指定参数名对应的值
 *
 * eg:
 * 假设当前页面，地址栏地址为 http://xxx.com/index.html?lang=en&id=1001
 * 在当前页面执行：
 * var _lang = getUrlParameter('lang'); // 结果: _lang = en;
 * var _id = getUrlParameter('id'); // 结果: _id = 1001;
*/
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

