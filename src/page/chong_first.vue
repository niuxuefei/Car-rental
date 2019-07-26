<template>
  <div class="chong_first">
    <Chongz>
      <p slot='text'>我的余额</p>
    </Chongz>
         <div class='conent'>
          <p>我的余额</p> 
          <h1>{{$store.state.money}}<span>元</span></h1>
            <ul>
              <li>说明：</li>
              <li>1、首次租车享6折优惠</li>
              <li>2、邀请好友加入平驾租车获50元代金券</li>
              <li>3、代金券与打折优惠不能同时享受</li>
            </ul>
          </div>
           <div class='conent'>
          <p>我的积分</p> 
          <h1>1000<span>积分</span></h1>
            <ul>
              <li>说明：</li>
              <li>1 、1积分=1元</li>
              <li>2、每单最高可使用积分冲抵40%的租车费用</li>
            </ul>
          </div>
              <router-link to="chong_second"><button>充值</button></router-link>
  </div>
</template>

<script>
import Chongz from './../components/chongz'
export default {
  data() {
    return {

    }
  },
  methods: {
  },
  
  components: {
   Chongz
  },
  mounted () {
  }
}
</script>

<style scoped lang='less'>
.chong_first{
     height: 100%;
     background: #fafafa;
     .conent{
       padding:.28rem 0rem .15rem .29rem; 
       margin: .32rem auto;
       background: #ffffff;
       width: 6.77rem;
       height: 3.05rem;
       border-radius:20px; 
       p{
         font-size: .26rem;
       }
       h1{
        font-size: .45rem;
        text-align: center;
        span{
           font-size: .23rem;
        }
       }
       ul{
             margin-top:.9rem;
          li{
            font-size: .24rem;
          }
       }
  }
   button{
     width: 6.84rem;
     height:.88rem;
    font-size: .36rem;
     border-radius:28px;
     border: none;
      outline: none;
     margin-left: .32rem;
     text-align: center;
     background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
   }
}
</style>
