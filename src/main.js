import Vue from 'vue'
import App from './App.vue'
import store from "./store/store";
import router from "./route";
import iview from "iview";

Vue.use(iview);

new Vue({
    el: '#app',
    render: h => h(App),
    router:router,
    store,
    mounted(){
        //this.$router.push("/nav");
    },
    watch:{
        "$route":function (to,from) {

        }
    }
});
