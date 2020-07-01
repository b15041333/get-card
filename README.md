### 前言

这是我实习阶段的一个作品，公司有一批流量卡需要分发出去，因此书写了一个表单用以收集用户的信息。

1. 前端使用html+css+js，使用了bootstrap中的一些样式，表单中省市区下拉框三级联动使用distpicker.js实现，表单的提交使用\<form>表单的action属性；

2. 后端使用node.js搭建，使用express.js框架；启用服务端使用nodemon server.js命令；

3. 数据库使用mysql：数据库名为card_customers，数据表名为customers_info，使用项目需要先新建对应数据库表。



### 开发过程中使用到的参考资料

1. 关于express.js

   https://www.runoob.com/nodejs/nodejs-express-framework.html

2. 表单校验

   https://www.w3school.com.cn/js/js_form_validation.asp

   https://www.w3school.com.cn/jsref/event_onsubmit.asp
   



### 注意点

1. 项目部署在本机的apache服务器上，局域网地址为192.168.0.106，运行项目需要检查本机当前分配的ip是否与此ip一致；

2. 设置图片class="card-img-top"，可以使大图适配手机屏幕;

3. 解决js对象转json对象后的中文乱码问题：

   ```
   res.setHeader('Content-Type', 'text/html; charset=utf8');
   ```