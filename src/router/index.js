import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

Vue.use(VueRouter)

const routes = [
  { path: '/resume', component: Resume },
  { path: '/', component: Projects },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
