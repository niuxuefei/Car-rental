<template>
  <div class="chose">
      <div class="top">
        <a @click="ggg"><img src="../assets/img/route/向右@2x.png" alt=""></a>
        选择城市
      </div>
      <div class="search">
        <input type="text" placeholder="请输入城市名称或首字母寻找城市" v-model="text" @input="aaa">
        <img src="../assets/img/mend/icon-02@2x.png" alt="">
      </div>
      <div class="ccc">
        <div class="now" v-show="!search">
          <p class="tit">当前定位城市</p>
          <p @click="bian('郑州')">郑州</p>
        </div>
        <div class="hot" v-show="!search">
          <p class="tit">热门城市</p>
          <p @click="bian('北京')">北京</p>
          <p @click="bian('上海')">上海</p>
          <p @click="bian('广州')">广州</p>
        </div>
        <div class="city" v-for="(a,b) in city" :key="b" v-show="!search">
          <p class="tit" :id="a.word">{{a.word}}</p>
          <p v-for="(m,n) in a.list" :key="n" @click="bian(m.name)">{{m.name}}</p>
        </div>
        <div class="scity" v-show="search">
          <p class="tit">搜索城市</p>
          <p v-for="(m,n) in scity" :key="n" @click="bian(m.name)">{{m.name}}</p>
          <p v-show="hcity">匹配不到您要搜索的城市</p>
        </div>
        <div class="zim">
          <a v-for="(a,b) in city" :key="b" :href="'#'+a.word" @click="add">{{a.word}}</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city:[
        {word:"A",list:[{name:'安徽',abb:"ah"}]},
        {word:"B",list:[{name:'北京',abb:"bj"}]},
        {word:"C",list:[{name:'成都',abb:"cd"},{name:'重庆',abb:"cq"},{name:'长沙',abb:"cs"},{name:'长春',abb:"cc"}]},
        {word:"D",list:[{name:'大连',abb:"dl"},{name:'东菀',abb:"dy"}]},
        {word:"F",list:[{name:'佛山',abb:"fs"},{name:'福州',abb:"fz"}]},
        {word:"G",list:[{name:'广州',abb:"gz"}]},
        {word:"H",list:[{name:'杭州',abb:"hz"},{name:'哈尔滨',abb:"heb"}]},
        {word:"J",list:[{name:'济南',abb:"jn"}]},
        {word:"N",list:[{name:'南京',abb:"nj"},{name:'宁波',abb:"nb"},{name:'南通',abb:"nt"}]},
        {word:"Q",list:[{name:'青岛',abb:"qd"}]},
        {word:"S",list:[{name:'上海',abb:"sh"},{name:'深圳',abb:"sz"},{name:'苏州',abb:"sz"},{name:'沈阳',abb:"sy"},{name:'石家庄',abb:"sjz"}]},
        {word:"T",list:[{name:'天津',abb:"tj"}]},
        {word:"W",list:[{name:'武汉',abb:"wh"},{name:'无锡',abb:"wx"}]},
        {word:"X",list:[{name:'安徽',abb:"ah"}]},
        {word:"Y",list:[{name:'西安',abb:"xa"},{name:'烟台',abb:"yt"}]},
        {word:"Z",list:[{name:'郑州',abb:"zz"}]}
      ],
      acity:[],
      scity:[],
      text:'',
      search:false,
      hcity:false,
      time:true,
      back:-1
    }
  },
  methods: {
    bian(a){
      this.text=a;
      this.$store.commit('change',a);
      this.$router.go(this.back);
    },
    add(){
      this.back--
    },
    aaa(){
      if(this.text==''){
        this.search=false;
      }else{this.search=true}
      this.scity=[];
      var x=new RegExp(this.text)
      this.acity.forEach((a,b,c)=>{
        if(x.test(a.abb)||x.test(a.name)){
          this.scity.push(a);
        }
      })
      if(this.scity.length==0){
        this.hcity=true;
      }else{this.hcity=false}
    },
    ggg(){
      this.$router.go(this.back);
    }
  },
  mounted () {
    this.$axios('http://wlz.in.8866.org:30167/city/findAllCityMap').then(
      (a)=>{
        let lll=Object.keys(a.data);//所有键名
        let ooo=Object.values(a.data);//所有键值
        // console.log(a.data)
        this.city=[]
        for(let i=0;i<lll.length;i++){
          let m=[];
          let p='';//城市
          let q='';//缩写
          // console.log(ooo[i].length)
          for(let x=0;x<ooo[i].length;x++){
            if(x%2==1){
              q=ooo[i][x];
              m.push({name:p,abb:q})
            }else{
              p=ooo[i][x];
            }
          }
          this.city.push({word:lll[i],list:m})
        }
        // console.log(this.city)
      for(let i=0;i<this.city.length;i++){
        for(let m=0;m<this.city[i].list.length;m++){
          this.acity.push(this.city[i].list[m])
        }
      }
    },(a)=>{
      console.log(a)
      for(let i=0;i<this.city.length;i++){
        for(let m=0;m<this.city[i].list.length;m++){
          this.acity.push(this.city[i].list[m])
        }
      }
    }).catch(
      (err)=>{
        console.log(err)
    })
  },
  updated () {
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .chose{
    width: 100%;
    height: 100%;
    background: rgb(250,250,250);
    display: flex;
    flex-direction: column;
    .top{
      padding-top: .4rem;
      background: rgb(255,224,9);
      height:1.28rem;
      font-size: .32rem;
      text-align: center;
      line-height: .88rem;
      box-sizing: border-box;
      a{
        img{
          width: .2rem;
          position: absolute;
          top: .7rem;
          left:.32rem;
        }
      }
    }
    .search{
      margin-top:.04rem;
      background: white;
      height: .88rem;
      font-size: 0;
      overflow: hidden;
      position: relative;
      img{
        width:.5rem;
        position: absolute;
        top: .18rem;
        left: 1.1rem;
      }
      input{
        width: 5.64rem;
        height: .6rem;
        font-size: .22rem;
        line-height:.6rem;
        border-radius: .3rem;
        border: 1px solid rgb(153,153,153);
        outline: none;
        margin: .1rem auto;
        display: block;
        padding: 0 .86rem;
        box-sizing: border-box;
      }
      input::-webkit-input-placeholder {
        color: rgb(153,153,153);
        line-height:.6rem;
        font-size:.22rem;
      } 
    }
    .ccc{
      flex: 1;
      overflow: auto;
      padding:0 .32rem;
      width: 100%;
      box-sizing: border-box;
      padding-bottom: .3rem;
      .scity,.now,.hot,.city{
        box-sizing: border-box;
        width:100%;
        font-size: .3rem;
        background: white;
        border-radius: .2rem;
        margin-top:.3rem;
        padding: 0 .32rem;
        line-height: .8rem;
        .tit{
          font-size: .26rem;
          color: rgb(153,153,153);
        }
      }
      .zim{
        position: fixed;
        top: 2.2rem;
        right: 0;
        a{
          display: block;
          text-decoration: none;
          font-size:.22rem;
          margin-top: .2rem;
          padding: 0 .05rem;
          color: rgb(153,153,153);
        }
      }
    }
  }
</style>
