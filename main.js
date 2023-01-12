import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'

//导入网络请求的包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
// 配置请求根路径
// $http.baseUrl = 'https://www.uinav.com'
// $http.baseUrl = 'https://api-hmugo-web.itheima.net'
$http.baseUrl = 'https://api-ugo-web.itheima.net'
// $http.baseUrl = 'https://www.esinsis.tech'
// 请求拦截器
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
  // console.log(store)
  // 判断当前请求的时候为有权限的接口
  if(options.url.indexOf('/my') !== -1){
	  options.header = {
		  // 字段的值可以直接从 vuex 中进行获取
		   // Authorization: store.state.m_user.token,
		    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo'
	  }
  }
}

// 响应拦截器
$http.afterRequest = function () {
  uni.hideLoading()
}



// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
