/**
 * Created by MarvenGong on 2017/3/21.
 */
export default {
    addStudent:function (state,student) {
        state.data.students.push(student);
    },
    removeStudent:function (state,index) {
        state.data.students.splice(index,1);
    }
}