<template>
  <div class="changz">
      <Pjsf></Pjsf>
      <div class="all">
        <div class="img">
          <img src="../assets/img/longrent/img-02@2x.png" alt="">
        </div>
        <div class="info">
          <div class="city">
            <div class="cheng">
              <p class="tit">取换城市</p>
              <p @click="from">{{fcity}}<img src="../assets/img/longrent/xia.png" alt=""></p>
              <p @click="to">{{tcity}}<img src="../assets/img/longrent/xia.png" alt=""></p>
            </div>
            <div class="dian">
              <p class="tit">取换点</p>
              <p>{{fcity}}国际广自助点<img src="../assets/img/longrent/xia.png" alt=""></p>
              <p>{{tcity}}国际广自助点<img src="../assets/img/longrent/xia.png" alt=""></p>
            </div>
          </div>
          <div class="fromto">
            <div class="from" @click="ftime">
              <p>{{fday|year}}</p>
              <p>{{fday|yue}}</p>
              <p>{{fday|day}}</p>
            </div>
            <div class="time">{{time}}</div>
            <div class="to" @click="ttime">
              <p>{{tday|year}}</p>
              <p>{{tday|yue}}</p>
              <p>{{tday|day}}</p>
            </div>
          </div>
          <p>长租说明</p>
        </div>
        <div class="chel">
          <div class="che" @click="mendl">
            <img src="../assets/img/hourrent/img-02@2x.png" alt="">
            <p class="name"><span>特惠</span>雷克萨斯-ES</p>
            <p class="price"><span>日租价</span>￥<span class="num">500</span></p>
          </div>
          <div class="che" @click="mendl">
            <img src="../assets/img/hourrent/img-01@2x.png" alt="">
            <p class="name"><span>特惠</span>大众朗逸</p>
            <p class="price"><span>日租价</span>￥<span class="num">100</span></p>
          </div>
          <div class="che" @click="mendl">
            <img src="../assets/img/hourrent/img-01@2x.png" alt="">
            <p class="name"><span>特惠</span>大众朗逸</p>
            <p class="price"><span>日租价</span>￥<span class="num">100</span></p>
          </div>
          <div class="che" @click="mendl">
            <img src="../assets/img/hourrent/img-02@2x.png" alt="">
            <p class="name"><span>特惠</span>雷克萨斯-ES</p>
            <p class="price"><span>日租价</span>￥<span class="num">500</span></p>
          </div>
        </div>
        <div class="btn" @click="mendl">立即租车</div>
      </div>
      <div class="timepic">
        
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '40%' }"
        >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          @change="change"
          @confirm='confirm'
          @cancel="cancel"
        /></van-popup>
      </div>
  </div>
</template>

<script>
import Pjsf from "../components/pjsf"
import Map from "../components/map"
export default {
  data() {
    return {
      show:false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 12, 31),
      currentDate: new Date(),
      fday:new Date(),
      tday:new Date(),
      chose:'fday'
    }
  },
  filters:{
    year(a){
      let date=new Date(a);
      return date.getFullYear()+"年";
    },
    yue(a){
      let date=new Date(a);
      return date.getMonth()+1+"月"+date.getDate()+"日";
    },
    day(a){
      let date=new Date(a);
      // console.log(date.getDay())
      switch (date.getDay()) {
        case 1:return '星期一'
        case 2:return '星期二'
        case 3:return '星期三'
        case 4:return '星期四'
        case 5:return '星期五'
        case 6:return '星期六'
        case 0:return '星期日'
        default:return "未知"
      }
    },
  },
  methods: {
    mendl(){
      this.$router.push('/md')
    },
    change(a){
      // console.log("年："+a.columns[0].values[a.children[0].currentIndex])
      // console.log("月："+a.columns[1].values[a.children[1].currentIndex])
      // console.log("日："+a.columns[2].values[a.children[2].currentIndex])
    },
    confirm(a){
      if(this.chose=='tday'){
        console.log(this.fday.getTime(),a.getTime())
        a.getTime()-this.fday.getTime()<0?this.fday=a:a;
        this.tday=a;
        this.$store.commit('tt',a);
        // console.log(this.$store.state.tday)
      }else{
        this.tday.getTime()-a.getTime()<0?this.tday=a:a;
        this.fday=a;
        this.$store.commit('ff',a)
        // console.log(this.$store.state.fday)
      }
      // console.log(a);
      this.show=false
    },
    cancel(){
      this.show=false;
    },
    ftime(){
      this.chose='fday'
      this.show=true;
    },
    ttime(){
      this.chose='tday'
      this.show=true;
    },
    getContainer() {
      return document.querySelector('.my-container');
    },
    from(){
      this.$store.commit('changd','fcity');
      this.$router.push('/xuanz');
    },
    to(){
      this.$store.commit('changd','tcity');
      this.$router.push('/xuanz');
    }
  },
  computed: {
    time(){
      let a=new Date(this.fday);
      let b=new Date(this.tday);
      return Math.ceil((b.getTime()-a.getTime())/86400000)+'天';
    },
    fcity(){
      return this.$store.state.fcity;
    },
    tcity(){
      return this.$store.state.tcity;
    }
  },
  components: {
    Pjsf,
    Map
  }
}
</script>

