var express = require('express');
var router = express.Router();
let {select,insect,updated}=require('../../mysql')


router.post('/login',(req, res, next)=>{
  res.set('Access-Control-Allow-Origin','*')
  let {user_name,user_password}=req.body;
  
  //用户名正则
  let name=/\w+$/;
  let pwd=/\w+$/;
  if(!name.test(user_name)||!pwd.test(user_password)){
    res.json({msg:'用户名或密码输入有误',status:'err'})
  }else{
    select('select user_name,user_password from users where user_name=?',[user_name]).then((info)=>{
          if(info.rows.length==0){
            res.json({msg:'该用户不存在',status:'no'})
          }else if(info.rows[0].user_password===user_password){
            res.json({msg:'登录成功',status:'ok'})
          }else{
            res.json({msg:'密码错误',status:'err'})
          }
    },(info)=>{
          res.json(info)
    })
  }
});
/* 
    HelloWorld.vue
router.get('/one', function(req, res, next) {
  res.set('Access-Control-Allow-Origin','*')
  res.send('one');
});

router.get('/two', function(req, res, next) {
  res.set('Access-Control-Allow-Origin','*')
  res.send('two');
});

router.get('/test', function(req, res, next) {
    res.set('Access-Control-Allow-Origin','*')
    res.json({ title: 'Express' });
}); 
router.post('/text', function(req, res, next) {
  let id=req.body.id
  res.set('Access-Control-Allow-Origin','*')
  res.json({ title: 'Express' ,id});
}); */
module.exports = router;

