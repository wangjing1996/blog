var express = require('express');
var router = express.Router();
let {select,insect,updated}=require('../mysql')
/* GET users listing. */
router.post('/login', function(req, res, next) {
  
    let {user_name,user_password}=req.body;
    let user=/\w+$/;
    let pwd=/\w+$/;
    if( !user.test(user_name) || !pwd.test(user_password)){
        res.json({msg:'用户名或密码输入有误',status:'err'})
    }else{
        let sql='select * from users where user_name=?,&user_password=?'
        select(sql,[user_name,user_password]).then((rows)=>{
            
        },()=>{

        })
        res.json({msg:'登录成功',msg:'ok'})
    }
    
});

module.exports = router;
