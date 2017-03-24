<template>
    <section>
        <i-col span="8">
            <i-form :label-width="110">
                <Form-item label="姓名：">
                    <i-input v-model="formItem.name" :value.sync="formItem.name" placeholder="请输入"></i-input>
                    <!--{{formItem.name}}-->
                </Form-item>
                <Form-item label="性别：">
                    <Radio-group :model="formItem.gender">
                        <Radio value="1">
                            <Icon type="man"></Icon>
                            <span>Male</span>
                        </Radio>
                        <Radio value="0">
                            <Icon type="woman"></Icon>
                            <span>Female</span>
                        </Radio>
                    </Radio-group>
                </Form-item>
                <Form-item label="年龄：">
                    <i-input v-model="formItem.age" :value.sync="formItem.age" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="电话：">
                    <i-input v-model="formItem.phone" :value.sync="formItem.phone" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="">
                    <i-button :loading="btnLoading" type="success" @click="addStudent" long>
                        <span v-if="!btnLoading">Submit</span>
                        <span v-else>Loading...</span>
                    </i-button>
                </Form-item>
            </i-form>
        </i-col>

    </section>
</template>
<script>
    import _ from "etools";
    export default{
        data(){
            return {
                btnLoading:false,
                formItem:{
                    name:"",
                    gender:1,
                    age:20,
                    phone:""
                }
            }
        },
        methods:{
            addStudent(){
                let jsonTemp=_.extend({},this.formItem);
                jsonTemp.gender=parseInt(jsonTemp.gender);
                jsonTemp.age=parseInt(jsonTemp.age);
                this.btnLoading=true;
                this.$store.dispatch("addStudent",jsonTemp);
                setTimeout(()=>{
                    this.btnLoading=false;
                    this.$Message.success("添加成功！");
                    this.$router.push("/student/list");
                })
            }
        }
    }
</script>
<style lang="scss">

</style>    