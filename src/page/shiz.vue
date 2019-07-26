<template>
  <div class="timeshare">
      <Pjsf></Pjsf>
      <div class="map">
        <Map></Map>
      </div>
      <div class="chel">
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
      <div class="btn" @click="mendl">我要租车</div>
  </div>
</template>

<script>
import Pjsf from "../components/pjsf"
import Map from "../components/map"
export default {
  data() {
    return {

    }
  },
  methods: {
    mendl(){
      this.$router.push('/md')
    },
  },
  components: {
    Pjsf,
    Map
  }
}
</script>

<style scoped lang="less">
  .timeshare{
    display: flex;
    flex-direction: column;
    height: 100%;
    .map{
      flex:1;
      // position: relative;
      // z-index: -1;
      margin-top: 1.28rem;
    }
    .chel{
      position: absolute;
      bottom: 1.3rem;
      display: flex;
      justify-content: space-between;
      padding: 0 .32rem;
      box-sizing: border-box;
      width: 100%;
      .che{
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
      position: absolute;
      bottom: .06rem;
      left:.32rem;
      text-align: center;
      line-height: .98rem;
      border-radius: .49rem;
      background: linear-gradient(left,rgb(251,236,128),rgb(255,224,10));
    }
  }

</style>
