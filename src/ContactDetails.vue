<template>
    <div class="contact-details">
    <h1>Contact Details</h1>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <p>{{ phoneNumber }}</p>
    </div>
</template>

<script>
    export default {
        props: {name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: false,
        },
        phoneNumber:{
            type: Number,
            required: true,
        },
    },
        data(){
            return {
               
            };
        },
    }
</script>

<style>
    .contact-details{

        border: 1px solid gray;
        margin: 20px 30px;
        padding: 20px
    }
</style>