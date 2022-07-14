let Mock = require('mockjs')
// 第一个接口
let arr = ['张三','里斯','wangwu','赵六']

Mock.mock("/api/aa","get",(options)=>{
    return arr
})
// 正则
Mock.mock(/\/api\/aa/,"get",(options)=>{
    return arr
})
Mock.mock("/api/ab","post",(options)=>{
    return {
        status:200,
        message:"success",
        data:arr
    }
})
