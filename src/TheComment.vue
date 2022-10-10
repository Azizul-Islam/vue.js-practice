<template>
    <div class="credit-card">
        <textarea :value="myComment" @input="handleComment" v-bind="$attrs"></textarea><br>
        <button @click="$emit('continueClick')">{{ buttonText }}</button>
    </div>
</template>
<script>
    export default {
        props: {
            myComment: {
                type: String,
                default: "",
            },
            buttonText: {
                type: String,
                default: "OK",
            }
            

        },
        inheritAttrs: false,
        created() {
            console.log(this.$attrs);
        },
        methods: {
            handleComment(e){
                this.$emit('update:myComment', e.target.value);
            },
           
        }
    }
</script>
<style>
    .credit-card{
        width: 288px;
        border: 1px solid gray;
        padding: 22px;
        border-radius: 5px;
        background-color: rgb(255,254,247);
        color: rgb(82,82,82);
        min-height: 111px;
    }
    textarea{
        padding: 7px 9px;
        margin-bottom: 11px;
        border-radius: 3px;
        width: 100%;
        border: 1px solid gray;
    }
    .row{
        display: flex;
    }
    .col-6{
        flex: 1;
        padding: 0 2px;
    }
    .shadow{
        box-shadow: 0 0 3px 2px #111;
    }
</style>