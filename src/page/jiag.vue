<template>
  <div class="jiag">
      <ul class="header">
        <li>
          <router-link to="/jiag">按价格</router-link> 
          <span class="border_buttom"></span>
        </li>
        <li><router-link to="/chex">按车型</router-link> </li>
    </ul>

    <div class="jiage">
      <ul>
        <li>150以下</li>
        <li>150-300元</li>
        <li>300-500元</li>
        <li class="cu">500元以上</li>
      </ul>
    </div>

   <div class="imgbox">
      <img src="./../assets/img/jiag/jiage-img-1.png@2x.png" alt="">
      <div class="text">
        <h1>梅赛德斯奔驰AMG 5.3T</h1>
        <p>
          <br>
          <span>豪华车型</span>
          <span>精选优车</span>
        </p>
        <p>安全舒适，防震减压，空间超大，配置高端，给你最顶级的...</p>
      </div>

      <div class="text_right">
        <p>580元/天</p>
        <span>立即租车</span>
      </div>
    </div> 
   <div class="imgbox">
      <img src="./../assets/img/jiag/jiage-img-2.png@2x.png" alt="">
      <div class="text">
        <h1>奔驰GLS  5.3T</h1>
        <p>
          <br>
          <span>豪华车型</span>
          <span>精选优车</span>
        </p>
        <p>安全舒适，防震减压，空间超大，配置高端，给你最顶级的...</p>
      </div>

      <div class="text_right">
        <p>680元/天</p>
        <span>立即租车</span>
      </div>
    </div> 
   <div class="imgbox">
      <img src="./../assets/img/jiag/jiage-img-3.png@2x.png" alt="">
      <div class="text">
        <h1>宝马M2  5.3T</h1>
        <p>
          <br>
          <span>豪华车型</span>
          <span>精选优车</span>
        </p>
        <p>安全舒适，防震减压，空间超大，配置高端，给你最顶级的...</p>
      </div>

      <div class="text_right">
        <p>780元/天</p>
        <span>立即租车</span>
      </div>
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

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.jiag{
  background: #fafafa;
  min-height: 100%;
  padding-bottom: .33rem;
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
      padding: .65rem .35rem .11rem .32rem;
      a{
        text-decoration: none;
        color: #333333FF;
      }
      .border_buttom{
        display: block;
        margin: 0 auto;
        width: 1.60rem;
        height: .06rem;
        background: #000000FF;
        border-radius:3px;
        margin-top: .18rem;
      }
    }
}
.jiage{
  margin-top: .32rem;
  ul{
    font-size: .28rem;
    color: #999999FF;
    display: flex;
    text-align: center;
    li{
      flex: 1;
      font-weight: 400;
    }
    .cu{
      color: #333333FF;
      font-weight: 500;
    }
  }
}
.imgbox{
  overflow: hidden;
  width: 7.2rem;
  height: 6.5rem;
  background: #fff;
  border-radius:20px;
  margin: 0 auto;
  margin-top: .33rem;
  img{
    width: 100%;
  }
  .text{
      width: 4rem;
      float: left;
      margin-left: .31rem;
    h1{
      font-size: .28rem;
      color: #333333FF;
    }
    p{
      font-size: .18rem;
      span{
        text-align: center;
        display: inline-block;
        width: 1.2rem;
        height: .32rem;
        line-height: .32rem;
        padding: .08rem .12rem .07rem .13rem;
        border:1px solid rgba(255,224,9,1);
        border-radius:16px;
        margin-bottom: .23rem;

      }
    }
  }
  .text_right{
    margin-right: .3rem;
    margin-top: .16rem;
    float: right;
    font-size: .36rem;
    color: #333333FF;
    text-align: center;
    span{
      font-size: .28rem;
      display: block;
      width: 1.57rem;
      height: .56rem;
      background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
      border-radius:28px;
      text-align: center;
      line-height: .56rem;
      margin-top: .82rem;
    }
  }
}

</style>
