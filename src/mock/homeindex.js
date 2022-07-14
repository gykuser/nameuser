let Mock = require('mockjs')
// 第一个接口
let arr = [
    {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "张小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "李小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "赵小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
]
// 请求
Mock.mock("/api/all","get",(options)=>{
    console.log(options) 
    return {
        status:200,
        message:"success",
        tabledata:arr
    }
})
// 增加
Mock.mock("/api/add","post",(options)=>{
    console.log(options)
    return {
        status:200,
        message:"success",
        data:arr
    }
})
// 删除
Mock.mock(/\/api\/delete\?index=\d/,"delete",(options)=>{
    console.log(45,options) 
    let url = options.url
    let index = url.split("=")[1]
    console.log(index)
    let newarr = arr.splice(index,1)
    console.log(arr)
    return {
        status:200,
        message:"success",
        data:arr
    }
})
// 修改
Mock.mock("/api/update","put",(options)=>{
    console.log('about'+10,options) 
    return {
        status:200,
        message:"success",
        data:arr
    }
})
// Mock.mock("/api/asb","post",(options)=>{
//     console.log('about'+10,options) //(url:"/api/aa",type:"get",body:mull)
//     return {
//         status:200,
//         message:"success",
//         data:arr
//     }
// })
