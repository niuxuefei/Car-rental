<template>
  <div class="box">
    <!-- 引导页swiper -->
    <img src="../assets/img/guide/1启动页 .jpg" class="porr">
    <swiper :options="swiperOption" ref="mySwiper" class="box2">
    <!-- slides -->
    <swiper-slide class="por1"></swiper-slide>
    <swiper-slide class="por2"></swiper-slide>
    <swiper-slide class="por3"><p><router-link to="/changz">立即进入</router-link></p></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>


  </div>
</template>

<script>
export default {
  data() {
    return {
 swiperOption: {
   pagination: {
     el: '.swiper-pagination'
        }
     }
    }
  },
  methods: {

  },
  components: {

  },
  mounted(){
    setTimeout(()=>{
      $('.porr').fadeOut();
    },3000);
  }
}
</script>

<style scoped lang="less">
  .box{
    width:100%;
    height:100%;
    overflow:hidden;
    .porr{
      width:100%;
      height:100%;
    }
    .box2{
      width:100%;
      height:100%;
      .por1{
        background:url(../assets/img/guide/引导页1.png) no-repeat center center;
        background-size:cover;
      }
      .por2{
        background:url(../assets/img/guide/引导页2.png) no-repeat center center;
        background-size:cover;
      }
      .por3{
        background:url(../assets/img/guide/引导页3.png) no-repeat center center;
        background-size:cover;
        p{
          width:4.25rem;
          height:.67rem;
          font-size:.33rem;
          text-align:center;
          line-height:.67rem;
          background-color: #f8b827;
          color:#fff;
          border-radius:.4rem;
          opacity:.7;
          margin-left:50%;
          transform: translateX(-2.125rem);
          position: absolute;
          bottom:98PX;
        }
      }
    }
  }
</style>
