$(function () {
    //点击'去注册账号'的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    //点击'去登录'的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //通过layui 来自定义一个校验
    var from = layui.from
    //使用layui中的msg 的提示信息
    var layer = layui.layer
    //这个函数form.verify()来表示
    form.verify({
        //定义一个叫做pwd的校验规则       
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ]
    })

    //监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        var data = {
            username: $('#form_reg[name=username]').val(),
            password: $('#form_reg[name=password]').val()
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            Layer.msg('注册用户成功！')
        })
    })
})