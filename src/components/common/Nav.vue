<template>
    <section class="left-nav-inner">
        <Menu :theme="theme1" active-key="1-1">
            <Menu-group title="学生管理" key="1">
                <router-link to="/student/list">
                    <Menu-item key="1-1" name="">
                        <Icon type="document-text"></Icon>学生列表
                    </Menu-item>
                </router-link>
                <router-link to="/student/add">
                    <Menu-item key="1-2" name="">
                        <Icon type="plus"></Icon>添加学生
                    </Menu-item>
                </router-link>
            </Menu-group>
            <Menu-group title="教师管理">
                <Menu-item key="2-1" name="">
                    <Icon type="heart"></Icon>教师列表
                </Menu-item>
                <Menu-item key="2-2" name="">
                    <Icon type="heart-broken"></Icon>添加教师
                </Menu-item>
            </Menu-group>
        </Menu>
    </section>

</template>
<script>
    import Vue from "vue";
    //import {Header} from "mint-ui";
    export default {
        data(){
            return {
                theme1:"dark",
                theme2: 'light'
            }
        },
        components:{

        }
    }
</script>
<style lang="scss">

</style>