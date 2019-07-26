<template>
  <div class="all">  
 <ul class="header">
       <router-link to="./mend"><img src="./../assets/img/route/向右@2x.png" alt=""></router-link> 
      <p>评价列表</p>
    </ul>
      <div class="box">
        <div class="neirong">
          <ul>
            <li>取车门店 郑州金水路店</li>
            <li v-for="(a,b) in list1" :key="b">
              {{a.name}}
              <span v-for="(m,n) in a.show" :key='n' @click="fn(b,n)" :class="{yellow:m,yellow1:!m}"></span>
            </li>
          </ul>

          <div contentEditable="true" class="text"></div>
          <ul>
            <li>换车门店 郑州郑汴路店</li>
            <li v-for="(a,b) in list2" :key="b">
              {{a.name}}
              <span v-for="(m,n) in a.show" :key='n' @click="fm(b,n)" :class="{yellow:m,yellow1:!m}"></span>
            </li>
          </ul>

          <div contentEditable="true" class="text"></div>

          <p>感谢你对评价的支持，来说说你的评价之旅吧</p>
        </div>
        <p class="btn" @click='tj'>提交</p>
      </div>      
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
        list1:[
          {name:'手续办理',show:[false,false,false,false,false]},
          {name:'车辆情况',show:[false,false,false,false,false]},
          {name:'服务态度',show:[false,false,false,false,false]}
        ],
        list2:[
          {name:'手续办理',show:[false,false,false,false,false]},
          {name:'服务态度',show:[false,false,false,false,false]}
        ]
      
    }
  },
  methods: {
    tj(){
      let i=0;
      this.list1.forEach((a)=>{
        a.show.every((x)=>{return x===false;})?i+=1:i;
      })
      this.list2.forEach((a)=>{
        a.show.every((x)=>{return x===false;})?i+=1:i;
      })
      if(i==0){
        this.$store.commit('cpingf',this.list1[1].show);
        this.$router.push('/pingjw');
      }else{this.$message.error('请评价后再提交')};
    },
    back(){
      this.$router.go(-1);
    },
    fn(b,n){
      let list=[];
      for(let i=0;i<5;i++){
        list[i]=false;
      }
      for(let i=0;i<=n;i++){
        list[i]=true;
      }
      this.list1[b].show=list;
    },
    fm(b,n){
      let list=[];
      for(let i=0;i<5;i++){
        list[i]=false;
      }
      for(let i=0;i<=n;i++){
        list[i]=true;
      }
      this.list2[b].show=list;
    },
   
  },
  components: {

  }
}
</script>
<style scoped lang='less'>
.all{
  padding-top: 1.28rem;
  height: 100%;
  background: rgb(250,250,250);
  overflow: hidden;
  box-sizing: border-box;
}
.header{
  position: fixed;
  top:0;
  width: 100%;
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
  // margin-top:1.28rem;
  background: #fafafa;
  padding: .32rem;
  box-sizing: border-box;
  width: 100%;
  .btn{
    position: fixed;
    bottom:.16rem;
    right: .32rem;
    margin: 0;
    width: 6.86rem;
    height: .88rem;
    font-size: .36rem;
    text-align: center;
    line-height: .88rem;
    border-radius:44px;
    // margin: 1rem auto;
    color: #333333FF;
    background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
  }
  .neirong{
    background: #ffffff;
    // width: 100%;
    height: 9.56rem;
    border-radius:20px;
    // margin: 0 auto;
    padding: .23rem 0.32rem .55rem .32rem;
    ul{
      font-size:.28rem;
      margin-top: .32rem;
      li{
        line-height: .38rem;
        span{
          width: .48rem;
          height: .48rem;
          display: inline-block;
         
          background-size: cover;
        }
        .yellow{
          width: .48rem;
          height: .48rem;
          display: inline-block;
          background: url('./../assets/img/pingj/icon-1-png@2x.png')no-repeat center .11rem;
          background-size: cover;
        }
        .yellow1{
          width: .48rem;
          height: .48rem;
          display: inline-block;
          background: url('./../assets/img/pingj/icon-2-png@2x.png')no-repeat center .11rem;
          background-size: cover;
        }

      }
    }
    .text{
      width: 100%;
      box-sizing: border-box;
      height: 1.89rem;
      border:1px solid rgba(255,224,9,1);
      border-radius:20px;
      font-size: .28rem;
      padding: .32rem;
      outline: none;
      text-indent: .1rem;
      overflow: hidden;
      
      margin-top: .32rem;
    }
    p{
      font-size: .24rem;
      color: #999999FF;
      text-indent: .75rem;
      margin-top: .32rem;
    }
  }
  a{
      color: #333333FF;
  }
}
</style>
