<template>
  <div class="mend">
      <!-- <ul class="header">
        <li>
          <span class="fanhui" @click="q2"></span>
        </li>
        <li>门店</li>
        <li>
          <span class="fanhui1"></span>
        </li>
      </ul> -->
 <!-- 头 -->
      <ul class="uls">
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png" @click="q4" class="qqqqqq">
            <span>门店</span>
        </li>
      </ul>
      <div class="bbooxx">
        <div class="imgbox">
        <img src="./../assets/mend_img/img-01@2x.png">
      </div>

      <div class="xinxi">
        <div class="text">
          <h1><span class="color_block"></span> 郑州未来路店(金水区)</h1>
          <p> <span class="color_block"></span> 09:00-19.00 欢迎你的光临</p>
          <p> <span class="color_block"></span> 郑州市未来路交叉口南50米路西</p>
          <p> <span class="color_block"></span> 0371-66668888</p>
        </div>
      </div>

      <div class="pingjia">
        <div class="text">
          <h1>用户评价（88</h1>
          <p class="haoping">好评度99% <span class="ping_icon"></span> </p>
          <div class="biaoqian">
            <span>服务周到</span>
            <span>价格便宜</span>
            <span>租车方便</span>
          </div>
          <div class="yonghu">
            <div class="touxiang"></div>
            <h1>朗逸</h1>
            <p class="car"> 
              <span class="icar"></span> 
              <span class="icar"></span> 
              <span class="icar"></span> 
              <span class="icar"></span> 
              <span class="icon_car"></span>
            </p>
            <span class="pin">租车很方便，服务态度热情，车型多，价格也很便宜。</span>
            <br>
            <p class="quanbu" @click="q1">查看全部评价</p>
          </div>
        </div>
      </div>
      <p class="liji" @click="xuan">立即选车</p>


      <div class="weibu">
        <div class="weibu_left lei">
        <img src="./../assets/img/hourrent/img-01@2x.png" alt="">
          <p>
            <span class="huodong">特惠</span>
            大众朗逸
          </p>
          <p>日租价 <span class="jiage">￥100</span></p>
        </div>
        <div class="weibu_right lei">
        <img src="./../assets/img/hourrent/img-02@2x.png" alt="">
          <p>
            <span class="huodong">热销</span>
            雷克萨斯-ES
          </p>
          <p>日租价 <span class="jiage">￥500</span></p>
        </div>
      </div>
      <div class="weibu">
        <div class="weibu_left lei">
        <img src="./../assets/img/hourrent/img-01@2x.png" alt="">
          <p>
            <span class="huodong">特惠</span>
            大众朗逸
          </p>
          <p>日租价 <span class="jiage">￥100</span></p>
        </div>
        <div class="weibu_right lei">
        <img src="./../assets/img/hourrent/img-02@2x.png" alt="">
          <p>
            <span class="huodong">热销</span>
            雷克萨斯-ES
          </p>
          <p>日租价 <span class="jiage">￥500</span></p>
        </div>
      </div>
      <br>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    xuan(){
      this.$router.push('/cartype')
    },
    q1(){
       this.$router.push('/pingjl');
    },
    q2(){
      this.$router.go(-1);
    },
    q4(){
      this.$router.push('/md');
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.mend{
  background: #FAFAFA;
  .bbooxx{
    position: relative;
    top:1.26rem;
  }
   .uls{
      width:100%;
      height:1.28rem;
      background:rgba(255,224,9,1);
      position: fixed;
      z-index: 99999;
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
          position: absolute;
          left:.32rem;
        }
        span{
          font-size:.36rem;
        }
      }
    }
  .header{
    display: flex;
    font-size: .4rem;
    color: #333333;
    background: #FFE009;
    li{
      flex: 1;
      text-align: center;
      overflow: hidden;
      padding: .65rem .35rem .29rem .32rem;
      .fanhui{
        display: block;
        width: .2rem;
        height: .34rem;
        background: url('./../assets/img/route/向右@2x.png')no-repeat center center;
        background-size: cover;
      }
      .fanhui1{
        float: right;
        display: block;
        width: .52rem;
        height: .68rem;
        background: url('./../assets/img/mend/icon.-01@2x.png ')no-repeat center -.1rem;
        background-size: cover;
      }
    }
  }
  .imgbox{
    padding: .32rem;
    img{
      width: 100%;
    }
  }
  .xinxi{
    width: 6.86rem;
    height: 2.50rem;
    background:#fff;
    border-radius:20px;
    margin: 0 auto;
    .text{
      padding: .25rem 0rem .31rem .34rem;
    }
    h1{
      font-size: .32rem;
      font-weight: 600;
      .color_block{
        display: inline-block;
        width: .48rem;
        height: .48rem;
        background: url('./../assets/mend_img/icon-01@2x.png')no-repeat center 0.09rem;
        background-size:cover; 
      }
    }
    p{
      font-size: .24rem;
      color: #999;
      .color_block{
        display: inline-block;
        width: .48rem;
        height: .48rem;
        background: url('./../assets/mend_img/icon-01@2x.png')no-repeat center 0.09rem;
        background-size:cover; 
      }
    }
  }
  .pingjia{
    width: 6.86rem;
    background:#fff;
    border-radius:20px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: .32rem;
    .text{
      padding: .25rem 0rem .31rem .34rem;
    }
    h1{
      font-size: .32rem;
    }
    .haoping{
      font-size: .24rem;
      color: #999;
      float: right;
      margin-top: -.6rem;
      .ping_icon{
        display:inline-block;
        width: .48rem;
        height: .48rem;
        background: url('./../assets/mend_img/icon-02@2x.png')no-repeat center .14rem;
        background-size:cover; 
      }
    }
    .yonghu{
      overflow: hidden;
      .touxiang{
        width:.9rem;
        height: .9rem;
        border-radius:50%;
        background: url('./../assets/img/my/img-2-png@2x.png')no-repeat center center;
        background-size:cover;  
      }
      h1{
        text-indent: .1rem;
        margin-top: -.8rem;
        margin-left: 1rem; 
      }
      .car{
        margin-left: 1rem; 
        overflow: hidden; 
        .icon_car{
          display: block;
          width: .42rem;
          height: .29rem;
          margin-top: .12rem;
          background: url('./../assets/img/pingjl/icon-03@2x.png')no-repeat center center;
          background-size:cover; 
          float: left;
          margin-left: .1rem;
        }
        .icar{
          display: block;
          width: .42rem;
          height: .29rem;
          margin-top: .12rem;
          background: url('./../assets/img/pingj/icon-1-png@2x.png')no-repeat center center;
          background-size:cover; 
          float: left;
          margin-left: .1rem;
        }
      }
      .pin{
        font-size: .24rem;
        float: left;
        margin-top: .26rem;
      }
      .quanbu{
        font-size: .24rem;
        color: #666;
        width: 2.40rem;
        height: .6rem;
        border:1px solid rgba(255,224,9,1);
        border-radius:30px;
        text-align: center;
        line-height: .6rem;
        margin-left: 1.9rem;
        margin-top:-.2rem ;
      }
    }
    .biaoqian{
        margin-top: -0.6rem;
      span{
        width: .9rem;
        height: .3rem;
        background: #FFE009;
        font-size: .18rem;
        border-radius:5px;
        text-align: center;
        color: #333333;
        padding: .06rem .08rem .07rem .09rem; 
      }
    }
  }
  .liji{
    width: 6.86rem;
    height: .88rem;
    color: #333;
    text-align: center;
    line-height: .88rem;
    // margin: 0 auto;
    // margin-top: .5rem;
    position: fixed;
    margin-left:50%;
    transform: translateX(-3.43rem);
    bottom:0px;
    font-size: .36rem;
    border-radius:41px;
    background:linear-gradient(90deg,rgba(251,236,129,1) 0%,rgba(255,236,15,1) 100%);
  
  }
  .weibu{
    margin-top: .32rem;
    overflow: hidden;
    .lei{
    width: 3.31rem;
    height: 2.80rem;
    background:rgba(255,255,255,1);
    // background: red;
    border-radius:20px;
    .jiage{
      font-size: .48rem;
    }
    img{
      width: 2.41rem;
      height: 1.4rem;
      margin-left: .5rem;
    }
  }
  .weibu_left{
    float: left;
    margin-left: .32rem;
  }
  .weibu_right{
    float:right;
    margin-right: .32rem;
  }
  p{
    font-size: .32rem;
    margin-left: .5rem;
    .huodong{
      font-size: .18rem;
      width: .6rem;
      height: .3rem;
      // display: block;
      background:rgba(255,224,9,1);
      text-align: center;
      line-height: .3rem;
      color: #333;
      padding: .06rem .06rem .03rem .06rem;
    }
  }
  }
}

</style>
