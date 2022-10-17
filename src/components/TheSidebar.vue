<template>
    <div class="sidebar">
        <div class="sidebar_top">
            <h5 class="brand">Pharmacy Management</h5>
        </div>
        <div class="sidebar_bottom">
            <div class="sidebar_nav pt-5">
                <router-link to="/dashboard/overview">Overview</router-link>
                <router-link to="/dashboard/drugs">Drugs</router-link>
                <router-link to="/dashboard/vendors">Vendors</router-link>
                <router-link to="/dashboard/selling-history">Selling History</router-link>
                <router-link to="/dashboard/settings">Settings</router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .sidebar{
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: rgb(48, 15, 15);
        color: #f0faf5;
    }
    .sidebar_top{
        padding: 11px 22px;
        color: #c39f9f;
        text-shadow: 1 1px 0 #040404;
    }
    .sidebar_bottom{
        flex: 1;
        overflow-y: auto;
    }
    .sidebar_nav a,
    .sidebar_nav a:visited{
        display: block;
        padding: 9px 22px;
        text-decoration: none;
        border-bottom: 1px solid rgb(48, 15, 15);
        color: #a7a097;
        border-left: 4px solid rgb(48, 15, 15);
        text-shadow: none;
    }
    .sidebar_nav a:hover,
    .sidebar_nav a.router-link-active{
        font-weight: bold;
        background-color: rgba(255,255,255,0.09);
        border-left: 4px solid #ff5602;
        color: #cfcfcf;
    }
    .brand{
        color: #ffab81;
        font-size: 17px;
    }
</style>