<template>
  <div>
    <ul class="uls">
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span class="gont">最近</span><span>200m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>355m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>408m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>420m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>480m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>520m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>850m</span></div><p>金水路未来路人行天桥下停车场</p></li>
     <li @click="q2"><div><span>曼哈顿商业广场送车点</span><span>1km</span></div><p>金水路未来路人行天桥下停车场</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    q2(){
      this.$router.push('/mend');
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
 .uls{
   li{
     font-size:.28rem;
     margin:.55rem .36rem 0 .25rem;
     line-height:.4rem;
     div{
       display: flex;
       justify-content:space-between;
       .gont{
         display: inline-block;
         background-color: #FFE009;
         font-size:.18rem;
         text-align: center;
         line-height:.25rem;
         width:.6rem;
         height:.25rem;
         margin:0 .2rem 0 .2rem;
         color:#646262;
       }
     }
   }
   p{
     font-size:.24rem;
     color:#999999;
   }
 }
</style>
