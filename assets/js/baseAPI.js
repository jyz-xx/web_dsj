$.ajaxPrefilter(function (option) {
    //在ajax请求之前  统一拼接请求的根路径
    option.url = 'http://www.ajax.frontend.itheima.net' + options.url;
})