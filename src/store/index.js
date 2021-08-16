import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import product from './module/product'
import home from './module/home'
import lang from './module/lang'

Vue.use(Vuex);

export default new Vuex.Store({
    //namespaced: true,
    state:{

     },
    getters:{ 

     },
    actions:{

     },
    mutations:{  
        
     },
    modules:{
        app,
        product,
        home,
        lang,
    }
});