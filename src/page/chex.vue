<template>
  <div class="chex">
      <ul class="header">
        <li>
          <router-link to="/jiag">按价格</router-link> 
        </li>
        <li>
          <router-link to="/chex">按车型</router-link> 
          <span class="border_buttom"></span>
        </li>
    </ul>

    <div class="jiage">
      <ul>
        <li class="cu">豪华型</li>
        <li>舒适性</li>
        <li>中巴/大巴</li>
        <li>SUV</li>
      </ul>
    </div>

    <div class="imgbox">
      <img src="./../assets/img/chex/img-1-png@2x.png" alt="">
      <img src="./../assets/img/chex/img-2-png@2x.png" alt="">
      <img src="./../assets/img/chex/img-3-png@2x.png" alt="">
      <img src="./../assets/img/chex/img-4-png@2x.png" alt="">
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
.chex{
  background: #fafafa;
  min-height: 100%;
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
        color:#333333FF;
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
  margin-top: .29rem;
  img{
    padding-bottom: 1.26rem;
    width: 6.86rem;
    height: 3.50rem;
    margin: 0 auto;
    display: block;
  }
}
</style>
