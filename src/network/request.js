import axios from 'axios'

export function request(config) {
  // 1、创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })


  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3、发送真正的网络请求
  return instance(config)
}

