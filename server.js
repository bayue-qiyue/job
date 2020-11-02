const express = require('express')
const app = express()
const port = 3305
const mysql = require('mysql')
app.all("/*", function(req, res, next) {
  // 跨域处理
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next()
})
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'cnode'
})
connection.connect();
app.get('/index', (req, res) => {
  connection.query('select * from job',function(err,result){
    const obj={
      status:200,
      data:result
    }
    res.json(obj)
  })
}),
app.get('/index1', (req, res) => {
  connection.query("select * from job where money like '"+req.query.li+"%'",function(err,result){
    const obj={
      status:200,
      data:result
    }
    res.json(obj)
  })
}),
app.get('/index2', (req, res) => {
  connection.query("select * from job where li like +'%"+req.query.li+"%'",function(err,result){
    const obj={
      status:200,
      data:result
    }
    res.json(obj)
  })
}),
app.get('/index3', (req, res) => {
  connection.query("select * from job where title like +'%"+req.query.li+"%'",function(err,result){
    const obj={
      status:200,
      data:result
    }
    res.json(obj)
  })
}),
// 详情页
app.get('/detail', (req, res) => {
  connection.query('select * from job where id='+req.query.id,function(err,result){
    const obj={
      status:200,
      data:result
    }
    res.json(obj)
  })
}),
// 注册
app.get('/register', (req, res) => {
  connection.query('insert into sing(register,num) values("'+req.query.id+'","'+req.query.psd+'");',function(err,result){
    const obj={
      status:200,
      data:result
    }
    res.json(obj)
  })
}),
// 查询
app.get('/demand', (req, res) => {
  connection.query(`select * from sing where register=${req.query.id};`, function (err, result) {
      const obj={
          status: 200,
          data: result
      }
      res.json(obj)
  })
});
app.get('/demand2', (req, res) => {
  connection.query(`select * from sing where num=${req.query.num}`, function (err, result) {
      const obj={
          status: 200,
          data: result
      }
      res.json(obj)
  })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))