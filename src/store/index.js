import Vuex from 'vuex'
import Vue from 'vue'
import bets from './modules/backend'
import auth from './modules/auth'
import sportData from './modules/sportData'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "Vue"
    },
    modules: {
        bets,
        auth,
        sportData   
    }
})