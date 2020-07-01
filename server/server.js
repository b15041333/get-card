var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql')

var hostUrl = "http://192.168.0.106"
// var hostUrl = "http://192.168.1.104"

// 连接数据库
var mysql = require('mysql')
var connection = mysql.createConnection({
    // host:'192.168.0.106',
    host:'localhost',// server.js是后端，数据库环境是本机，故可以用localhost
    user:'root',
    password:'root',
    database:'card_customers'
})

connection.connect();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.post('/api-user-info', urlencodedParser, (req, res)=>{
    // 输出JSON格式
    var response = {
        "cust_name":req.body.cust_name,
        "id_num":req.body.id_num,
        "tel_num":req.body.tel_num,
        "province":req.body.pvc,
        "city":req.body.ct,
        "district":req.body.dst,
        "detailed_address":req.body.dtl_address
    }
    // 在控制台黑窗中打印
    console.log(response)

    // 写入数据库表
    // 向数据库表中插入新元祖
    var table_name = 'customers_info'
    var addSql = 'INSERT INTO ' + table_name + '(cust_name,id_num,tel_num,province,city,district,detailed_address)  VALUES(?,?,?,?,?,?,?)'
    var addSqlParams = [response.cust_name,response.id_num,response.tel_num,response.province,response.city,response.district,response.detailed_address]
    connection.query(addSql,addSqlParams,(err, result) => {
        if(err){
            console.log('插入失败 - ', err.message)
            return;
        }
        console.log('--------------------------INSERT----------------------------')
        console.log('INSERT ID:', result)
        console.log('-----------------------------------------------------------------\n\n'); 
    })
    

    // 将js对象转换为json对象并渲染至页面
    // res.setHeader('Content-Type', 'text/html; charset=utf8');// 解决中文乱码问题 
    res.redirect(hostUrl + '/get-card/client/success.html') // 提交成功后跳转到提示页
    // res.end(JSON.stringify(response))
})

// 关闭连接
// connection.end()

var server = app.listen(8081, ()=>{
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s",host,port)
})