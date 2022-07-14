let Mock = require("mockjs")
// /aa拦截
let arr = ["zhangsan","lisi","wangwu","zhaoliu"]
// /api/aa
Mock.mock("/api/aa","get",(options)=>{
    console.log(options)
    return arr
})
//正则
// Mock.mock(/\/api\/aa/,"get",(options)=>{
//     console.log(11,options)
//     return arr
// })

Mock.mock("/api/ab","post",(options)=>{
    console.log("第十行",options)
    return {
        status:200,
        message:"success",
        data:arr
    }
})