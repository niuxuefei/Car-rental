<template>
  <div class="car">
    <div class="top">
      <router-link to="/cartype/car/bot">150元以下</router-link>
      <router-link to="/cartype/car/midb">150-300元</router-link>
      <router-link to="/cartype/car/midt">300-500元</router-link>
      <router-link to="/cartype/car/top">500元以上</router-link>
    </div>
    <div class="cont">
      <router-view></router-view>
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

<style scoped lang="less">
.car{
  height: 100%;
  .top{
    display: flex;
    line-height: .8rem;
    font-size: .26rem;
    justify-content: space-around;
    position: fixed;
    top: 2.16rem;
    width: 100%;
    z-index: 999;
    background: white;
    .router-link-active{
      color: rgb(153,153,153);
    }
  }
  .cont{
    margin-top: 2.96rem;
  }
}
</style>
