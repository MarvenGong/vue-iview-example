/**
 * Created by MarvenGong on 2017/3/22.
 */
import Vue from "vue";
import Router from "vue-router";
import VMStudent from "../components/pages/student/Student.vue";
import studentList from "../components/pages/student/StudentList.vue";
import studentAdd from "../components/pages/student/StudentPlus.vue";
import dashborad from "../components/pages/dashboard.vue";
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:"/",
            component:dashborad
        },
        {
            name:"student",
            path:"/student",
            component:VMStudent,
            children:[
                {
                    path:"list",
                    component:studentList
                },
                {
                    path:"add",
                    component:studentAdd
                }
            ]
        }
    ]
});