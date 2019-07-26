<template>
  <div class="router">
      <div class="top">
        <a href="#"><img src="../assets/img/route/向右@2x.png" alt=""></a>路线
      </div>
      <div class="map"><Map></Map></div>
      <div class="cont">
        <div class="posi">
          <p class="tit">取车地点</p>
          <p>郑州市金水路</p>
          <img src="../assets/img/route/icon2@2x.png" alt="">
        </div>
        <div class="posi">
          <p class="tit">还车地点</p>
          <p>郑州市金水路</p>
          <img src="../assets/img/route/icon2@2x.png" alt="">
        </div>
      </div>
      <div class="kuang">
        <div class="qu">
          <p>取车时间</p>
          <p class="date">7月8日</p>
          <p>今天00：00</p>
        </div>
        <div class="time">2天</div>
        <div class="huan">
          <p>还车时间</p>
          <p class="date">7月10日</p>
          <p>周三12：00</p>
        </div>
      </div>
      <div class="btn">立即用车</div>
  </div>
</template>

<script>
import Map from "../components/map"
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    Map
  }
}
</script>

<style scoped lang="less">
  .router{
    background: rgb(250,250,250);
    min-height: 100%;
    .top{
      width: 100%;
      background: #FFE009;
      height:1.28rem;
      font-size: .38rem;
      text-align: center;
      position: relative;
      padding-top: .4rem;
      box-sizing: border-box;
      line-height: .88rem;
      a{
        position: absolute;
        top: .4rem;
        left: .2rem;
        img{
          width: .16rem;
        }
      }
    }
    .map{
      height: 5.54rem;
      width:100%;
      background: rgba(0,0,0,.5);
    }
    .cont{
      font-size: .3rem;
      .posi{
        padding:.32rem;
        box-sizing: border-box;
        height: 1.38rem;
        border-bottom: 1px solid rgb(232,232,232);
        position: relative;
        .tit{
          font-size:.23rem;
          margin-bottom: .1rem;
        }
        img{
          width: .27rem;
          position: absolute;
          top: .65rem;
          right: .32rem;
        }
      }
    }
    .kuang{
      margin:.3rem auto 0 auto;
      width: 6.86rem;
      border-radius: .2rem;
      background: white;
      font-size: .23rem;
      padding: .3rem .58rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      color: rgb(158,158,158);
      .huan{
        text-align: right;
      }
      .date{
        font-size: .28rem;
        color: black;
        margin:.2rem 0;
      }
      .time{
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
    .btn{
      background:linear-gradient(left,rgb(251,236,128),rgb(255,225,10));
      font-size: .32rem;
      width: 6.23rem;
      height: .88rem;
      margin: .3rem auto;
      line-height: .88rem;
      text-align: center;
      border-radius: .44rem;
    }
  }
</style>
