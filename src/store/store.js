/**
 * Created by MarvenGong on 2017/3/21.
 */
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutatins";
import actions from "./actions";
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    actions
})