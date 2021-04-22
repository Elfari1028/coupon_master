import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('@/views/coupon/Coupon.vue'),
    redirect: '/coupon/manage',
    children:[
      {
        // name:""
        path:'manage',
        component:()=>import('@/views/coupon/CouponManage.vue'),
      },{
        // name:""
        path:'detail',
        component:()=>import('@/views/coupon/CouponDetail.vue'),
      },
      {
        // name:""
        path:'edit',
        component:()=>import('@/views/coupon/CouponEdit.vue'),
      },      {
        // name:""
        path:'create',
        component:()=>import('@/views/coupon/CouponCreate.vue'),
      },
      {
        // name:""
        path:'stats',
        component:()=>import('@/views/coupon/CouponStatistics.vue'),
      },      {
        // name:""
        path:'bookset/create',
        component:()=>import('@/views/coupon/BookSetCreate.vue'),
      },      {
        // name:""
        path:'bookset/manage',
        component:()=>import('@/views/coupon/BookSetManage.vue'),
      }
    ]
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('@/views/event/Event.vue'),    redirect: '/coupon/manage',
    children:[
      {
        // name:""
        path:'manage',
        component:()=>import('@/views/event/EventManage.vue'),
      },
      {
        // name:""
        path:'edit',
        component:()=>import('@/views/event/EventEdit.vue'),
      },
      {
        // name:""
        path:'stats',
        component:()=>import('@/views/event/EventStatistics.vue'),
      },{
        path:'create',
        component:()=>import('@/views/event/EventCreate.vue'),
      }
    ]
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('@/views/code/Code.vue'),
    redirect: '/code/manage',
    children:[
      {
        // name:""
        path:'manage',
        component:()=>import('@/views/code/CodeManage.vue'),
      },{
        // name:""
        path:'create',
        component:()=>import('@/views/code/CodeCreate.vue'),
      },
      {
        // name:""
        path:'buy',
        component:()=>import('@/views/code/CodeBuy.vue'),
      },
      {
        // name:""
        path:'detail/',
        component:()=>import('@/views/code/CodeDetail.vue'),
      },{
        path:'stats',
        component:()=>import('@/views/code/CodeStatistics.vue'),
      }

    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
