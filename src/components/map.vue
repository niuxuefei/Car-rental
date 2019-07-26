<template>
  <div class="mapbox"> 
    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:100%" @click="getClickInfo"> 
      <slot name="nav"></slot>
      <slot name="geo"></slot>
      <slot name="type"></slot>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
    </baidu-map>
  </div>
</template>
<script>
export default {
  name:'mapbox',
  data () {
    return {center: {lng:0, lat:0},zoom:16
  }},
  mounted:function () {
    // this.enableScrollWheelZoom(true); 
  },  
  methods: {
    handler ({BMap, map}) {
      //坐标 113.730723,34.776484
    // console.log(BMap, map);
    this.center.lng =113.732723;
    this.center.lat =34.776484;
    this.zoom =this.zoom;  
    var pt = new BMap.Point(113.7307, 34.777);
    var myIcon = new BMap.Icon(require("../assets/img/hourrent/small.png"), new BMap.Size(23,29));
    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    marker2.onclick=()=>{
      this.$router.push('/mend')
    }
    map.addOverlay(marker2);
    
    
    },
    getClickInfo (e) {
      // console.log(e.point.lng);
      // console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }}}

</script>

<style scoped lang="less">
  .mapbox {
    width:100%;
    height:100%;
  }
</style>
