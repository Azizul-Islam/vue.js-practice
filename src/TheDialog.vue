<template>
    <teleport to="#dialog" :disabled="true">
    <div class="the_dialog">
        <div class="the_dialog_container">
            <div class="the_dialog_header">
                Are you sure?
            </div>
            <div class="the_dialog_body">
                <slot></slot>
            </div>
        </div>
    </div>
</teleport>
</template>
<script>
    export default {
        porps: ["heading"]
    };
</script>
<style>
    .the_dialog{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
    }
    .the_dialog_container{
        margin: auto;
        width: 333px;
        min-height: 222px;
        background-color: #fff;
        border-radius: 10px;
    }
    .the_dialog_header{
        border-radius: 10px 10px 0 0;
        background-color: rgb(233,233,233);
        font-weight: bold;
        padding: 9px 19px;
    }
    .the_dialog_body{
        padding: 9px 18px;
    }

</style>