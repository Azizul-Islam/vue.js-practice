<template>
    <div class="dashboard">
        <div class="dashboard_left">
            <TheSidebar></TheSidebar>
        </div>
        <div class="dashboard_right">
            <div class="dashboard_top">
                <TheHeader></TheHeader>
            </div>
            <div class="dashboard_main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import TheSidebar from '../components/TheSidebar.vue';
import TheHeader from '../components/TheHeader.vue';

    export default {
        components: {
            TheSidebar,
            TheHeader
        }
    }
</script>

<style>
    .dashboard{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
    }
    .dashboard_left{
        width: 244px;
        box-shadow: 0 0 3px 2px rgb(0 0 0 /5%);
        z-index: 3;
        display: flex;
        background-color: #fff;
    }
    .dashboard_right{
        flex: 1;
        width: 222px;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }
    .dashboard_top{
        box-shadow: 0 0 3px 2px rgb(0 0 0 / 5%);
        height: 55px;
        z-index: 2;
        display: flex;
    }
    .dashboard_main{
        flex: 1;
        padding: 22px 33px;
        background-color: rgb(235,235,235);
        overflow-y: auto;
    }
</style>