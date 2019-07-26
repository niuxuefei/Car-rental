<template>
  <div class="box">
       <!-- 头 -->
      <ul class="uls">
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png" class="porr2" @click="q1">
            <span>门店列表</span>
            <span class="font1" @click='ddd'>地图</span>
        </li>
      </ul>

        <!-- 搜索 -->
        <div class="box2">
            <img src="../assets/img/mend/icon-01@2x.png"><span>郑州市</span>
            <input type="text" placeholder="请输入门店名称寻找门店">
        </div>
        
         <div class="booo">
            <ul class="lisst">
                <li><router-link to="/md/md1">附近门店</router-link></li>
                <li><router-link to="/md/md2">机场/火车站</router-link></li>
                <li><router-link to="/md/md3">中原区</router-link></li>
                <li><router-link to="/md/md4">二七区</router-link></li>
                <li><router-link to="/md/md5">金水区</router-link></li>
                <li><router-link to="/md/md6">管城区</router-link></li>
                <li><router-link to="/md/md7">惠济区</router-link></li>
                <li><router-link to="/md/md8">郑东新区</router-link></li>
                <li><router-link to="/md/md9">高新区</router-link></li>
                <li><router-link to="/md/md10">经开区</router-link></li>
                <li><router-link to="/md/md11">航空港区</router-link></li>
            </ul>
            <router-view/>
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
    ddd(){
      this.$router.push('/dit')
    },
    q1(){
      this.$router.push('/changz');
    }
  },
  mounted () {
    this.go=-1
  },
  updated(){
    this.go--;
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.box{
    height:100%;
    width:100%;
    display: flex;
    flex-direction:column;
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
        img:nth-child(1){
          width:.2rem;
          height:.34rem;
          position:relative;
          left:-2.25rem;
        }
        
        span{
          font-size:.36rem;
        }
        .font1{
            position: relative;
            left:2.11rem;
        }
      }
    }
    .box2{
        width:7.43rem;
        height:.88rem;
        display: flex;
          img{
              width:.48rem;
              height:.48rem;
              margin: .22rem;
          }
          span{
              font-size:.32rem;
              color:#ffe009;
              flex:1;
              margin:.22rem .22rem .22rem 0rem;
          }
          input{
              width: 4.68rem;
              height:.6rem;
              flex: 1.5;
              font-size:.24rem;
              background:url(../assets/img/mend/123123.png) no-repeat left center;
              background-size:.48rem;
              text-indent:.5rem;
              border-radius:.3rem;
              border:none;
              border:1px solid #ccc;
              margin:.14rem .25rem .14rem 0rem;
          }
      }
      .lisst{
          font-size:.28rem;
          background-color: rgb(240, 237, 237);
          height:100%;
          background: rgba(250,250,250);
          li{
              width:2.26rem;
              height:.88rem;
              text-align: center;
              line-height: .88rem;
          }
      }
      .booo{
          flex:1;
          display: flex;
          width:100%;
          height:100%;
      }
      .router-link-active{
          background-color:#FFE009;
          color:#000;
      }
}
</style>
