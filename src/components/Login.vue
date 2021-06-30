<template>
  <body id="poster">
  <el-form  label-position="left" label-width="0px" class="login-container">
    <h3 class="login_title">系统登录</h3>
    <el-form-item >
    <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    </el-form-item>
    <br><br>
    <el-form-item >
    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" />
    </el-form-item>
    <br><br>
    <el-form-item style="width: 350px;">
      <el-select v-model="loginForm.identify" placeholder="请选择你的身份" style="width: 350px">
        <el-option label="系统管理员" value="系统管理员"></el-option>
        <el-option label="客户" value="客户"></el-option>
      </el-select>
    </el-form-item>
    <br><br>
    <el-form-item>
      <el-button style="width: 100%;background: #505857;border: none" v-on:click="login" type="primary">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        identify: '系统管理员'
      },
      responseResult: [],
      orderid: ''
    }
  },
  methods: {
    login () {
      var _this = this // 注意 因为axios里面this会失效
      console.log(this.$store.state)
      // console.log(this.loginForm.identify)
      // console.log(this.loginForm.username)
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password,
          identify: this.loginForm.identify
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/home' : path})
          } else {
            this.$message.error('账户或密码不存在')
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
// 1.点击登录按钮，向后端发送数据
// 2.受到后端返回的成功代码时，触发 store 中的 login() 方法，把 loginForm 对象传递给 store 中的 user 对象
// （*这里只是简单的实现，在后端我们可以通过用户名和密码查询数据库，获得 user 表的完整信息，比如用户昵称、用户级别等，返回前端，并传递给 user 对象，以实现更复杂的功能）
// 3.获取登录前页面的路径并跳转，如果该路径不存在，则跳转到首页

</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 150px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
#poster {
  background:url("../assets/bridgeposter.jpg") ;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: -5px;
}
</style>
