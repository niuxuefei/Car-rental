<template>
  <div class="box">
      <!-- 头 -->
      <ul class="uls">
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png" @click='back'>
            <span>订单信息</span>
            <img src="../assets/img/dingdan/icon-01.png">
        </li>
      </ul>

      <!-- 大图 -->
      <div :class="{box2_1:1==$store.state.rencar.img,
      box2_2:2==$store.state.rencar.img,
      box2_3:3==$store.state.rencar.img,
      box2_4:4==$store.state.rencar.img,
      box2_5:5==$store.state.rencar.img,
      box2_6:6==$store.state.rencar.img} "></div>
      <!-- 车名 -->
      <div class="box3">
        <ul>
          <li>
            <img src="../assets/img/dingdan/85.png">
            <span class="zxc">{{$store.state.rencar.name}}</span><span>{{$store.state.rencar.pri}}/日均</span></li>
          <li><span>中型轿车</span><span>2.7L自动</span><span>乘坐5人</span></li>
        </ul>
      </div>
      <!-- 选择城市 -->
      <div class="box4">
        <ul>
          <li>取还车城市</li>
          <li>取还点</li>
        </ul>
        <ul>
          <li @click='from'>
            {{fcity}}
          <img src="../assets/img/dingdan/icon-03@2x.png"></li>
          <li>{{fcity}}国际广自助点</li>
        </ul>
        <ul>
          <li @click='to'>
            {{tcity}}
            <img src="../assets/img/dingdan/icon-03@2x.png"></li>
          <li>{{tcity}}国际广自助点</li>
        </ul>
        <ul>
          <li @click="ftime">
            <p>{{fday|yue}}</p>
            <p>
              <span>{{fday|day}}</span>
            </p>
          </li>
          <li>{{time}}</li>
          <li @click="ttime">
            <p>{{tday|yue}}</p>
            <p>
              <span>{{tday|day}}</span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 支付方式 -->
      <div class="box5">
        <ul>
          <li>定金:￥500</li>
          <li>支付方式</li>
        </ul>
        <div>
          <img src="../assets/img/dingdan/icon-04.png">
          <img src="../assets/img/dingdan/icon-05.png">
          <img src="../assets/img/dingdan/icon-06.png">
          <img src="../assets/img/dingdan/icon-07.png">
          <img src="../assets/img/dingdan/icon-08.png">
        </div>
        <p class="poo">
          <!-- <img src="../assets/img/dingdan/icon-09.png"> -->
          <img src="../assets/img/dingdan/no.png" class="por1" @click="q1" value=123>
          <img src="../assets/img/dingdan/okk.png" hidden class="por2" @click="q2">
          <span>同意评价分时租车租凭协议</span>
          </p>
      </div>
      <!-- 提交 -->
      <div class="box6" @click="q3">提交订单</div>

    <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '40%' }"
        >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          @confirm='confirm'
          @cancel="cancel"
        /></van-popup>


  </div>
</template>

