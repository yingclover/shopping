import router from './router'
import axios from 'axios'
import store from './store'

//http全局拦截
//将token放到请求头部给后端

export default function setAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state) {
                config.headers.token = store.state.token
            }
            return config
        }
    )
    //每次有请求的返回都需要经过拦截器
    axios.interceptors.response.use(
        response => {
            if (response.status == 200) {
                const data = response.data
                if (data.code === -1) {
                    //登录过期，清空vuex和localstorage的token
                    store.commit('setToken', '')
                    localStorage.removeItem('token')
                    //跳转到login
                    router.replace({
                        path: '/login'
                    })
                }
                return data
            }
            return response
        }
    )
}