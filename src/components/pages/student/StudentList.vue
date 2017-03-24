<template>
    <section>
        <i-table :columns="columns" :data="studentList"></i-table>
    </section>
</template>
<script>
    import _ from "etools";
    import axios from "axios";
    export default{
        data(){
            return {
                columns:[
                    {
                        title:"Name",
                        key:"name"
                    },
                    {
                        title:"Age",
                        key:"age"
                    },
                    {
                        title:"Gender",
                        key:"gender"
                    },
                    {
                        title:"Phone",
                        key:"phone"
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 160,
                        render (row,column,index) {
                            return `<i-button type="success" size="small">查看</i-button><i-button type="primary" size="small">编辑</i-button><i-button type="error" @click="remove(${index})" size="small">删除</i-button>`;
                        }
                    }
                ]

            }
        },
        computed:{
            studentList:function () {
                let data=this.$store.state.data.students;
                let dataAry=[];
                for(let i=0;i<data.length;i++){
                    let jsonTemp=_.extend({},data[i]);
                    if (jsonTemp.gender==1){
                        jsonTemp.gender="Male";
                    }else{
                        jsonTemp.gender="Female";
                    }
                    dataAry.push(jsonTemp);
                }
                return dataAry;
            }
        },
        methods:{
            remove(index){
                alert(index);
                this.$store.dispatch("removeStudent",index)
            }
        },
        mounted(){
            axios.get("/api/test/").then(function (res) {
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
</script>
<style lang="scss">

</style>