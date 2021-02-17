import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

Vue.use(VueRouter)

const routes = [
  //{ path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/projects', component: Projects },
]

const router = new VueRouter({
  routes
})

export default router
