<template>
    <div id="app">
        <div class="header">
            <Icon type="social-windows"></Icon> 学生信息管理系统
        </div>
        <div class="wraper">
            <div class="left-nav">
                <LeftNav/>
            </div>
            <div class="main-content">
                <Alert>
                    <Breadcrumb>
                        <Breadcrumb-item href="/">
                            <Icon type="home"></Icon> Home
                        </Breadcrumb-item>
                        <Breadcrumb-item href="/student">
                            <Icon type="person"></Icon> Student
                        </Breadcrumb-item>
                        <Breadcrumb-item>
                            <Icon type="pound"></Icon> List
                        </Breadcrumb-item>
                    </Breadcrumb>
                </Alert>

                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>
    import Nav from "./components/common/Nav.vue";
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            "LeftNav":Nav
        },
        mounted(){
            this.$router.push("/");
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0;
    }

    a {
        color: #42b983;
    }
    .header{
        height: 60px;background-color: #464C5B;color:#fff;line-height:60px;font-size:22px;padding:0 15px;
    }
    .left-nav{
        width: 240px;float: left;
    }
    .main-content{padding: 10px;padding-left: 250px;}
</style>
