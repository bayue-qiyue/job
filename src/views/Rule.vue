<template>
  <div class="box">
      <div class="header">实习僧用户协议及隐私政策</div>
      <div class="page">
          <h1>实习僧用户协议</h1>
          <p style="text-align: center">（本协议于2020年1月1日最新修订）</p>
          <div v-html="lists.http">{{lists.http}}</div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:3305/index').then(res => {
      this.lists = res.data.data[0]
    })
  }
}
</script>

<style>
.box{
  width: 90%;
  margin: 0.6rem auto;
  border-radius: 0.2rem;
  overflow: hidden;
  font-size: 0.28rem;
}
.header{
  width: 100%;
  height: 1.2rem;
  line-height: 1.28rem;
  text-align: center;
  background: #6aa2e4;
  color: #fff;
  font-size: 0.4rem;
}
.page{
  width: 100%;
  padding: 4% 5%;
  background: #fff;
  box-sizing: border-box;
}
.page h1{
  text-align: center;
  font-size: 0.56rem;
}
</style>
