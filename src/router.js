import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddRes from './components/AddRes.vue'
import UpdateRes from './components/UpdateRes.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'login',
        component:LoginPage,
        path:'/login-page'
    },
    {
        name:'AddRes',
        component:AddRes,
        path:'/add-res'
    },
    {
        name:'UpdateRes',
        component:UpdateRes,
        path:'/Update-res/:id'
    }

];
const router=createRouter({
    history:createWebHistory(),
    routes

});
export default router
