<template>
  <div class="type">
    <div class="top">
      <router-link to="/cartype/type/haoh">豪华型</router-link>
      <router-link to="/cartype/type/shus">舒适型</router-link>
      <router-link to="/cartype/type/zhongb">中巴/大巴</router-link>
      <router-link to="/cartype/type/suv">SUV</router-link>
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
.type{
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
