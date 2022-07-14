let Mock = require('mockjs')
let dayjs = require("dayjs")
// dayjs(new Date(this.form.date)).format("YYYY-MM-DD")
// 第一个接口
let arr = [
    {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "张三",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "李四",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王五",
        address: "上海市普陀区金沙江路 1516 弄",
      },
]
// 请求
Mock.mock("/api/all","get",(options)=>{
    return {
        status:200,
        message:"success",
        tabledata:arr
    }
})
// 增加
Mock.mock("/api/add","post",(options)=>{
    console.log(36,options)
    let body = JSON.parse(options.body)
    body.date = dayjs(new Date(body.date)).format("YYYY-MM-DD")
    arr.push(body)
    let {date,name,address} = body
    return {
        status:200,
        message:"success",
        data:arr
    }
})
// 删除
Mock.mock(/\/api\/delete\?index=\d/,"delete",(options)=>{
    let url = options.url
    let index = url.split("=")[1]
    let newarr = arr.splice(index,1)
    console.log("删除后的",arr)
    console.log(index)
    return {
        status:200,
        message:"删除成功",
        data:arr
    }
})
// 修改
Mock.mock("/api/update","put",(options)=>{
    let body = JSON.parse(options.body)
    let {date,name,address,index} = body
    arr[index].date = date
    arr[index].name = name
    arr[index].address = address
    return {
        status:200,
        message:"success",
        data:arr
    }
})
