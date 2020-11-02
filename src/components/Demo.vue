<template>
    <div id="nav">
      <router-link to="/"><span>首页</span></router-link>
      <router-link to="/about">职位</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
</template>

<script>
export default {
  name: 'Demo'
}
</script>

<style scoped>
#nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 0.98rem;
  line-height: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 32px 0 rgba(103, 103, 103, 0.13);
  font-size: 0.12rem;
}

#nav a {
  color: #2c3e50;
  width: 33.33%;
  display: inline-block;
  text-decoration: none;
  text-align: center;
}
#nav span{
  text-align: end;
}
#nav a:first-child{
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/index.png?v=b6b13f0…) no-repeat center 6px;
  background-size: 0.4rem;
}
#nav a:nth-child(2){
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/job.png?v=4c432ba…) no-repeat center 4px;
  background-size: 0.35rem;
}
#nav a:nth-child(3){
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/mine.png?v=a20131093fc9316ee2b4af1cf7b96757) no-repeat center 6px;
  background-size: 0.4rem;
}
#nav a.router-link-exact-active {
  color: #6698ff;
}
#nav a.router-link-exact-active:first-child{
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/index-active.png?v=1f37b557fe13f38a23a91e561d2a33de) no-repeat center 6px;
  background-size: 0.4rem;
}
#nav a.router-link-exact-active:nth-child(2){
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/job-active.png?v=a3fa1672dddce75af5fc76297e62ccfb) no-repeat center 4px;
  background-size: 0.35rem;
}
#nav a.router-link-exact-active:nth-child(3){
  background: url(https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/mine-active.png?v=1422ebac4264c6dd11f6a73905d45b0c) no-repeat center 6px;
  background-size: 0.35rem;
}
</style>
