<template>
    <div>
        
    <div class="container">
        <h2>{{ msg }}</h2>
        <credit-card v-model:cardName="cardName"
         v-model:cardNumber="cardNumber"
         v-model:expiry="expiry"
         v-model:cvv="cvv"></credit-card>
        <br />
        <br />
        <hr />
        <br />
        <p>
            Name: {{ cardName }} <br />
            Card Number: {{ cardNumber }} <br />
            Expiry: {{ expiry }} <br />
            CVV: {{ cvv }} <br />
        </p>
    </div>
    </div>
</template>

<script>
    import CreditCard from './CreditCard.vue'
    export default {
        data() {
            return {
                msg: 'Credit Card Input',
                cardName: "Azizul Islam",
                cardNumber: '01734567',
                expiry: "",
                cvv: "",
            };
        },
        components: {
            CreditCard
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