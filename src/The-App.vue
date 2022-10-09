<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>My Ratting: {{ myRating }}</p>
       <the-rating v-model="myRating"></the-rating>
    </div>
</template>

<script>
    import TheRating from './TheRating.vue'
    export default {
        data() {
            return {
                msg: 'Hello This is vue js 3.',
                myRating: 3,
            };
        },
        components: {
            TheRating
        },
        methods: {
           
        }
    }
</script>