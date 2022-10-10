<template>
    <div class="tab">
        <div class="tab_menu">
            <div  
            v-for="tab in tabs" :key="tab" 
            class="tab_menu_item" 
            :class="{ 'tab_menu_item_active': activeTab === tab}"
            @click="activeTab = tab"
            >
                {{ tab }}
            </div>
        </div>
        <!-- <Login v-if="activeTab === 'Login'" />
        <Register v-if="activeTab === 'Register'" /> -->

        <keep-alive>
            <component :is="activeTab" />
        </keep-alive>
    </div>
</template>
<script>
    import Login from './Login.vue'
    import Register from './Register.vue'
    export default {
        data() {
            return {
                tabs: ["Login",'Register'],
                activeTab: "Login"
            };
        },  
        components: {
            Login,
            Register
        }
    }
</script>

<style>
.tab{

}
.tab_menu{
    display: flex;
}
.tab_menu_item{
    padding: 6px 15px;
    background: #dbdbdb;
    cursor: pointer;
}
.tab_menu_item_active{
    color: #fff;
    background: rgb(27,104,192);
}
input{
    padding: 5px 11px;
    margin-bottom: 11px;
}
</style>