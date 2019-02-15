import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const mainPage=r=>require.ensure([],()=>r(require('../pages/mainPage.vue')),'mainPage')

const iosErrorPage=r=>require.ensure([],()=>r(require('../pages/iosErrorPage.vue')),'iosErrorPage')

const layOutErrorPage=r=>require.ensure([],()=>r(require('../pages/layOutErrorPage')),'layOutErrorPage')

const javascriptAsyncErrorPage=r=>require.ensure([],()=>r(require('../pages/javascriptAsyncErrorPage.vue')),'javascriptAsyncErrorPage')

const router=new Router({
    mode:'hash',
    routes:[
        {
        path:'/mainPage',
        name:'mainPage',
        component:mainPage,
    },
    {
        path:'/iosErrorPage',
        name:'iosErrorPage',
        component:iosErrorPage,
    },
    {
        path:'/layOutErrorPage',
        name:'layOutErrorPage',
        component:layOutErrorPage,
    },
    {
        path:'/javascriptAsyncErrorPage',
        name:'javascriptAsyncErrorPage',
        component:javascriptAsyncErrorPage,
    },
    {
        path:'/',
        redirect:'/mainPage'
    }
]
})

export default router