import Search from "../views/Search.vue"
import Coin from "../views/Coin.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Search 
    },  
    {
        path: '/coin/:id', 
        component: Coin
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router 