import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { // 记录用户信息的变量。为了方便日后的扩展（权限认证等），我们使用一个用户对象而不是仅仅使用一个布尔变量
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username,
      password: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).password
      // 在项目打开的时候会判断本地存储中是否有 user 这个对象存在，如果存在就取出来并获得 username 的值，
      // 否则则把 username 设置为空。这样我们只要不清除缓存，登录的状态就会一直保存。
      // localStorage，即本地存储
    },
    orderid: ''
  },
  mutations: { // 在用户点击登录时触发,将用户的信息存入状态state.user中，并存入本地存储localStorage中
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    setorderid (state, orderid) {
      state.orderid = orderid
    }
  }
})
