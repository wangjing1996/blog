
let mysql=require('mysql')
let createconnection=function(){
   let connection= mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'root',
        database:'myblog'
    })
   return connection
}
/* 
测试连接
let name='admin';
let pwd='admin';
let sql='select * from users where user_name=? &&user_password=?';
connection.query(sql,[name,pwd],(err,rows)=>{
    if(err) throw err;
    console.log(rows)
}) */

const methods={
    select(sql,query=[]){
        let connection= createconnection();
        return new Promise((resolve,reject)=>{
            connection.query(sql,query,(err,rows)=>{
                console.log(sql)
                if(err){
                    reject({msg:'查询错误',err,status:'err'})
                }else{
                    resolve({msg:'查询成功',rows,status:'ok'})
                }
                connection.end();
            })
        })
    },
    insert(sql,query=[]){
        let connection= createconnection();
        return new Promise((resolve,reject)=>{
            connection.query(sql,(err)=>{
                if(err){
                    reject({msg:'插入失败',err,status:'err'})
                }else{
                    resolve({msg:'插入成功',status:'ok'})
                }
                connection.end();
            })
        })
    },
    updated(sql,query=[]){
        let connection= createconnection();
        return new Promise((resolve,reject)=>{
            connection.query(sql,(err)=>{
                if(err){
                    reject({msg:'更新失败',err,status:'err'})
                }else{
                    resolve({msg:'更新成功',status:'ok'})
                }
                connection.end();
            })
        })
    }
}
module.exports= methods;