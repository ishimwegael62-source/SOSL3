import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue' ;
import Contacts from '../views/Contacts.vue'



const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/About", name: "About", component: About },
{path: "/Services", name: "Services", component: Services},
{path: "/Contacts", name:"Contacts", component: Contacts }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
