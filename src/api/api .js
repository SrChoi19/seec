// 用来统一管理我们的开发接口 api
import axios from 'axios'
let instance = axios.create({
    baseURL:"/api",//基准地址
    timeout:5000
})
// 请求相应拦截
instance.interceptors.request.use((config)=>{
    // 请求拦截
    // config.headers.token="wwwwwwwwwwwww"
    return config
})
instance.interceptors.response.use(response => {
    // response 是后台放回的相应数据
    return response
})

export default instance