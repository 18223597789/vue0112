import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 这里代表引入vuex实例
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8550/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

/* router.beforeEach((to, from, next) => { // 钩子函数。这里我们使用 router.beforeEach()，意思是在访问每一个路由前调用。
  // 这个的逻辑很简单，首先判断访问的路径是否需要登录，
  if (to.meta.requireAuth) {
    if (store.state.user.username) { // 如果需要，判断 store 里有没有存储 user 的信息，如果存在，则放行
      next()
    } else { // 否则跳转到登录页面，并存储访问的页面路径（以便在登录后跳转到访问页）。
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store, // 注意这里
  components: { App },
  template: '<App/>'
})
