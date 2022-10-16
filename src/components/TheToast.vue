<template>
    <div :class="['toast','toast_' + toastType]">
        <div class="toast_header">
            <span>{{ toastType }}</span>
            <span class="toast_close">X</span>
        </div>
        <div class="toast_body">
            {{ message }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            toastType: {
                type: String,
                default: "Success"
            },
            message: {
                type: String,
                default: "Toast Message!",
            }
        }
    }
</script>

<style scoped>
.toast{
    width: 299px;
    box-shadow: 0 0 6px 2px #c9c9c9;
    min-height: 22px;
    margin: 11px;
    background-color: #fff;
    border-radius: 2px;
    color: green;
    /* transition: all 1s ease; */

}
.toast_Error{
    color: red;
}
.toast_header{
    border-radius: 3px 3px 0 0;
    background-color: rgb(215,215,215);
    font-weight: bold;
    padding: 5px 11px;
    display: flex;
    justify-content: space-between;
}
.toast_error .toast_header{
    background-color: rgb(252,198,198);
}
.toast_body{
    padding: 11px;
}
.toast_close{
    cursor: pointer;
}
</style>