<script>
export default {
  mounted(){
    // console.log(this.$store.state.rencar.img)
  //   this.$axios.get('http://172.25.1.224:8080/carinfo/selectAll')
  // .then(function (res) {
  //   console.log(res);
  // })
  // .catch(function (err) {
  //   console.log(err);
  // });
  },
  data() {
    return {
      qwe:true,
      show:false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 12, 31),
      currentDate: new Date(),
      fday:this.$store.state.fday,
      tday:this.$store.state.tday,
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
    back(){
      this.$router.go(-1);
    },
    to(){
      this.$store.commit('changd','tcity');
      this.$router.push('/xuanz');
    },
    from(){
      this.$store.commit('changd','fcity');
      this.$router.push('/xuanz');
    },
    q1(){
      $('.por1').hide();
      $('.por2').show();
      this.qwe=false
    },
    q2(){
      $('.por2').hide();
      $('.por1').show();
      this.qwe=true
    },
    q3(){
      if(this.qwe==false){
        this.$router.push('/dingd')
      }else{
        this.$message.error('请勾选相关协议！！');
      }
    },
    ftime(){
      $('.q4').show();
    },
    cancel(){
      // $('.q4').hide();
      this.show=false;  
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
    ftime(){
      this.chose='fday'
      this.show=true;
    },
    ttime(){
      this.chose='tday'
      this.show=true;
    },
  },
  components: {

  },
  computed:{
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
}
</script>

<style scoped lang="less">
.box{
    background-color: #fafafa;
    overflow: auto;
    width:100%;
    height:100%;
    .qwe{
      height:500px;
    }
    .q4{
      position: absolute;
      bottom:0px;
      width:100%;
    }
    .uls{
      width:100%;
      height:1.28rem;
      background:rgba(255,224,9,1);
      li:nth-child(1){
        height:.34rem;
        // border: 1px solid #000;
      }
      li:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        height:.92rem;
        img:nth-child(1){
          width:.2rem;
          height:.34rem;
          position:relative;
          left:-2.52rem;
        }
        img:nth-child(3){
          width:.48rem;
          height:.48rem;
          // position: absolute;
          // right:29px;
          position:relative;
          right:-2.26rem;
        }
        span{
          font-size:.36rem;
        }
      }
    }
    .box2_1{
      width:100%;
      height:2.34rem;
      background:url('../assets/img/jiag/jiage-img-3.png@2x.png') no-repeat center top;
      background-size:cover;
    }
    .box2_2{
      width:100%;
      height:2.34rem;
      background:url('../assets/img/chex/img-1-png@2x.png') no-repeat center top;
      background-size:cover;
    }
    .box2_3{
      width:100%;
      height:2.34rem;
      background:url('../assets/img/jiag/jiage-img-2.png@2x.png') no-repeat center top;
      background-size:cover;
    }
    .box2_4{
      width:100%;
      height:2.34rem;
      background:url('../assets/img/chex/img-3-png@2x.png') no-repeat center top;
      background-size:cover;
    }
    .box2_5{
      width:100%;
      height:2.34rem;
      background:url('../assets/img/chex/img-4-png@2x.png') no-repeat center top;
      background-size:cover;
    }
    .box2_6{
      width:100%;
      height:2.34rem;
      background:url('../assets/img/chex/img-2-png@2x.png') no-repeat center top;
      background-size:cover;
    }
    .box3{
      width:6.86rem;
      height:1.28rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      margin:0 .32rem;
      position: relative;
      top:-.6rem;
      ul{
        font-size:.32rem;
        padding:.23rem .38rem .24rem .19rem;
        li:nth-child(1){
          background-size:.48rem;
          display: flex;
          justify-content:space-between;
          img{
            width:.48rem;
            height:.48rem;
          }
          .zxc{
            display: inline-block;
            position: relative;
            left:-.4rem;
          }
        }
        li:nth-child(2){
          font-size:.28rem;
          color:#999999;
          text-indent:.1rem;
          span{
            margin:0 .1rem;
          }
        }
      }
    }
    .box4{
      width:6.86rem;
      height:3.76rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      margin:-.26rem .33rem .31rem .31rem;
      ul:nth-child(1){
        display: flex;
        padding:.23rem 0rem 0rem .33rem;
        li{
          width:50%;
          font-size:.28rem;
          color:#999999;
        }
      }
      ul:nth-child(2){
        display:flex;
        margin:.47rem .58rem 0rem .32rem;
        li{
          display: flex;
          width:50%;
          font-size:.32rem;
          color:#333333;
          img{
            width:.5rem;
            height:.5rem;
          }
        }
      }
      ul:nth-child(3){
        display: flex;
        margin:.35rem .59rem 0 .32rem;
        li{ 
          display: flex;
          width:50%;
          font-size:.32rem;
          color:#333333;
          img{
            width:.5rem;
            height:.5rem;
          }
        }
      }
      ul:nth-child(4){
        display: flex;
        margin:.45rem .31rem .30rem .33rem;
        li:nth-child(1){
          font-size:.32rem;
          flex:1;
          span{
            font-size:.24rem;
            color:rgba(153,153,153,1);
          }
        }
        li:nth-child(2){
          flex:2;
          font-size:.36rem;
          width:.9rem;
          height:.9rem;
          text-align: center;
          background:url(../assets/img/dingdan/8596.png)no-repeat center center;
          background-size:.9rem;
          line-height:.9rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
        }
      }
      li:nth-child(3){
        flex:1;
        font-size:.32rem;
        span{
          font-size:.24rem;
          color:rgba(153,153,153,1);
        }
      }
    }
    .box5{
      width:6.86rem;
      height:2.92rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      margin:0 .32rem 0 .3rem;
       .poo{
         display: flex;
        img{
          margin-left:.1rem;
          margin-top:.05rem;
          width:.35rem;
          height:.35rem;
        }
        span{
          text-indent:.2rem;
        }
      }
      ul{
        list-style: none;
        font-size:.32rem;
        font-weight: 500;
        color:rgba(51,51,51,1);
        padding:.24rem .31rem 0 .31rem;
        li:nth-child(2){
          margin-top:.15rem;
        }
      }
      div{
        display: flex;
        margin:.4rem .31rem 0 .28rem;
        justify-content: space-between;
        img{
          width:.48rem;
          height:.48rem;
        }
      }
      p{
        display: flex;
        font-size:.24rem;
        color:#999999;
        line-height:.5rem;
        margin:.2rem .32rem .15rem .22rem;
        img{
          width:.48rem;
          height:.48rem;
        }
      }
    }
    .box6{
        width:6.86rem;
        height:.88rem;
        font-size:.36rem;
        color:#333333;
        background:linear-gradient(90deg,rgba(251,236,129,1) 0%,rgba(255,224,9,1) 100%);
        border-radius:.41rem;
        text-align: center;
        line-height:.88rem;
        margin:.72rem .33rem 0 .31rem;
      }
 
}
</style>
