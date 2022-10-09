<template>
    <div>
        
    <div class="container">
        <h2>{{ msg }}</h2>
        <the-comment v-model:myComment="myComment" buttonText="Submit" foo="bar" class="shadow" placeholder="Enter your comment"
        ></the-comment>
        <br />
        <br />
        <hr />
        <br />
        <p>
           {{ myComment }}
        </p>
    </div>
    </div>
</template>

<script>
    import TheComment from './TheComment.vue'
    export default {
        data() {
            return {
                msg: 'Credit Card Input',
               myComment: "This is my comment."
            };
        },
        components: {
            TheComment
        },
        methods: {
           
        }
    }
</script>

<style>
    .container{
        padding: 22px;
    }
</style>