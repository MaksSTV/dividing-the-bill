import Main from "@/pages/Main.vue"
import AddPersonPage from "@/pages/AddPersonPage.vue"
import AddFoodPage from "@/pages/AddFoodPage.vue"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/add-person',
        component: AddPersonPage
    },
    {
        path: '/add-food',
        component: AddFoodPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;