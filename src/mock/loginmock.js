let Mock = require('mockjs')

Mock.mock("/api/login","post",(config)=>{
    console.log('mock',config.body)//string
    let body = JSON.parse(config.body)
    console.log('mock',body)
    let username = body.username
    let password = body.password
    if(username==='兔先生'&&password==="123456"){
        return{
            status:200,
            message:"success",
            data:{username,password,token:"111wwwwwwsssswwww"}
        }
    }else{
        return{
            status:501,
            message:"fail",
        }
    }
    
})

