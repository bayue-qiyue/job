<template>
  <div class="sing">
      <div class="login-box">
        <h1>登录实习僧</h1>
        <van-tabs v-model="active" background="transparent" color="#699AFF" title-active-color="#699AFF" title-inactive-color="#595959" line-width="1rem" line-height="0.05rem">
          <van-tab title="密码登录">
            <div class="login_1">
              <input type="text" v-model="usernum2" placeholder="请输入手机号/邮箱">
              <input type="password" v-model="password" placeholder="请输入密码">
              <div class="text" @click="dianji">忘记密码?</div>
            </div>
            <div v-on:click="add" class="add">登录</div>
          </van-tab>
          <van-tab title="验证码登录">
            <div class="login_2">
              <input type="text" v-model="usernum" placeholder="请输入手机号">
              <input type="text" v-model="yzm2" placeholder="请输入手机验证码">
              <div class="text2" @click="dianji2">获取验证码</div>
            </div>
            <div v-on:click="add2" class="add">登录</div>
          </van-tab>
        </van-tabs>
        <div class="other-login">
          <div class="other-login-logo wechat"></div>
          <div class="other-login-logo qq"></div>
          <div class="other-login-logo weibo"></div>
        </div>
        <div class="go-register">
            <router-link to="/register">立即注册</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernum: '',
      password: '',
      txt: ['密码登录', '验证码登录'],
      num: 0,
      current: 0,
      active: 2,
      yzm: null,
      yzm2: '',
      usernum2: ''
    }
  },
  methods: {
    add () {
      if (this.usernum2 === '' || this.usernum2 === null) {
        this.$toast({
          message: '请输入手机号',
          duration: 1000
        })
      } else {
        this.axios.get('http://localhost:3305/demand?id=' + this.usernum2).then((res) => {
          if (this.password === '' || this.password === null) {
            this.$toast({
              message: '请输入密码',
              position: 'bottom',
              duration: 1000
            })
          } else if (res.data.data.length > 0) {
            if (res.data.data[0].num === this.password) {
              this.$toast.success({
                message: '登录成功',
                duration: 1000
              })
              localStorage.setItem('usernum', this.usernum2)
              if (localStorage.getItem('usernum')) {
                this.$router.push(this.$route.query.returnUrl)
              }
            } else {
              this.$toast.fail({
                message: '密码错误',
                duration: 1000
              })
              console.log(res.data.data[0].num, this.password)
            }
          } else {
            this.$toast.fail({
              message: '账号不存在',
              duration: 1000
            })
          }
        })
      }
    },
    add2 () {
      this.axios.get('http://localhost:3305/demand?id=' + this.usernum).then((res) => {
        if (res.data.data.length > 0) {
          this.$toast.success({
            message: '登录成功',
            duration: 1000
          })
          localStorage.setItem('usernum', this.usernum)
          if (localStorage.getItem('usernum')) {
            this.$router.push(this.$route.query.returnUrl)
          }
        } else {
          this.$toast.fail({
            message: '账号不存在',
            duration: 1000
          })
        }
      })
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
.van-tabs__wrap{
  border-bottom: 1px solid rgba(0, 0, 0, .1) !important;
}
.login_2{
  margin-bottom: 2.04rem;
}
.active{
  color: #699Aff;
}
.go-register{
    text-align: center;
    margin-top: 0.6rem;
}
.go-register a{
    text-decoration: none;
    color: #699AFF;
    font-weight: 500;
    font-size: 0.32rem;
}
.other-login-logo{
    width: 0.6rem;
    height: 0.6rem;
    background: center/contain no-repeat;
    cursor: pointer;
}
.wechat{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-wx.png);
    background-size: 100%;
}
.qq{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-qq.png);
    background-size: 100%;
}
.weibo{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-weibo.png);
    background-size: 100%;
}
.other-login{
    display: flex;
    justify-content: space-around;
    padding: 0 0.3rem;
    margin-top: 0.6rem;
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
  right: 0rem;
  top: 2.7rem;
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
    margin-top: 1.5rem;
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
    margin-bottom: 0.5rem;
}
.sing{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/w-login-bg.png) no-repeat;
    background-size: 100%;
}
</style>
