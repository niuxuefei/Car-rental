<template>
  <div class="all">
    <ul class="header">
       <router-link to="./mend"><img src="./../assets/img/route/向右@2x.png" alt=""></router-link> 
      <p>评价列表</p>
    </ul>
    <div class="box">
      <div class="neirong" v-for="(a,b) in list" :key="b">
        <p><img :src="a.img" alt="" class="touxiang"></p>
        <p>
          <span class="a">{{a.name}}</span>
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>{{a.time}}</span>
        </p>
        <br>
        <p class="car">
          <span v-for="(m,n) in a.score" :key="n" :class="{cho:m,nocho:!m}"></span>
        </p>
        <p class="pingj">{{a.content}}</p>
      </div>
    </div>  
 </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      list:[
        {img:require('../assets/img/pingjl/img-07@2x.png'),name:'华华',
        score:[true,true,true,true,true],
        time:'07-06 10:20',content:'已经是第N次租车了，依然很让人舒心，好评'},
        {img:require('../assets/img/pingjl/img-02@2x(1).png'),name:'岩岩',
        score:[true,true,true,true,false],
        time:'07-06 10:20',content:'已经是第N次租车了，依然很让人舒心，好评'},
        {img:require('../assets/img/pingjl/img-03@2x.png'),name:'青青',
        score:[true,true,true,true,false],
        time:'07-06 10:20',content:'已经是第N次租车了，依然很让人舒心，好评'},
        {img:require('../assets/img/pingjl/img-04@2x.png'),name:'多多',
        score:[true,false,false,false,false],
        time:'07-06 10:20',content:'已经是第N次租车了，依然很让人舒心，好评'},
        {img:require('../assets/img/pingjl/img-02@2x.png'),name:'点点',
        score:[true,true,true,true,true],
        time:'07-06 10:20',content:'已经是第N次租车了，依然很让人舒心，好评'}
      ]
    }
  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped lang="less">
.all{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.header{
   position: fixed;
   z-index: 2;
   width: 100%;
  top:0;
  overflow: hidden;
  background: #FFE009;
  height: 1.28rem;
  padding: .4rem .32rem 0 .32rem;
  box-sizing: border-box;
  img{
    float: left;
    margin-top: .25rem;
    width: .20rem;
    height: .34rem;
  }
  p{
    font-size: .34rem;
    line-height: .88rem;
     text-align: center;
  }
}
.box{
   margin-top:1.28rem;
  background: #FAFAFA;
  padding: .25rem .32rem .24rem .32rem;
  .neirong{
    overflow: hidden;
    font-size: .34rem;
    width: 6.86rem;
    height: 1.88rem;
    background: #ffffff;
    border-radius:20px;
    margin-top: .32rem;
    padding: .29rem 0rem .24rem 0rem;
    position: relative;
    .a{
      font-weight: 600;
      font-size: .28rem;
      color: black;
    }
    .car{
      span{
        display: inline-block;
        width: .48rem;
        height: .48rem;
      }
      .nocho{
        background: url('../assets/img/pingj/icon-2-png@2x.png') no-repeat;
        background-size: contain;
      }
      .cho{
        background: url('../assets/img/pingj/icon-1-png@2x.png') no-repeat;
        background-size: contain;
      }
    }
    .pingj{
      font-size: .24rem;
      color: #333333;
      height: .1rem;
      position: absolute;
      bottom: .9rem;
    }
    p{
      float: left;
      margin-left: .32rem;
      .ka{
        width: .8rem;
        height: .24rem;
      }
      span{
        font-size:.24rem;
        color: #999999;
      }
    }
    .touxiang{
      width: .9rem;
      height: .9rem;
    }

  }
}
</style>
