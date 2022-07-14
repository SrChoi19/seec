let Mock = require('mockjs')
// 第一个接口
let arr = ['1','2','3','4']

Mock.mock("/api/aa","get",(options)=>{
    return arr
})
// 正则
Mock.mock(/\/api\/acd/,"get",(options)=>{
    return arr
})
Mock.mock("/api/asb","post",(options)=>{
    return {
        status:200,
        message:"success",
        data:arr
    }
})
