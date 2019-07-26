<template>
  <div class="chong_second">
    <Chongz>
      <p slot="text">充值</p>
    </Chongz>
    <div class="conent">
       <img src="./../assets/img/recharge/QQ图片20190711133106.png" alt />
        <p>成功充值{{$store.state.addmoney}}元</p>
        <p>您已成功充值{{$store.state.addmoney}}元，可以去租车了</p>
    </div>
        <button @click="q1">返回{{$store.state.back}}</button>
  </div>
</template>
<script>
import Chongz from "./../components/chongz";
export default {
  data() {
    return {};
  },
  methods: {
    q1(){
      if(this.$store.state.back=='支付'){
        this.$router.push('/dingd');
      }else{this.$router.push('/chong_first')}
    }
  },
  components: {
    Chongz
  }
};
</script>
<style scoped lang='less'>
.chong_second{
      height: 100%;
       background: #fafafa;
      .conent{
          margin: .32rem auto;
          width:6.86rem; 
          border-radius: 20px;
          background: #ffffff;
         img{
             width: 4.03rem;
             height: 3.89rem;
             padding: .46rem 1.35rem .86rem 1.35rem;
         }
         p{
             font-size: .36rem;
             text-align: center;
             font-weight: 500;
             color: rgb(51, 51, 51)
         }
          P:nth-child(3){
             font-size: .24rem;
             text-align: center;
             font-weight: 400;
             padding:.47rem 0rem .48rem  0rem;
             color: rgb(51, 51, 51)
         }
    }
     button{
     width: 6.84rem;
     height:.88rem;
     font-size: .36rem;
     font-weight: 500;
     border-radius:28px;
     border: none;
     outline: none;
     margin-left: .32rem;
     text-align: center;
     background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
   }
}
</style>
