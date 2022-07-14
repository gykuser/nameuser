// 统一管理api
import axios from 'axios'
let instance =axios.create({
    baseURL:"/api", //基准地址
    timeout:5000
})
// 请求响应拦截
instance.interceptors.request.use((config)=>{
    // 请求拦截
    console.log(config)
    
    return config
})
instance.interceptors.response.use(response=>{
    // 后台返回的数据
    return response
})
export default instance
