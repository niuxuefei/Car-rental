<template>
  <div class="login">
    <img src="./../assets/img/未标题-1.png" alt="" class="ico_arrows">
    <div class="imgbox">
     <img src="./../assets/img/register/矢量智能对象@2x(1).png" alt="">
    </div>
    <div class="user">
    <router-link to='/login'><span >登录</span></router-link>
    <router-link to='/register'><span>注册</span></router-link>
    </div>
      <div class="input">
       <span class="ico_1"></span>
       <p><input type="text"  placeholder="请输入手机号" v-model="phone"></p>
       <span class="ico_2"></span>
       <p><input type="password" placeholder="请输入密码" v-model="password"></p>
      </div>
           <p class="password">忘记密码</p>
        <div class="third">
          <img src="./../assets/img/login/组 1@2x(1).png" alt=""  @click="tiaozhuan">
          <p>第三方登录</p><hr>
        </div>
        <ul>
            <li><img src="./../assets/img/login/组 1@2x.png" alt=""></li>
            <li><img src="./../assets/img/login/组 1@2x(2).png" alt=""></li>
            <li><img src="./../assets/img/login/组 1@2x(3).png" alt=""></li>
        </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wt_show:false,
      hint:false,
      phone:null,
      password:null
    }
  },
  methods: {
    tiaozhuan(){
        let user =/^[1][3,5,7,8,6,4,9][0-9]{9}$/;
        let pass=/^\w{6,18}$/;
        // console.log(user.test(this.phone)&&pass.test(this.password))
        //验证账号密码格式 
        if(user.test(this.phone)&&pass.test(this.password)){
          //验证账号密码
          this.$axios(
            "http://wlz.in.8866.org:30167/user/loginUser?phone="+this.phone+"&&password=" +this.password
          ).then(res=>{
            console.log(res.data); 
            if(res.data){
              this.$store.commit('login',true);
              this.$router.push(this.$store.state.loginto);
              }else{
                this.$message.error('账号密码错误');
                return false;
            }
          }
          ,(err)=>{
            this.$store.commit('login',true);
            this.$router.push(this.$store.state.loginto);
            console.log(err)
          }).catch(err=>{
            console.log(err);
          })
          }else{
              this.$message.error('请输入正确的手机号和密码');
          }
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
  .login{
   padding: .5rem 0rem 0rem .28rem;
   font-size: 0;
    .ico_arrows{
      width: .2rem;
      height: .34rem;
    }
    .imgbox{
      width:2.68rem; 
       margin:.74rem auto ;
      img{
        width: 2.68rem;
        height: 1.55rem;
       }
    }
    .user{
        width: 4rem;
        display: flex;
        margin: 0 auto;
       a{
         flex:1;
         text-decoration: none;
         text-align: center;
         font-size: .36rem;
         color: #666666;
       }
    }
    .input{
      margin-top:.86rem;
      p{
         border-bottom: 1px solid #cccccc;
         margin-right: .32rem;
          margin-top:1rem;
      }
       input{
        border: none;
        width: 4rem;
        position: relative;
        left: .93rem;
        font-size: .3rem;
        outline: none;
      }
       .ico_1{
      display:block;
      width: .36rem;
      height: .35rem;
      background: url('./../assets/img/login/矢量智能对象@2x(2).png')no-repeat center center;
      background-size:cover;
      position:absolute;
      top: 5.3rem;
    }
     .ico_2{
      display:block;
      width: .36rem;
      height: .42rem;
      background: url('./../assets/img/login/矢量智能对象@2x(1).png')no-repeat center center;
      background-size:cover;
      position:absolute;
      top: 6.6rem;
    }
    }
   .password{
    float:right;
    color: #c8c8c8;
    margin-top:.19rem;
    margin-right:.32rem;
    font-size: .23rem;
  }
  .third{
    position: relative;
    img{
      margin:.68rem 0rem .52rem 2.9rem;
      width: 1.38rem;
      height: 1.38rem;
    }
   p{
      width: 2.72rem;
      height: .25rem;
      background: #ffffff;
      text-align: center;
      font-size: .25rem;
      position: absolute;
      left: 2.2rem;
      top:2.36rem;
    }
  }
   ul{
     display: flex;
     margin-top:.72rem;
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 1.01rem;
        height: 1rem;
      }
    }
  }
  .router-link-active{
    span{
color: #f8df2f;
    }
  }
  }
</style>
