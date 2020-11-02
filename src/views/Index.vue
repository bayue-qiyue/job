<template>
  <div>
    <div class="top_flxed">
      <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-logo.png?v=50ff9c6c5e8caa06ff2045ab559e31ca" alt="">
      <div class="top_right">
        <router-link to="/index" class="top_xz">下载APP</router-link>
        <router-link to="/index" class="top_app">APP内打开</router-link>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <div class="title">
          <div class="img">
            <span>{{txt.title}}</span>
            <img src="https://sxsimg.xiaoyuanzhao.com/static/new_main/img/ji.svg?v=c51eb06f484a01d0c01437f1161ab490" alt="">
          </div>
          <div class="time">{{txt.etime}}</div>
        </div>
        <div class="tag">{{txt.txt}}</div>
        <ul class="wrap" v-html="txt.li">{{txt.li}}</ul>
        <router-link to="/index">
          <img :src=txt.img alt="">
          <div class="info">
            <p class="info_title">{{txt.detial}}</p>
            <p class="info_detial">{{txt.txt2}}</p>
            <div class="jt"></div>
          </div>
        </router-link>
      </div>
      <div class="box2">
        <div class="box2_title">职位描述</div>
        <div class="text" v-html="txt.desc">{{txt.desc}}</div>
      </div>
      <div class="box3">
        <div class="content-wrap">
          <div class="address-title">
            <i></i>
            <span>工作地点</span>
          </div>
          <div class="detail-address">{{txt.map}}</div>
           <div class="resume-require">
            <i></i>
            <span>简历要求：中文</span>
          </div>
          <div class="end-time">
            <i></i>
            <span>截止日期：{{txt.ftime}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="send"><router-link to="/index">马上投递</router-link></div>
      <div class="build"><router-link to="/index">收藏</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:3305/detail?id=' + this.$route.query.id).then(res => {
      this.txt = res.data.data[0]
    })
  }
}
</script>

<style>
.end-time{
  font-size: 0.28rem;
  margin-bottom: 0.15rem;
}
.end-time i{
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -91.7px -24px;
  width: 0.35rem;
  height: 0.35rem;
  background-size: 2.2rem;
  display: inline-block;
  vertical-align: middle;
}
.resume-require{
  font-size: 0.28rem;
  margin-bottom: 0.15rem;
}
.resume-require i{
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon_ziti.png?v=8523b8d6a44c8764f3c5ebba2ede8712) no-repeat -0.02rem;
  width: 0.35rem;
  height: 0.35rem;
  background-size: 0.33rem;
  display: inline-block;
  vertical-align: middle;
}
.detail-address{
  padding-left: 0.46rem;
  margin-bottom: 0.3rem;
  font-size: 0.28rem;
}
.address-title i{
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -70px -24px;
  width: 0.35rem;
  height: 0.35rem;
  background-size: 2.2rem;
  display: inline-block;
  vertical-align: middle;
}
.address-title span{
  vertical-align: middle;
}
.address-title{
  margin-bottom: 0.1rem;
  font-size: 0.32rem;
  color: #333;
}
.box3{
  background: #fff;
  margin-top: 0.24rem;
  padding-left: 0.34rem;
  color: #666;
  margin-bottom: 1rem;
}
.content-wrap{
  padding-top: 0.34rem;
  padding-bottom: 0.1rem;
  box-sizing: border-box;
  width: 100%;
}
.text{
  font-size: 0.28rem;
  color: #666;
  padding-bottom: 0.33rem;
  padding-right: 0.34rem;
}
.box2_title{
  padding: 0.3rem 0;
  font-size: 0.32rem;
  border-bottom: dashed 1px #eaeaea;
}
.box2{
  margin-top: 0.24rem;
  background: #fff;
  padding-left: 0.34rem;
}
.box1 .jt{
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/icon.png?v=e7c9f17…) no-repeat -94px -49px;
  width: 0.35rem;
  height: 0.35rem;
  display: inline-block;
  background-size: 2.2rem;
  position: absolute;
  right: 0.5rem;
  top: 0.8rem;
}
.box1 .info{
  margin-left: 0.2rem;
  color: #666;
  margin-right: 0.2rem;
}
.info_title{
  font-size: 0.3rem;
}
.info_detial{
  color: #999;
  padding: 0.05rem 0;
}
.box1 a{
  display: flex;
  padding: 0.35rem 0 0.3rem;
  width: 100%;
  position: relative;
}
.box1 a img{
  width: 1.08rem;
}
.wrap{
  margin-top: 0.64rem;
  padding-bottom: 0.06rem;
  text-align: left;
  border-bottom: dashed 1px #eaeaea;
}
.wrap li{
  margin-bottom: 0.29rem;
  display: inline-block;
  padding: 0.1rem 0.2rem;
  margin-right: 0.27rem;
  border-radius: 0.08rem;
  background-color: #fafafa;
  border: solid 1px #eaeaea;
  font-size: 0.24rem;
  color: #666;
}
.tag{
  margin-top: 0.33rem;
  padding-right: 0.32rem;
  font-size: 0.28rem;
  color: #10a6e2;
  text-align: left;
}
.box{
  margin-top: 0.85rem;
}
.box1{
  padding: 0.44rem 0 0 0.32rem;
  background: #fff;
}
.box1 .title{
  padding-right: 0.32rem;
  display: flex;
  justify-content: space-between;
}
.title img{
  width: 0.35rem;
  margin-left: 0.1rem;
  vertical-align: middle;
}
.title .img{
  font-size: 0.4rem;
}
.box1 .time{
  margin-top: 0.1rem;
  font-size: 0.24rem;
  color: #999;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.13rem 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 0.28rem;
  box-shadow: 0 0 0.32rem 0 rgba(103, 103, 103, 0.13)
}
.send{
  width: 70%;
  height: 0.72rem;
  line-height: 0.72rem;
  border-radius: 0.04rem;
  background-color: #10a6e2;
  text-align: center;
  display: inline-block;
}
.send a{
  color: #fff;
}
.build{
  display: inline-block;
  width: 27%;
  height: 0.72rem;
  line-height: 0.72rem;
  border-radius: 0.04rem;
  text-align: center;
  background-color: #fafafa;
  border: solid 1px #ccc;
  margin-left: 0.16rem;
}
.build a{
  color: #666;
}
.top_flxed{
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 1px 0.2rem 0.03rem #efefef;
  z-index: 5;
  padding: 0.18rem 0.25rem;
}
.top_flxed img{
  float: left;
  height: 0.52rem;
  margin-top: 0.03rem;
}
.top_right{
  float: right;
  font-size: 0.28rem;
}
a{
  text-decoration: none;
}
.top_app{
  background-color: #fff;
  color: #10a6e2;
  display: inline-block;
  margin-left: 0.2rem;
  padding: 0.1rem 0.2rem;
  border: 1px solid #10a6e2;
  border-radius: 0.05rem;
  margin-right: 0.5rem;
}
.top_xz{
  display: inline-block;
  padding: 0.1rem 0.2rem;
  border: 1px solid #10a6e2;
  background-color: #10a6e2;
  color: #fff;
  border-radius: 0.05rem;
}
</style>
