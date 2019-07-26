<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Rem from "./assets/js/rem.js"
 import $ from 'jquery';
export default {
  name: 'App',
  methods: {
    
  },
  mounted () {
    Rem.setRem();
    window.onresize=Rem.setRem;
  }
}
</script>

<style>
body,html,#app{
  width:100%;
  height:100%;
  overflow: hidden;
}
/* 样式重置文件 */
body,html,h1,h2,h3,h4,h5,h6,ul,p{
  list-style: none;
  margin: 0;padding: 0;
}
a{
  display: block;
  text-decoration: none;
  color: black;
}
#app {
  margin: 0;
  width:100%;
  height:100%;
}
</style>
