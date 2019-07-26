<template>
  <div class="box">
      <!-- 头 -->
      <ul class="uls">
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png">
            <span>订单信息</span>
        </li>
      </ul>
      <!-- 车辆信息 -->
      <div class="box2">
        <img src="../assets/img/dingdan/ico1n-01.png">
      </div>
      <ul class="uls2">
        <li>订单提交已成功</li>
        <li>订单号：91882561</li>
      </ul>
      <!-- 提车地点 -->
      <div class="uls3">
        <ul>
        <li>提车地点</li>
        <li>金水路未来路交叉口南100米路西</li>
        <li>0371-66668888</li>
        <li>门店地址及电话,稍等会以短信形式发送给您,请注意接收</li>
      </ul>
      </div>
      <!-- <br><br><br><br><br><br><br><br><br> -->
      <div class="box3" @click="q1">去评价</div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    q1(){
      this.$router.push('/pingj');
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.box{
    background-color: #fafafa;
    overflow: auto;
    width:100%;
    height:100%;
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
        img{
          width:.2rem;
          height:.34rem;
          position: relative;
          left:-2.57rem;
        }
        span{
          font-size:.36rem;
        }
      }
    }   
    }
    .box2{
      width:6.86rem;
      height:3.2rem;
      background-color:#ccc;
      margin:.32rem .33rem .23rem .31rem;
      border-radius:.3rem;
      background:url(../assets/img/dingdan/img-01.png)no-repeat center center;
      background-size:100% 100%;
      img{
          width:1.28rem;
          height:1.28rem;
          transform: translate(2.76rem,1rem);
      }
    }
    .uls2{
      text-align: center;
      li:nth-child(1){
        font-size:.32rem;
        color:#333333;
      }li:nth-child(2){
        font-size:.28rem;
        color:#999999;
      }
    }
    .uls3{
      transform:translate(.31rem,.56rem);
      width:6.86rem;
      height:2.36rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      ul{
        padding:.22rem;
        line-height:.5rem;
      li:nth-child(1){
        font-size:.32rem;
      }
      li:nth-child(2){
        font-size:.24rem;
        color:rgba(153,153,153,1);
        background: url(../assets/img/dingdan/icon-02.png)no-repeat left center;
        background-position-x:-.1rem;
        background-size:.48rem;
        text-indent:.5rem;
      }
      li:nth-child(3){
        font-size:.24rem;
        color:rgba(153,153,153,1);
        background: url(../assets/img/dingdan/icon-03.png)no-repeat left center;
        background-position-x:-.1rem;
        text-indent:.5rem;
        background-size:.48rem;
      }
      li:nth-child(4){
        font-size:.24rem;
        color:rgba(153,153,153,1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      }
    }
    .box3{
      
      width:6.86rem;
      height:.88rem;
      font-size:.36rem;
      background:linear-gradient(90deg,rgba(251,236,129,1) 0%,rgba(255,224,9,1) 100%);
      border-radius:.41rem;
      font-weight:500;
      font-family:PingFang-SC-Medium;
      text-align: center;
      line-height:.88rem;
      margin:4rem .32rem 0 .32rem;
    }
</style>
