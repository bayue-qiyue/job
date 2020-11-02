<template>
  <div class="about">
    <ul class="header">
      <li class="header_list" :class="{active:index == current}" v-for="(nav,index) in navtext" :key="index" @click="show(index)">
        {{nav}}
        <img class="icon" src="../assets/zhcc.png" alt="">
      </li>
      <li class="more">......</li>
    </ul>
    <!-- 2 -->
    <div class="industry">
      <div v-if="idnx==0" class="industry_1">
        <ul class="industry_list">
          <li class="industry_item" :class="{active2:index == idx}" v-for="(indus, index) in industry" :key="index" @click="show2(indus, index)">{{indus}}</li>
        </ul>
        <div class="region">
          <ul class="region-item" v-show="item == 1">
            <li v-for="(metros, index) in metro" :key="index" @click="send3(metros,index)" :class="{active:index == idx4}">{{metros}}</li>
          </ul>
          <ul class="region-item" v-show="item == 2">
            <li v-for="(metros2, index) in metro2" :key="index" @click="send4(metros2,index)" :class="{active:index == idx5}">{{metros2}}</li>
          </ul>
          <ul class="region-item" v-show="item == 3">
            <li v-for="(metros3, index) in metro3" :key="index" @click="send5(metros3,index)" :class="{active:index == idx6}">{{metros3}}</li>
          </ul>
          <ul class="region-item" v-show="item == 4">
            <li v-for="(metros4, index) in metro4" :key="index" @click="send6(metros4,index)" :class="{active:index == idx7}">{{metros4}}</li>
          </ul>
          <ul class="region-item" v-show="item == 5">
            <li v-for="(metros5, index) in metro5" :key="index" @click="send7(metros5,index)" :class="{active:index == idx8}">{{metros5}}</li>
          </ul>
          <ul class="region-item" v-show="item == 6">
            <li v-for="(metros6, index) in metro6" :key="index" @click="send8(metros6,index)" :class="{active:index == idx9}">{{metros6}}</li>
          </ul>
          <ul class="region-item" v-show="item == 7">
            <li v-for="(metros7, index) in metro7" :key="index" @click="send9(metros7,index)" :class="{active:index == idx10}">{{metros7}}</li>
          </ul>
        </div>
      </div>
      <div class="industry_2" v-if="idnx==1" style="width: 100%;background:#fff;z-index:99;position: fixed;top:0;bottom: 0;">
        <div class="city-header">
          <span @click="gb">{{a}}</span>
          <div>选择城市</div>
        </div>
        <div class="city-list">
          <div class="city-group">
            <div class="title">热门城市</div>
            <div class="content">
              <div class="city-city" v-for="(city_heats, index) in city_heat" :key="index" @click="send10(city_heats,index)">{{city_heats}}</div>
            </div>
          </div>
          <div class="city-group">
            <div class="title">A</div>
            <div class="content">
              <div class="city-city" v-for="(city_as, index) in city_a" :key="index" @click="send11(city_as,index)">{{city_as}}</div>
            </div>
          </div>
          <div class="city-group">
            <div class="title">B</div>
            <div class="content">
              <div class="city-city" v-for="(city_bs, index) in city_b" :key="index" @click="send12(city_bs,index)">{{city_bs}}</div>
            </div>
          </div>
          <div class="city-group">
            <div class="title">C</div>
            <div class="content">
              <div class="city-city" v-for="(city_cs, index) in city_c" :key="index" @click="send13(city_cs,index)">{{city_cs}}</div>
            </div>
          </div>
        </div>
        <div class="city-nav">
          <div v-for="(city_navs, index) in city_nav" :key="index">{{city_navs}}</div>
        </div>
      </div>
      <ul class="industry_list" v-if="idnx==2">
        <li class="industry_item" :class="{active2:index == idx2}" v-for="(regions, index) in region" :key="index" @click="send14(regions, index)">{{regions}}</li>
      </ul>
      <ul class="industry_list" v-if="idnx==3">
        <li class="industry_item" :class="{active2:index == idx2}" v-for="(prices, index) in price" :key="index" @click="send(prices, index)">{{prices}}</li>
      </ul>
      <ul class="industry_list" v-if="idnx==4">
        <li class="industry_item" :class="{active2:index == idx3}" v-for="(educat, index) in education" :key="index" @click="send2(educat, index)">{{educat}}</li>
      </ul>
    </div>
    <!-- 遮罩层 -->
    <div class="clude" v-if="shows" @click="hidein"></div>
    <!-- 3 -->
    <div class="list-box" v-if="lists.length">
      <ul>
        <li v-for="(list,index) in lists" :key="index">
          <router-link :to="'/index?id='+list.id">
            <img :src=list.img alt="">
            <div class="f-l">
              <p class="f-l-title">{{list.title}}</p>
              <p class="f-l-detali">{{list.detial}}</p>
              <p><span class="f-l-city">{{list.city}}</span></p>
            </div>
            <div class="f-l-time">
              <p class="f-l-money">￥{{list.money}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="null" v-else>
      <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/no-data.png?v=c02cc7bfee837c859abfb093d51627d3" alt="">
      <h1>暂无职位</h1>
      <p>换个搜索条件试试吧</p>
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
  data () {
    return {
      a: '<',
      shows: false,
      item: null,
      idnx: null,
      lists: [],
      current: null,
      idx: 0,
      idx2: 0,
      idx3: 0,
      idx4: null,
      idx5: null,
      idx6: null,
      idx7: null,
      idx8: null,
      idx9: null,
      idx10: null,
      navtext: ['类型', '城市', '区域', '日薪', '学历'],
      industry: ['不限', 'IT互联网', '市场商务', '电子电气', '其他类型', '人事行政', '外语外贸', '财经法务', '教育咨询', '媒体设计'],
      metro: ['软件', '运营', '硬件', '设计', '通讯', '产品'],
      metro2: ['商务', '销售', '公关', '客服', '市场'],
      metro3: ['电子', '电器'],
      metro4: ['体育快消', '机械制造', '物流采购', '建筑房产', '生物医疗', '能源环保', '食品材料', 'NGO公益'],
      metro5: ['人力资源', '猎头', '行政'],
      metro6: ['外语', '外贸'],
      metro7: ['金融', '投资', '法务', '银行', '保险', '财会'],
      price: ['不限', '50-100', '100-150', '150-200', '200-250', '250-300', '300以上'],
      education: ['不限', '大专', '本科', '硕士', '博士', '其他'],
      city_nav: ['热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
      city_heat: ['全国', '北京', '上海', '广州', '深圳', '成都', '杭州'],
      city_a: ['澳门', '阿坝', '安顺', '安康', '阿里', '安阳'],
      city_b: ['北海', '北京', '白沙', '保亭', '巴中', '保山'],
      city_c: ['重庆', '长沙', '长春', '常德', '常州', '成都'],
      region: ['不限']
    }
  },
  mounted () {
    this.axios.get('http://localhost:3305/index').then(res => {
      this.lists = res.data.data
    })
  },
  methods: {
    gb () {
      this.idnx = 9
      this.shows = false
    },
    show (e) {
      this.current = e
      this.idnx = e
      this.shows = true
    },
    show2 (i, e) {
      this.idx = e
      if (e === 0) {
        this.navtext.splice(0, 1, i)
        this.idnx = 9
        this.shows = false
        this.item = null
        this.idx4 = null
        this.idx5 = null
        this.idx6 = null
        this.idx7 = null
        this.idx8 = null
        this.idx9 = null
        this.axios.get('http://localhost:3305/index').then(res => {
          this.lists = res.data.data
        })
      } else {
        this.item = e
      }
    },
    send (i, e) {
      this.lists = ''
      this.navtext.splice(3, 1, i)
      this.idx2 = e
      this.idnx = 9
      this.shows = false
      if (this.idx2 !== 0) {
        this.axios.get('http://localhost:3305/index1?li=' + i).then(res => {
          this.lists = res.data.data
        })
      } else {
        this.axios.get('http://localhost:3305/index').then(res => {
          this.lists = res.data.data
        })
      }
    },
    send2 (i, e) {
      this.navtext.splice(4, 1, i)
      this.idx3 = e
      this.idnx = 9
      this.shows = false
      if (this.idx3 !== 0) {
        this.axios.get('http://localhost:3305/index2?li=' + i).then(res => {
          this.lists = res.data.data
        })
      } else {
        this.axios.get('http://localhost:3305/index').then(res => {
          this.lists = res.data.data
        })
      }
    },
    send3 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx4 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send4 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx5 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send5 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx6 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send6 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx7 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send7 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx8 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send8 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx9 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send9 (i, e) {
      this.navtext.splice(0, 1, i)
      this.idx10 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index3?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send10 (i, e) {
      this.navtext.splice(1, 1, i)
      this.idx1 = e
      this.idnx = 9
      this.shows = false
      if (this.idx1 !== 0) {
        this.axios.get('http://localhost:3305/index2?li=' + i).then(res => {
          this.lists = res.data.data
        })
      } else {
        this.axios.get('http://localhost:3305/index').then(res => {
          this.lists = res.data.data
        })
      }
    },
    send11 (i, e) {
      this.navtext.splice(1, 1, i)
      this.idx1 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index2?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send12 (i, e) {
      this.navtext.splice(1, 1, i)
      this.idx1 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index2?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send13 (i, e) {
      this.navtext.splice(1, 1, i)
      this.idx1 = e
      this.idnx = 9
      this.shows = false
      this.axios.get('http://localhost:3305/index2?li=' + i).then(res => {
        this.lists = res.data.data
      })
    },
    send14 (i, e) {
      this.navtext.splice(2, 1, i)
      this.idx1 = e
      this.idnx = 9
      this.shows = false
    },
    hidein () {
      this.shows = false
      this.idnx = 9
      this.current = null
      this.shows = false
    }
  }
}
</script>
<style scoped>
.city-group .content div{
  display: inline-block;
  margin-top: 0.3rem;
  padding: 0.15rem 0.7rem;
  border-radius: 0.36rem;
  background-color: #f8f8f9;
}
.city-group .title{
  color: #888888;
}
.city-list{
  box-sizing: border-box;
  padding: 0.4rem 0.74rem 0 0.3rem;
  color: #555555;
  font-size: 0.3rem;
}
.city-nav{
  position: absolute;
  right: 0.2rem;
  top: 2rem;
}
.city-header span{
  width: 10%;
}
.city-header div{
  width: 85%;
}
.city-header{
  display: flex;
  line-height: 0.44rem;
  border-bottom: 1px solid #ddd;
  color: #333333;
  padding: 0.19rem 0.32rem;
  text-align: center;
  font-size: 0.34rem;
  box-sizing: border-box;
  width: 100%;
}
.null{
  text-align: center;
}
.null img{
  width: 4rem;
  margin: 3.79rem 0 0.72rem;
}
.industry_1{
  max-height: 7.11rem;
}
.clude{
  background-color: rgba(0,0,0,.7);
  z-index: 2;
  position: fixed;
  top: 0.98rem;
  bottom: 0;
  width: 100%;
}
.region li{
  padding-left: 0.3rem;
  font-size: 0.3rem;
  line-height: 0.88rem;
  height: 0.88rem;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
}
.region{
  max-height: 7.11rem;
}
.region ul{
  color: #666;
  width: 55%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  border-left: 1px solid #eaeaea;
  background-color: #fff;
  overflow: auto;
  transition: all .4s;
  height: 7.11rem;
}
.active2{
  background: #fff;
  border-left: 3px solid#02a0e9;
}
.industry{
  position: fixed;
  top: 0.98rem;
  bottom: 0;
  width: 100%;
  z-index: 9;
  height: 0;
}
.industry_list{
  color: #666;
  font-size: 0.3rem;
  overflow: auto;
  background: #f5f5f5;
  z-index: 9;
  max-height: 7.11rem;
}
.industry_list li{
  padding-left: 0.39rem;
  box-sizing: border-box;
  width: 100%;
  line-height: 0.88rem;
  height: 0.88rem;
  border-bottom: 1px solid #eaeaea;
}
.active{
  color: #02a0e9;
}
.header img{
  width: 0.17rem;
  position: absolute;
  bottom: 0.15rem;
  transform: rotate(-45deg);
}
.header .more{
  width: 10%;
  font-weight: bold;
}
.header_list{
  width: 18%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
  border-right: 1px solid #f5f5f5;
}
.header{
  position: fixed;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  height: 0.98rem;
  width: 100%;
  display: flex;
  color: #666;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.98rem;
}
  .list-box{
    margin-top: 0.98rem;
    background: #fff;
    margin-bottom: 0.98rem;
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
  ul,li{
    list-style: none;
  }
  .f-l-time{
    float: right;
    text-align: right;
  }
  .f-l-money{
    margin-top: 0.43rem;
    font-size: 0.28rem;
    color: #f96969;
    font-weight: bold;
  }
  .f-l-city{
    background-size: 0.2rem;
    padding-left: 0.3rem;
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
</style>
