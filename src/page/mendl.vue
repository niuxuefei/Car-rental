<template>
  <div>
      <ul class="header">
        <li>
          <img src="./../assets/img/route/向右@2x.png" alt="">
        </li>
        <li>门店列表</li>
        <li class="di">地图</li>
      </ul>

      <div class="sousuo">
        <div class="sousuo_left">
          <img src="./../assets/img/mendl/icon-01@2x.png" alt="">
          <span>郑州市</span>
        </div>
        <div class="sousuo_right">
          <img src="./../assets/img/mendl/icon-02@2x.png" alt="">
          <input type="text" placeholder="请输入门店名称寻找门店">
        </div>
      </div>

      <div class="neirong">
        <div class="neirong_left">
          <ul>
            <li>附近门店</li>
            <li>机场/火车站</li>
            <li>中原区</li>
            <li>二七区</li>
            <li>金水区</li>
            <li>管城区</li>
            <li>惠济区</li>
            <li>郑东新区</li>
            <li>高新区</li>
            <li>经开区</li>
            <li>航空港区</li>
          </ul>
        </div>
        <div class="neirong_right">
          <ul>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
            <li>
              <p>
                曼哈顿商业广场送车点
                <span>最近</span>
                682m
              </p>
              <p class="hui">金水未来路人行天桥下停车场</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.header{
  background: #FFE009;
  display: flex;
  overflow: hidden;
  .di{
    font-size: .34rem;
    text-align: right;
  }
  li{
    text-align: center;
    flex: 1;
    font-size: .36rem;
    padding: .35rem .34rem .28rem .35rem;
    img{
      float: left;
      width: .2rem;
      height: .34rem;
    }
  }
}
.sousuo{
  padding: .14rem .25rem 0rem .23rem;
  overflow: hidden;
  .sousuo_left{
    float: left;
    img{
      width: .48rem;
      height: .48rem;
      float: left;
      overflow: hidden;
      margin-top: .07rem;
    }
    span{
      float: left;
      font-size: .32rem;
      margin-top: .1rem;
      color: #FFE009;
    }
  }
  .sousuo_right{
    position: relative;
    float: right;
    width: 4.68rem;
    height: .6rem;
    border-radius: 30px;
    border:1px solid rgba(153,153,153,1);
    overflow: hidden;
    img{
      width: .48rem;
      height: .48rem;
      position: absolute;
      bottom:.07rem;
      left: .26rem;
    }
    input{
      float: left;
      border: none;
      outline: none;
      width: 3rem;
      margin: 0 auto;
      height: .23rem;
      font-size: .24rem;
      padding: .20rem 1.10rem .18rem .70rem; 
    }
  }
}
.neirong{
  overflow: hidden;
  .neirong_left{
    margin-top: .18rem;
    float: left;
    ul{
      font-size: .28rem;
      color: #999999;
      line-height: .62rem;
      li{
        text-align: center;
        width: 2.26rem;
        height: .88rem;
        line-height: .88rem;
      }
      li:nth-child(1){
        width: 2.26rem;
        height: .88rem;
        background: #FFE009;
        color: #333333;
      }
    }
  }
  .neirong_right{
    float: right;
    ul{
      padding-right:.33rem; 
      li{ 
        margin-top: .69rem;
        p{
          font-size: .28rem;
          span{
            font-size: .18rem;
            color: #333333;
            padding: .04rem .13rem .04rem .13rem;
            background: #FFE009;
            border-radius:5px;
            text-align: center;
          }
        }
        .hui{
          color: #999999;
          color: .24rem;
        }
      }
    }
  }
}
</style>
