import Vue from 'vue'
import VueRouter from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import AreaView from '@/views/AreaView.vue'
import StartView from '@/views/StartView.vue'
import HokkaidoView from '@/views/HokkaidoView.vue'
import OsakaView from '@/views/OsakaView.vue'
import KyotoView from '@/views/KyotoView.vue'
import OkinawaView from '@/views/OkinawaView.vue'
import PlanView from '@/views/PlanView.vue'
import LikeView from '@/views/LikeView.vue'
import CustomerView from '@/views/CustomerView.vue'
import HawaiiView from '@/views/HawaiiView.vue'
import KoreaView from '@/views/KoreaView.vue'
import ItalyView from '@/views/ItalyView.vue'
import SpainView from '@/views/SpainView.vue'
import HokkaidoPlanView from '@/views/HokkaidoPlanView.vue'
import OsakaPlanView from '@/views/OsakaPlanView.vue'
import KyotoPlanView from '@/views/KyotoPlanView.vue'
import OkinawaPlanView from '@/views/OkinawaPlanView.vue'
import HawaiiPlanView from '@/views/HawaiiPlanView.vue'
import KoreaPlanView from '@/views/KoreaPlanView.vue'
import ItalyPlanView from '@/views/ItalyPlanView.vue'
import SpainPlanView from '@/views/SpainPlanView.vue'

Vue.use(VueRouter)

const routes = [
   {
    path: '/Area',
    name: 'Area',
    component: AreaView
  },
{
    path: '/Weather',
    name: 'Weather',
    component: WeatherView
  },
  {
    path: '/',
    name: 'Start',
    component: StartView
  },
    {
    path: '/Hokkaido',
    name: 'Hokkaido',
    component: HokkaidoView
  },
  {
    path: '/Osaka',
    name: 'Osaka',
    component: OsakaView
  },
  {
    path: '/Kyoto',
    name: 'Kyoto',
    component: KyotoView
  },
  {
    path: '/Okinawa',
    name: 'Okinawa',
    component: OkinawaView
  },
    {
    path: '/Plan',
    name: 'Plan',
    component: PlanView
  },
   {
    path: '/Like',
    name: 'Like',
    component: LikeView
  },
   {
    path: '/Customer',
    name: 'Customer',
    component: CustomerView
  },
   {
    path: '/Hawaii',
    name: 'Hawaii',
    component: HawaiiView
  },
   {
    path: '/Korea',
    name: 'Korea',
    component: KoreaView
  },
   {
    path: '/Italy',
    name: 'Italy',
    component: ItalyView
  },
   {
    path: '/Spain',
    name: 'Spain',
    component: SpainView
  },
  {
    path: '/HokkaidoPlan',
    name: 'HokkaidoPlan',
    component: HokkaidoPlanView
  },
  {
    path: '/OsakaPlan',
    name: 'OsakaPlan',
    component: OsakaPlanView
  },
  {
    path: '/KyotoPlan',
    name: 'KyotoPlan',
    component: KyotoPlanView
  },
  {
    path: '/OkinawaPlan',
    name: 'OkinawaPlan',
    component: OkinawaPlanView
  },
  {
    path: '/HawaiiPlan',
    name: 'HawaiiPlan',
    component: HawaiiPlanView
  },
    {
    path: '/KoreaPlan',
    name: 'KoreaPlan',
    component: KoreaPlanView
  },
  {
    path: '/ItalyPlan',
    name: 'ItalyPlan',
    component: ItalyPlanView
  },
  {
    path: '/SpainPlan',
    name: 'SpainPlan',
    component: SpainPlanView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router