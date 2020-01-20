import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import cross from "./cross.vue"
import array from "./array.vue"
import ifcheck from "./ifcheck.vue"
import addtogether from "./addtogether.vue"

Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/",
            component: App,
            children:[
                {
                    path:"cross",
                    name:"cross",
                    component: cross
                },{
                    path:"array",
                    name:"array",
                    component: array
                },{
                    path:"ifcheck",
                    name:"ifcheck",
                    component: ifcheck
                },{
                    path:"addtogether",
                    name:"addtogether",
                    component: addtogether
                }
            ]
        }
    ]
})