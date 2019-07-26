<template>
  <div class="register">
    <img src="./../assets/img/register/矢量智能对象@2x.png" alt class="ico_arrows" />
    <div class="imgbox">
      <img src="./../assets/img/register/矢量智能对象@2x(1).png" alt />
    </div>
    <div class="user">
      <router-link to="/login">
        <span>登录</span>
      </router-link>
      <router-link to="/register">
        <span>注册</span>
      </router-link>
    </div>
    <div class="input">
      <p>
        <input type="text" v-model="phone" placeholder="请输入手机号"/>
      </p>
      <p>
        <input type="text" v-model="ccc" placeholder="请输入验证码" />
        <span @click="btnCheck">{{yz}}</span>
      </p>
      <p>
        <input type="password" v-model="password" placeholder="密码为6-18位数字英文或组合"/>
        <span></span>
      </p>
    </div>
    <div class="third">
      <img src="./../assets/img/register/组 1@2x.png" @click="dianji" />
    </div>
    <p>
      <input v-model='check' type="checkbox" />我已阅读并接受
      <span>《平驾分时租车会员注册协议》</span>
    </p>
  </div>
</template>
<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      yz: "获取验证码",
      a:true,
      phone:null,
      password:null,
      yzm:111111,
      check:false,
      ccc:''
    };
  },
  methods: {
    btnCheck(){
      this.$axios(
           "http://wlz.in.8866.org:30167/phone/phones?phone="+this.phone
      ).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err);
      })
      if(this.a){
        this.$axios("http://wlz.in.8866.org:30167/phone/phones?phone="+this.phone).then(
          res=>{
            console.log(res.data);
            this.yzm=res.data;
          },err=>{
            this.$message.error('请检查您的网络');
          }).catch(err=>{
            console.log(err);
        })
        this.a=false;
        let a=60;
        let b=setInterval(() => {
          this.yz=a+'s';
          a--;
        if(a==0){
          this.yz="获取验证码";
          clearInterval(b);
          this.a=true;
        }
      }, 1000);
      }
    },
    dianji() {
      // console.log(this.check);
      //是否勾选协议
      if(this.check){
        //验证账号密码
        let user =/^[1][3,5,7,8,6,4,9][0-9]{9}$/;
        let pass=/^\w{6,18}$/;
        // console.log(user.test(this.phone)&&pass.test(this.password))
        if(user.test(this.phone)&&pass.test(this.password)){
          //验证验证码
          if(this.yzm==this.ccc){
            this.$axios("http://wlz.in.8866.org:30167/user/saveUser?phone="+this.phone+"&&password=" +this.password).then(
            res=>{
              // console.log(res.data)
              if(res.data){
                this.$router.push("/login")
              }else{
                this.$message.error('该账号已被注册');
              }
            },(err)=>{
              console.log(err)
            }).catch(err=>{
              console.log(err);
            })
        }else{
          this.$message.error('请输入正确的验证码');
        }

        }else{
          this.$message.error('请输入正确的手机号和密码');
        }
      } else {
        Notify({   
          message: "请您阅读租赁协议并同意",
          duration: 2000,
          background: "#1989fa"
        });
      }
    }
  },
  components: {
    
  }
};
</script>

<style scoped lang='less'>
.register {
  padding: 0.5rem 0rem 0rem 0.28rem;
  font-size: 0;
  .ico_arrows {
    width: 0.2rem;
    height: 0.34rem;
  }
  .imgbox {
    width: 2.68rem;
    margin: 0.74rem auto;
    img {
      width: 2.68rem;
      height: 1.55rem;
    }
  }
  .user {
    width: 4rem;
    display: flex;
    margin: 0 auto;
    a {
      flex: 1;
      text-decoration: none;
      text-align: center;
      font-size: 0.36rem;
      color: #666666;
    }
  }
  .input {
    margin: 0.86rem 0.31rem 0 0.03rem;
    p {
      border-bottom: 1px solid #cccccc;
      margin-top: 0.9rem;
      input {
        border: none;
        width: 7rem;
        outline: none;
        font-size: 0.3rem;
      }
    }
    p:nth-child(2) {
      overflow: hidden;
      input {
        width: 5rem;
        float: left;
      }
      span {
        font-size: 0.25rem;
        float: right;
        color: #f8df2f;
        width: 1.71rem;
        height: 0.36rem;
        text-align: center;
        margin-bottom: 0.12rem;
        border: 1px solid #f8df2f;
        border-radius: 0.06rem;
      }
    }
    p:nth-child(3) {
      overflow: hidden;
      input {
        width: 6rem;
        float: left;
      }
      span {
        float: right;
        width: 0.43rem;
        height: 0.26rem;
        background: url("./../assets/img/register/矢量智能对象@2x(2).png")
          no-repeat center center;
        background-size: cover;
      }
    }
  }
  .third {
    display: flex;
    img {
      width: 1.38rem;
      height: 1.38rem;
      margin: 0.7rem auto 1.79rem;
    }
  }
  p {
    font-size: 0.19rem;
    text-align: center;
    span {
      color: #f8df2f;
    }
  }
  .router-link-active {
    span {
      color: #f8df2f;
    }
  }
}
</style>
