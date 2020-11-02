<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://sxsimg.xiaoyuanzhao.com/adservice/image/20200728140628vevUFrMMtJdYVK3kp2.30-7.1，运营部-王克瑄.png" alt=""></div>
        <div class="swiper-slide"><img src="https://sxsimg.xiaoyuanzhao.com/adservice/image/20201009180635E6dDKmsMJjJRJrCgVi.png" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 2 -->
    <ul class="tab-bar">
      <li class="tab_1">
        <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon1.png?v=003490370e820aa04da4456274752651" alt="">
        <span>短期实习</span>
      </li>
      <li class="tab_2">
        <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon2.png?v=c8d8540ecd03c8612fbd345253f7158a" alt="">
        <span>一周两天</span>
      </li>
      <li class="tab_3">
        <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon3.png?v=0c3f223e76f64e5ec4796609890f587a" alt="">
        <span>转正机会</span>
      </li>
      <li class="tab_4">
        <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon4.png?v=80621aa6ef0a03e91a9c25f331f6f26b" alt="">
        <span>日薪200</span>
      </li>
    </ul>
    <!-- 3 -->
    <div class="list-box">
      <ul>
        <li v-for="(list,index) in lists" :key="index">
          <router-link :to="'/index?id='+list.id">
            <img :src=list.img alt="">
            <div class="f-l">
              <p class="f-l-title">{{list.title}}</p>
              <p class="f-l-detali">{{list.detial}}</p>
              <p><span class="f-l-city">{{list.city}}</span><span class="f-l-month">{{list.month}}</span></p>
            </div>
            <div class="f-l-time">
              <p>{{list.time}}</p>
              <p class="f-l-money">￥{{list.money}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 4 -->
    <router-link id="text" to="/about">前往职位列表，查看更多职位</router-link>
    <div class="about">关于我们</div>
    <demo></demo>
  </div>
</template>

<script>
import Demo from '@/components/Demo.vue'
import Swiper from 'swiper'
export default {
  components: {
    demo: Demo
  },
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      autoplay: 1000,
      autoplayDisableOnInteraction: false,
      loop: true,
      pagination: '.swiper-pagination'
    })
    this.axios.get('http://localhost:3305/index').then(res => {
      this.lists = res.data.data
    })
  }
}
</script>

<style scoped>
  .f-l-time{
    float: right;
    font-size: 0.24rem;
    color: #d2dbef;
    text-align: right;
  }
  .f-l-money{
    margin-top: 0.43rem;
    font-size: 0.28rem;
    color: #f96969;
    font-weight: bold;
  }
  .f-l-city{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/address.png?v=11cc9c3…) no-repeat 0 0.05rem;
    background-size: 0.2rem;
    padding-left: 0.3rem;
  }
  .f-l-month{
    background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/time.png?v=a78e280…) no-repeat 1rem 0.07rem;
    background-size: 0.2rem;
    padding-left: 1.3rem;
  }
  .f-l{
    display: inline-block;
    margin-left: 0.2rem;
    color: #bdc9da;
  }
  .f-l p{
    line-height: 0.45rem;
  }
  .f-l-title{
    font-size: 0.32rem;
    color: #5a647a;
    width: 2.35rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .f-l-detali{
    font-size: 0.25rem;
  }
  .about{
    margin: 0.4rem 0 2rem;
    color: #bdc9da;
    text-align: center;
  }
  #text{
    text-align: center;
    color: #54b2ff;
    background-color: #fff;
    display: inline-block;
    margin-top: 0.4rem;
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    text-decoration: none;
  }
  .swiper-wrapper img{
    width: 100%;
  }
  .swiper-container{
    --swiper-pagination-color: #fff;
  }
  .tab-bar{
    height: 1.74rem;
    padding-top: 0.26rem;
    background: #fff;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #5a647a;
  }
  .tab-bar img{
    width: 0.96rem;
    display: block;
    text-align: center;
    margin: auto;
  }
  .tab-bar span{
    margin-top: 0.16rem;
    display: block;
    font-size: 0.3rem;
  }
  ul,li{
    list-style: none;
  }
  .tab-bar li{
    width: 25%;
    text-align: center;
  }
  .list-box{
    margin-top: 0.2rem;
    background: #fff;
  }
  .list-box ul{
    padding: 0.14rem 0.35rem 0;
    box-sizing: border-box;
  }
  .list-box li{
    padding: 0.29rem 0 0.33rem;
    border-bottom: 1px solid #ebeff2;
  }
  .list-box img{
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
