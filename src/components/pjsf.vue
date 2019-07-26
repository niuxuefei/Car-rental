<template>
  <div class="pjsf">
    <div class="top">
      <router-link to="/wod"><img src="../assets/img/my/img-2-png@2x.png" alt=""></router-link>
      平价分时租车
      <div class="pos">郑州<img src="../assets/img/mend/pos.png" alt=""></div>
    </div>
    <div class="list">
      <router-link to="/shiz">分时共享</router-link>
      <router-link to="/changz">长租</router-link>
      <router-link to="/shunf">顺风车</router-link>
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
  .pjsf{
    width: 100%;
    height: 1.28rem;
    position: fixed;
    z-index: 99999;
    top: 0;
    .top{
      background: rgb(254,224,9);
      width: 100%;
      height: 1.28rem;
      padding-top: .4rem;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      font-size: .32rem;
      line-height: .88rem;
      a{
        display: block;
        position: absolute;
        top:.4rem;
        left: .32rem;
        img{
          width: 1.2rem;
        }
      }
      .pos{
        position: absolute;
        right: .33rem;
        top: .4rem;
        font-size: .26rem;
        img{
          width: .26rem;
          margin-left: .1rem;
          transform: translateY(.05rem);
        }
      }
    }
    .list{
      display: flex;
      justify-content: space-around;
      font-size: .33rem;
      background: rgba(255,255,255,.7);
      a{
        display: block;
        text-decoration: none;
        color:black;
        line-height: .88rem;
      }
      .router-link-active{
        border-bottom: .03rem solid rgb(0,0,0)
      }
    }
  }
</style>
