import axios from 'axios'
// import Cookies from 'js-cookie'

// create an axios instance
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.state === 105) {
      location.reload()
    }
    return response
  },
  error => {
    if (error.response.status === 404) {
      alert('请求地址出错')
    } else {
      alert(error.message)
    }
    return Promise.reject(error)
  }
)
export default service