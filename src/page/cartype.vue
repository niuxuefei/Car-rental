<template>
  <div class="cartype">
    <div class="top">
      <div class="ppp">选车</div>
      <img src="../assets/img/route/向右@2x.png" alt="" @click="back">
    </div>
    <div class="ttt">
      <router-link to='/cartype/car'>按价格</router-link>
      <router-link to='/cartype/type'>按车型</router-link>
    </div>
    <div class="lei">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      go:-1
    }
  },
  methods: {
    back(){
      this.$router.push('/mend');
    }
  },
  updated () {
    this.go--;
  },
  mounted () {
    this.go=-1;
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.cartype{
  background: rgb(250,250,250);
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  .top{
    position: relative;
    padding-top: .4rem;
    height: 1.28rem;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    font-size: .34rem;
    background:rgb(255,224,9);
    line-height: .88rem;
    position: fixed;
    top: 0;
    z-index: 999;
    img{
      position: absolute;
      width: .2rem;
      top: .7rem;
      left: .32rem;
    }
  }
  .ttt{
    position: fixed;
    top: 1.28rem;
    display: flex;
    width: 100%;
    font-size: .34rem;
    line-height: .88rem;
    justify-content: space-around;
    background: white;
    z-index: 999;
    a{
      position: relative;
    }
    .router-link-active{
      font-weight: 600;
    }
    .router-link-active:after{
      content: '';
      width: 1.2rem;
      height: .06rem;
      background: black;
      position: absolute;
      border-radius: .03rem;
      bottom: 0;
      right: -.1rem;
    }
  }
  .lei{
    width: 100%;
    margin-top:1.28rem; 
  }
}
</style>