<style scoped lang="less">
  .changz{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    .timepic{
      // position: fixed;
      // top: 0;
      // left: 0;
      // width: 100%;
      // height: 100%;
      // background: rgba(0,0,0,.5);
      z-index: 999999;
      .time{
        // position: absolute;
        // bottom: 0;
        width: 100%;
      }
    }
    .all{
      flex: 1;
      margin-top: 2.18rem;
      background: rgb(250,250,250);
      padding: 0 .32rem;
      width: 100%;
      box-sizing: border-box;
      .img{
        padding: .24rem 0;
        img{
          width: 100%;
        }
      }
      .info{
        background: white;
        border-radius: .2rem;
        font-size: .28rem;
        padding: 0 .36rem;
        .city{
          display: flex;
          .cheng,.dian{
            flex: 1;
            .tit{
              font-size: .22rem;
              color:rgb(153,153,153);
            }
            p{
              margin-top: .24rem;
              img{
                width: .23rem;
                margin-left: .26rem;
                transform: translateY(-.04rem)
              }
            }
          }
        }
        .fromto{
          margin:.54rem auto 0 auto;
          width: 100%;
          border-radius: .2rem;
          background: white;
          font-size: .28rem;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          text-align: center;
          .from,.to{
            display: flex;
            height: 1.4rem;
            flex-direction: column;
            justify-content: space-between;
          }
          .time{
            margin-top: .1rem;
            width: 1.18rem;
            height: 1.18rem;
            background:linear-gradient(left,rgb(251,236,128),rgb(255,225,10));
            border-radius: .59rem;
            text-align: center;
            line-height: 1.18rem;
            font-size: .3rem;
            color: black;
          }
        }
        &>p{
          margin-top: .5rem;
          line-height: .72rem;
          text-align: center;
          color: rgb(153,153,153);
          font-size: .22rem;
        }
        
      }
      .chel{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;
        flex-wrap: wrap;
        margin-bottom: 1.1rem;
        .che{
          margin-top: .2rem;
          box-sizing: border-box;
          width:3.3rem;
          background: white;
          border-radius: .1rem;
          overflow: hidden;
          text-align: center;
          img{
            width: 2.42rem;
            display: block;
            margin: 0 auto;
            margin-top:.1rem;
            transform: translateX(-.1rem)
          }
          .name{
            font-size: .28rem;
            padding: 0 .24rem;
            box-sizing: border-box;
            text-align: left;
            span{
              font-size: .18rem;
              padding: .03rem .12rem;
              background: rgb(254,224,9);
              border-radius: .05rem;
              margin-right: .2rem;
            }
          }
          .price{
            text-align: left;
            font-size: .18rem;
            padding: 0 .24rem;
            margin-bottom: .2rem;
            span{
              font-size: .22rem;
              margin-right: .26rem;
            }
            .num{
              font-size: .34rem;
              margin-right: 0;
            }
          }
        }
      }
      .btn{
        width: 6.86rem;
        height: .98rem;
        font-size: .32rem;
        position: fixed;
        bottom: .06rem;
        left:.32rem;
        text-align: center;
        line-height: .98rem;
        border-radius: .49rem;
        background: linear-gradient(left,rgb(251,236,128),rgb(255,224,10));
      }
    }
  }

</style>
