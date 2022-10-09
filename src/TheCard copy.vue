<template>

    <div class="card">
        <div class="card-title">{{ cardTitle }}</div>
        <div class="card-body">
            <slot name="bodySlot">
                This is default content...!
            </slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer">
                
            </slot>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['cardTitle','body'],
        mounted() {
            console.log(this.$slots.footer)
        }
    }

</script>

<style>
    .card{
        width: 200px;
        min-height: 200px;
        margin: 10px auto;
        border: 1px solid blueviolet;
       
    }
    .card-title{
        background: cyan;
        color: #fff;
        padding: 5px 10px;
    }
    .card-body{
        padding: 20px;
    }
    .card-footer{
        background: gray;
        color: #fff;
        padding: 5px 10px;
    }
</style>