<template>
  <div class="list">
      <div class="carlist">
        <div class="info" v-for="(a,b) in list" :key="b">
          <img :src="a.img" alt="">
          <div class="iii">
            <div class="left">
              <p class="tit">{{a.name}}</p>
              <p class="ji"><span>豪华车型</span><span>精选优车</span></p>
              <p class="in">{{a.info}}</p>
            </div>
            <div class="right">
              <div class="jg">{{a.pri}}元/天</div>
              <div class="btn" @click="zc(a)">立即租车</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {img:require('../assets/img/chex/img-1-png@2x.png'),name:'梅赛德斯奔驰AMG 5.3T',info:'安全舒适，防震减压，空间超大，配置高端，给你最顶级的出行享受...',pri:'280'},
        {img:require('../assets/img/jiag/jiage-img-1.png@2x.png'),name:'梅赛德斯奔驰AMG 5.3T',info:'安全舒适，防震减压，空间超大，配置高端，给你最顶级的出行享受...',pri:'230'},
        {img:require('../assets/img/jiag/jiage-img-2.png@2x.png'),name:'奔驰GLS 5.3T',info:'安全舒适，防震减压，空间超大，配置高端，给你最顶级的出行享受...',pri:'200'},
        {img:require('../assets/img/jiag/jiage-img-3.png@2x.png'),name:'宝马M2 2.4T',info:'安全舒适，防震减压，空间超大，配置高端，给你最顶级的出行享受...',pri:'180'},
      ]
    }
  },
  methods: {
    zc(a){
      this.$store.commit('rentcar',{name:a.name,pri:a.pri});
      this.$router.push('/dingdx2')
    }

  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .list{
    width: 100%;
    padding: 0 .32rem;
    box-sizing: border-box;
    .carlist{
      width: 100%;
      .info{
        width: 100%;
        margin-bottom: .3rem;
        position: relative;
        font-size: 0;
        border-radius: .2rem;
        img{
          width: 100%;
          border-radius: .2rem;
        }
        .iii{
          width: 100%;
          background: white;
          font-size: .22rem;
          box-sizing: border-box;
          padding: .3rem;
          display: flex;
          .right{
            width: 1.6rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .jg{
              font-size: .32rem;
              // margin-bottom: .2rem;
            }
            .btn{
              font-size: .26rem;
              height: .56rem;
              line-height: .56rem;
              background: linear-gradient(left,rgb(251,238,144),rgb(255,225,15));
              border-radius: .28rem;
            }
          }
          .left{
            flex: 1;
            padding-right:.4rem; 
            .ji{
              margin: .2rem 0;
            }
            .tit{
              font-size: .26rem;
            }
            span{
              padding: .05rem;
              border-radius: .1rem;
              border: .01rem solid rgb(255,224,9);
              margin-right: .3rem;
            }
          }
        }
      }
    }
  }

</style>
