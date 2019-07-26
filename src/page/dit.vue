<template>
  <div class="map">
    <div class="top">
      <img src="../assets/img/route/向右@2x.png" alt="" @click='back'>
      地图
    </div>
    <div class="bot">
      <Map>
        <bm-navigation slot="nav" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-map-type slot="type" :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-geolocation slot="geo" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      </Map>
    </div>
  </div>
</template>

<script>
import Map from "../components/map"
export default {
  data() {
    return {

    }
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  },
  components: {
    Map
  }
}
</script>

<style scoped lang="less">
  .map{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    .top{
      padding-top: .4rem;
      box-sizing: border-box;
      height: 1.28rem;
      width: 100%;
      text-align: center;
      background: rgb(255,225,9);
      position: relative;
      font-size: .34rem;
      line-height: .88rem;
      img{
        position: absolute;
        top: .7rem;
        left: .32rem;
        width: .2rem;
      }
    }
    .bot{
      flex: 1;
    }
  }
</style>
