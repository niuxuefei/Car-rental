import Vue from 'vue'
import Router from 'vue-router'
// import Test from "../components/test.vue"
import Guide from '../page/guide'
import Changz from '../page/changz'
import Chex from '../page/chex'
import Chongz from '../components/chongz'
import Dingd from '../page/dingd'
import Dingdx from '../page/dingdx'
import Dingdx2 from '../page/dingdx2'
import Jiag from '../page/jiag'
import Login from '../page/login'
import Lux from '../page/lux'
import Mend from '../page/mend'
import Mendl from '../page/mendl'
import Pingj from '../page/pingj'
import Pingjl from '../page/pingjl'
import Shiz from '../page/shiz'
import Shunf from '../page/shunf'
import Wod from '../page/wod'
import Xuanz from '../page/xuanz'
import Ok from '../page/ok'
import Register from '../page/register'
import Md from '../page/md'
//充值
import Chong_first from '../page/chong_first'
import Chong_second from '../page/chong_second'
import Chong_thirdly from '../page/chong_thirdly'
import Chong_fourthly from '../page/chong_fourthly'
//评价
import Pingjw  from './../page/pingjw'

//门店路由
import Md1 from '../page/md1'
import Md2 from '../page/md2'
import Md3 from '../page/md3'
import Md4 from '../page/md4'
import Md5 from '../page/md5'
import Md6 from '../page/md6'
import Md7 from '../page/md7'
import Md8 from '../page/md8'
import Md9 from '../page/md9'
import Md10 from '../page/md10'
import Md11 from '../page/md11'
//车型价格
import Cartype from "../page/cartype.vue"
import Car from "../page/car.vue"
import Type from "../page/type.vue"
import Shus from "../components/shus.vue"
import Haoh from "../components/haoh.vue"
import Zhongb from "../components/zhongb.vue"
import Suv from "../components/suv.vue"
import Bot from "../components/bot.vue"
import Midb from "../components/midb.vue"
import Midt from "../components/midt.vue"
import Top from "../components/top.vue"

//地图
import Dit from "../page/dit.vue"
Vue.use(Router)
let a=new Router({
  routes: [
    {
      path:'/dit',
      name:'Dit',
      component:Dit,
    },
    {
      path:'/cartype',
      name:'cartype',
      component:Cartype,
      children: [
        {path:'/',redirect: "type"},
        { 
          path: 'type', name: 'Type', component: Type,
          children: [
            {path:'/',redirect: "haoh"},
            {path: 'shus', name: 'haoh', component: Shus},
            {path: 'haoh', name: 'Haoh', component: Haoh},
            {path: 'zhongb', name: 'Zhongb', component: Zhongb},
            {path: 'suv', name: 'Suv', component: Suv}
          ]
        },
        { 
          path: 'car', name: 'Car', component: Car,
          children: [
            {path:'/',redirect: "bot"},
            {path: 'top', name: 'Top', component: Top},
            {path: 'midt', name: 'Midt', component: Midt},
            {path: 'midb', name: 'Midb', component: Midb},
            {path: 'bot', name: 'Bot', component: Bot},
          ]
        }
      ]
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/changz',
      name: 'Changz',
      component: Changz
    },
    {
      path: '/chex',
      name: 'Chex',
      component: Chex
    },
    {
      path: '/chongz',
      name: 'Chongz',
      component: Chongz
    },
    {
      path: '/dingd',
      name: 'Dingd',
      component: Dingd
    },
    {
      path: '/dingdx',
      name: 'Dingdx',
      component: Dingdx
    },
    {
      path:'/dingdx2',
      name:'Dingdx2',
      component:Dingdx2
    },
    {
      path: '/jiag',
      name: 'Jiag',
      component: Jiag
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/lux',
      name: 'Lux',
      component: Lux
    },
    {
      path: '/mend',
      name: 'Mend',
      component: Mend
    },
    {
      path: '/mendl',
      name: 'Mendl',
      component: Mendl
    },
    {
      path: '/pingj',
      component: Pingj
    },
    {
      path: '/pingjl',
      name: 'Pingjl',
      component: Pingjl
    },
    {
      path: '/shiz',
      name: 'Shiz',
      component: Shiz
    },
    {
      path: '/shunf',
      name: 'Shunf',
      component: Shunf
    },
    {
      path: '/wod',
      name: 'Wod',
      component: Wod
    },
    {
      path: '/xuanz',
      name: 'Xuanz',
      component: Xuanz
    },
    {
      path:'/ok',
      name:'Ok',
      component:Ok
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    //chaonzhi
    {
      path: '/chong_first',
      name: 'Chong_first',
      component: Chong_first
    },
    {
      path: '/chong_second',
      name: 'Chong_second',
      component: Chong_second
    },
    {
      path: '/chong_thirdly',
      name: 'Chong_thirdly',
      component: Chong_thirdly
    },
    {
      path: '/chong_fourthly',
      name: 'Chong_fourthly',
      component: Chong_fourthly
    },
    {
      path: '/pingjw',
      name: 'Pingjw',
      component: Pingjw
    },
    {
      path:'/md',
      name:'/Md',
      component:Md,children:[
        {path:"/",redirect:'md1'},
        {path:"md1",component:Md1},
        {path:"md2",component:Md2},
        {path:"md3",component:Md3},
        {path:"md4",component:Md4},
        {path:"md5",component:Md5},
        {path:"md6",component:Md6},
        {path:"md7",component:Md7},
        {path:"md8",component:Md8},
        {path:"md9",component:Md9},
        {path:"md10",component:Md10},
        {path:"md11",component:Md11}
    ]
    }
  ]
})
a.push('/guide');
export default a
