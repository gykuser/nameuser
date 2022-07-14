let Mock = require("mockjs")
// /aa拦截
let arr = ["1","2","3","4"]
// /api/aa
Mock.mock("/api/acd","get",(options)=>{
    console.log(options)
    return arr
})
//正则
// Mock.mock(/\/api\/aa/,"get",(options)=>{
//     console.log(11,options)
//     return arr
// })

Mock.mock("/api/asd","post",(options)=>{
    console.log("第十行",options)
    return {
        status:200,
        message:"success",
        data:arr
    }
})