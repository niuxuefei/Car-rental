<template>
  <div class="my">
    <div class="info">
      <div class="person">
        <div class="tou">
          <img src="../assets/img/longrent/img-01@2x.png" alt="">
        </div>
        <div class="name"  @click="yue">
          <p>{{name}}</p>
          <div class="gra">
            <span>等级</span>
            <div class="out">
              <div class="in" ref='gra'></div>
            </div>
            <span>Lv.{{gra}}</span>
          </div>
        </div>
        <div class="right">
          <router-link to="/shiz"><img src="../assets/img/my/icon-9-png@2x.png" alt=""></router-link>
        </div>
      </div>
      <img src="../assets/img/my/bg.png" alt="">
    </div>
    <div class="power">

      <div class="kuai" @click="yue">
        <img src="../assets/img/my/icon-1-png@2x.png" alt="">
        <p>我的钱包</p>
      </div>
      <div class="kuai" @click="showPopup">
        <img src="../assets/img/my/icon-2-png@2x.png" alt="">
        <p>我的订单</p>
      </div>
      <div class="kuai" @click="showPopup">
        <img src="../assets/img/my/icon-3-png@2x.png" alt="">
        <p>用户反馈</p>
      </div>
      <div class="kuai" @click="showPopup">
        <img src="../assets/img/my/icon-4-png@2x.png" alt="">
        <p>帮助中心</p>
      </div>
      <div class="kuai" @click="showPopup">
        <img src="../assets/img/my/icon-5-png@2x.png" alt="">
        <p>设置</p>
      </div>
      <div class="kuai" @click="showPopup">
        <img src="../assets/img/my/icon-6-png@2x.png" alt="">
        <p>版本检测</p>
      </div>
    </div>
    <van-popup v-model="show" round>
      <div class="tip">
        <p class="tit">提示</p>
        <p>暂未开放该功能</p>
        <p class="btn" @click="qr">确认</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted(){
    // console.log(this.$refs.gra);
    this.$refs.gra.style.width=this.exp+'%'
  },
  computed:{
    gra(){
      return 1+Math.floor(this.$store.state.money/1000);
    },
    exp(){
      return Math.floor(this.$store.state.money%1000/10);
    },
    name(){
      if(this.$store.state.iflogin){
        return "用户16374724645"
      }else{
        return '请登录'
      }
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    qr(){
      this.show = false;
    },
    yue(){
      // this.$store.commit('cpos','/wod')
      if(this.$store.state.iflogin){
        this.$store.commit('cback',{cback:'余额',cpos:'/wod'});
        this.$router.push('/chong_first');
        }else{
          this.$router.push('/login');
          this.$store.commit('cloginto','/wod');
        }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .my{
    width: 100%;
    min-height:100%;
    .tip{
      border-radius: .5rem;
      width: 6rem;
      height: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding: .3rem 0;
      p{
        font-size: .4rem;
        text-align: center;
        color: rgb(153,153,153);
        // line-height: 1rem;
      }
      .tit{
        color:black;
        // border-bottom: 1px solid rgb(153,153,153);
      }
      .btn{
        color: rgb(241, 210, 6);
      }
    }
    a{
      display: block;
    }
    .info{
      height: 4.5rem;
      padding-top: .4rem;
      background: rgb(255,224,9);
      font-size: 0;
      img{
        width: 100%;
      }
      .person{
        padding: .5rem .3rem;
        display: flex;
        .tou{
          margin-right: .3rem;
          img{
            width: 1.24rem;
          }
        }
        .name{
          flex: 1;
          p{
            font-size: .3rem;
            margin-top: .1rem;
          }
          .gra{
            span{
              font-size: .22rem;
            }
            .out{
              margin: .3rem .25rem 0 .25rem;
              width: 1.64rem;
              height: .08rem;
              background:white;
              border-radius: .04rem;
              display: inline-block;
              transform: translateY(-.05rem);
              .in{
                border-radius: .04rem;
                width: .8rem;
                height: 100%;
                background: black;
              }
            }
          }
        }
        .right{
          img{
            margin-top: .3rem;
            width:.4rem;
          }
        }
      }
    }
    .power{
      width: 100%;
      padding: 0 .4rem;
      box-sizing: border-box;
      .kuai{
        height: 2rem;
        float: left;
        width:50%;
        text-align: center;
        margin-bottom: .5rem;
        img{
          width: 1rem;
          display: block;
          margin: 0 auto;
          margin-top: .9rem;
        }
        p{
          font-size: .26rem;
          margin-top: .3rem;
        }
      }
    }
  }
</style>
