<template>
  <div class="sing">
      <div class="login-box">
        <h1>注册实习僧</h1>
        <div class="login_2">
            <input type="text" v-model="usernum" placeholder="请输入手机号">
            <input type="password" v-model="yzm2" placeholder="请输入4位短信验证码">
            <div class="text2" @click="dianji2">获取验证码</div>
            <input type="password" v-model="password" placeholder="请设置6--20位数字,字母,任意字符密码">
        </div>
        <div v-on:click="add" class="add">注册</div>
        <div class="http">
            <span>注册即代表同意 </span>
            <router-link to="/rule">《实习僧用户协议》</router-link>
        </div>
        <div class="go-register">
            <router-link to="/sing">立即登录</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernum: '',
      userpass: '',
      txt: ['密码登录', '验证码登录'],
      num: 0,
      current: 0,
      active: 2,
      yzm: null,
      yzm2: '',
      password: null
    }
  },
  methods: {
    add () {
      var reg1 = /^[\W\da-zA-Z_]{6,15}$/
      if (this.usernum === '' || this.usernum === null) {
        this.$toast({
          message: '请输入您的手机号',
          position: 'bottom',
          duration: 1000
        })
      } else if (this.yzm !== this.yzm2) {
        this.$toast({
          message: '请输入正确验证码',
          position: 'bottom',
          duration: 1000
        })
      } else if (this.password === '' || this.password === null) {
        this.$toast({
          message: '密码不能为空',
          position: 'bottom',
          duration: 1000
        })
      } else if (reg1.test(this.password)) {
        this.$toast.success({
          message: '注册成功',
          position: 'bottom',
          duration: 1000
        })
        this.axios.get('http://localhost:3305/demand?id=' + this.usernum).then((res) => {
          if (res.data.data.length > 0) {
            this.$toast({
              message: '账号已被注册',
              position: 'bottom',
              duration: 1000
            })
          } else {
            this.axios.get('http://localhost:3305/register?id=' + this.usernum + '&psd=' + this.password).then((res) => {
              this.yzm = null
              this.$router.push({
                path: '/sing'
              })
            })
          }
        })
      } else {
        this.$toast({
          message: '密码长度在6-15位之间！',
          position: 'bottom',
          duration: 1000
        })
      }
    },
    dianji () {
      this.$toast({
        message: '请在电脑端登录www.shixiceng.com找回密码',
        position: 'bottom',
        duration: 1000
      })
    },
    dianji2 () {
      var reg = /^[1][\d]{10}$/
      if (reg.test(this.usernum)) {
        var code = ''
        var codeLength = 4
        var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (var i = 0; i < codeLength; i++) {
          var index = Math.floor(Math.random() * 9)
          code += random[index]
        }
        this.yzm = code
        this.$toast.success({
          message: this.yzm,
          forbidClick: true
        })
      } else if (this.usernum === '' || this.usernum === null) {
        this.$toast({
          message: '手机号码不能为空',
          position: 'bottom',
          duration: 1000
        })
      } else {
        this.$toast({
          message: '手机号有误',
          position: 'bottom',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style scoped>
.http {
    color: #ccc;
    font-size: 0.26rem;
    text-align: center;
    margin-top: 0.29rem;
}
.http a{
    color: #699AFF;
}
.active{
  color: #699Aff;
}
.go-register{
    text-align: center;
    margin-top: 1.2rem;
}
.go-register a{
    text-decoration: none;
    color: #699AFF;
    font-weight: 500;
    font-size: 0.32rem;
}

.login-box .text{
    width: 100%;
    color: #699AFF;
    font-size: 0.28rem;
    text-decoration: none;
    text-align: right;
    margin-top: 0.15rem;
    display: block;
}
::-webkit-input-placeholder{
    color: #e5e5e5;
}
:-moz-placeholder{
    color: #e5e5e5;
}
.login-box .text2{
  color: #699AFF;
  font-size: 0.28rem;
  text-decoration: none;
  text-align: right;
  display: inline;
  position: absolute;
  right: 0.5rem;
  top: 3.5rem;
}
.login-box input{
    margin-top: 0.38rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1) !important;
    outline: none;
    border: 0;
    width: 100%;
    background-color: transparent;
    height: 0.8rem;
    padding: 0;
    font-size: 0.28rem;
    color: #616366;
}
.login-box .add{
    width: 100%;
    line-height: 0.95rem;
    text-align: center;
    font-size: 0.34rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 2px;
    background-color: #699AFF;
    border-radius: 0.48rem;
    margin-top: 0.9rem;
}
.login-box{
    margin-top: 1rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
}
.login-box h1{
    color: #000;
    font-size: 0.5rem;
    font-weight: 500;
}
.sing{
    position: absolute;
    top: 0;
    bottom: 0;
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/w-reg-bg.png) no-repeat;
    background-size: 100%;
}
</style>
