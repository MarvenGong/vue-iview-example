/**
 * Created by MarvenGong on 2017/3/21.
 */
export default {
    addStudent:function ({commit},student) {
        commit("addStudent",student);
    },
    removeStudent:function ({commit},index) {
        commit("removeStudent",index);
    }
}