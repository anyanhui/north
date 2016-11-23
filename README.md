# north
##一、开发环境
    1、必须安装node，
    2、必须安装grunt
    3、必须安装git
##二、目录
    /pages
        存放静态文件
    /public_dev
        存放静态资源
        images
            存放图片
        css
            存放css文件
        js
            存放js文件
            lib
                存放js库文件
##三、开发步骤
    头部和底部已经统一引用，新文件不需要再次引用；使用了swig模版引擎来渲染文件
    1、安装需要的包
        npm install
    2、在pages里面新建文件 
        eg:demo.html
        {% extends 'layout.html' %}
        {% block content %}
            <p>This is just an awesome page.</p>
        {% endblock %}
        在{% block content %}{% endblock %}中写自己的html代码
    3、新加css文件引入
        在layout.html中添加
##四、调试
    1、在控制台中，进入开发根目录，执行grunt
    2、浏览器打开生成在www目录下相应的文件即可
##五、提示
    修改css或者js不用重新执行grunt，只有修改html文件才执行grunt
    
    
