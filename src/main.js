// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.devtools = process.env.NODE_ENV === 'development'

// vant
// import {Rate} from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Rate);
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import axios from "axios";
Vue.prototype.$axios=axios;

//百度地图
import BaiduMap from "vue-baidu-map"
Vue.use(BaiduMap,{
  ak:'twn2V16VWzgtNurwTPfoGhvd6mnQ1k3E'
})

import Vuex from "Vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;


/* eslint-disable no-new */
let store=new Vuex.Store({
  state:{
    fcity:'郑州',
    tcity:'郑州',
    deract:'fcity',
    fday:new Date(),
    tday:new Date(),
    money:0,
    addmoney:0,
    iflogin:false,//默认未登录
    rencar:{name:'雷克萨斯ES 2.8T',pri:'480',img:5},
    back:'支付',
    backposi:'/wod',
    loginto:'/wod',
    pingf:[true,true,true,true,true],
    
  },
  mutations: {
    cpingf(state,a){
      state.pingf=a;
    },
    cloginto(state,a){
      state.loginto=a;
    },
    login(state,a){
      state.iflogin=a;
    },
    pay(state,a){
      state.money-=a;
    },
    cback(state,a){
      // console.log(a);
      state.back=a.cback;
      state.backposi=a.cpos;
    },
    rentcar(state,a){
      state.rencar.name=a.name;
      state.rencar.pri=a.pri;
      switch (a.name) {
        case '宝马M2 2.4T':
          state.rencar.img=1;
          break;
        case '梅赛德斯奔驰AMG 5.3T':
          state.rencar.img=2;
          break;
        case '奔驰GLS 5.3T':
          state.rencar.img=3;
          break;
        case '宝马320LI 2.4T':
          state.rencar.img=4;
          break;
        case '雷克萨斯ES 2.8T':
          state.rencar.img=5;
          break;
        case '阿尔法·罗密欧-Giu lia 2.4T':
          state.rencar.img=6;
          break;
      
        default:state.rencar.img=2;
          break;
      }
    },
    changd(state,a){
      state.deract=a;
    },
    ff(state,a){
      state.fday=a;
    },
    tt(state,a){
      state.tday=a;
    },
    change(state,a){
      if(state.deract=="fcity"){
        state.fcity=a;
      }else if(state.deract=="tcity"){
        state.tcity=a;
      }
    },
    addmoney(state,b){
      state.money+=Number(b);
      state.addmoney=Number(b);
    },
  },
  getters:{
    numa(state){
      let a=parseInt(state.num)+1
      return a;
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
