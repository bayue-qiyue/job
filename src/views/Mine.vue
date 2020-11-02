<template>
  <div class="mine">
    <div class="header">
      <div class="img">
        <img src="https://sxsimg.xiaoyuanzhao.com/static/img/default/default_headpic.png" alt="">
      </div>
      <p class="dedail">当世界给草籽重压时，它总会用自己的方法破土而出</p>
    </div>
    <div class="list">
        <ul>
            <li>
                <router-link to="/mine">
                    <i class="item-1 a"></i><span>我的投递</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <i class="item-2 a"></i><span>我的收藏</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <i class="item-3 a"></i><span>我的简历</span>
                </router-link>
            </li>
        </ul>
        <div class="sz">
            <div class="b" @click="out">
                <i class="item-4 a"></i><span>退出账号</span>
            </div>
        </div>
    </div>
    <demo></demo>
  </div>
</template>

<script>
import Demo from '@/components/Demo.vue'
export default {
  components: {
    demo: Demo
  },
  methods: {
    out () {
      this.$dialog.confirm({
        message: '确认退出当前帐号'
      }).then(() => {
        localStorage.removeItem('usernum')
        this.$router.push({
          path: '/'
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
.b{
    padding: 0.25rem;
    font-size: 0.32rem;
    border-bottom: solid 1px #eaeaea;
}
.sz{
    margin-top: 0.3rem;
    background-color: #fff;
}
.sz a{
    padding: 0.25rem;
    font-size: 0.32rem;
    color: #333;
    border-bottom: solid 1px #eaeaea;
    text-decoration: none;
    display: block;
}
.list{
    padding-bottom: 1.5rem;
}
.list ul{
    list-style: none;
    margin-top: 0.3rem;
    background-color: #fff;
}
.list li{
    padding: 0.25rem;
    font-size: 0.32rem;
    border-bottom: solid 1px #eaeaea;
}
.a{
    margin-right: 0.2rem;
    display: inline-block;
    width: 0.4rem;
    height: 0.45rem;
    vertical-align: sub;
}
.item-1{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -0.92rem 0.01rem;
    background-size: 2.2rem;
}
.item-2{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -1.35rem 0.01rem;
    background-size: 2.2rem;
}
.item-3{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -0.02rem 0.01rem;
    background-size: 2.2rem;
}
.item-4{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -1.8rem 0.01rem;
    background-size: 2.2rem;
}
.list a{
    color: #333;
    text-decoration: none;
    display: block;
}
.header{
    width: 100%;
    height: 2.08rem;
    padding: 0 0.3rem 0 0.3rem;
    box-sizing: border-box;
    background: #fff;
}
.header .img{
    position: absolute;
    bottom: -0.54rem;
    left: 0.3rem;
    top: 0.34rem;
    width: 1.40rem;
    height: 1.40rem;
}
.header img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.header .dedail{
    font-size: 0.26rem;
    color: #95a0a8;
    position: relative;
    top: 35%;
    padding-left: 1.8rem;
}
</style>
