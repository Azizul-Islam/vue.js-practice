<template>
    <div class="credit-card">
        <label>Card Name</label>
        <input type="text" :value="cardName" @input="handleName"><br>
        <lebel>Card Number</lebel>
        <input type="text" :value="cardNumber" @input="handleNumber"><br>
        <div class="row">
            <div class="col-6">
                <lebel>Expiry</lebel>
                <input type="text" :value="expiry" @input="handleExpiry">
            </div>
            <div class="col-6">
                <lebel>CVV</lebel>
                <input type="text" :value="cvv" @input="handleCvv">
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
        props: {
            cardName: {
                type: String,
                default: 0,
            },
            cardNumber: {
                type: Number,
                default: 0
            },
            expiry: {
                type: String,
            },
            cvv: {
                type: Number,
            }

        },
        methods: {
            handleName(e){
                this.$emit('update:cardName', e.target.value);
            },
            handleNumber(e){
                this.$emit('update:cardNumber', e.target.value);
            },
            handleExpiry(e){
                this.$emit('update:expiry', e.target.value);
            },
            handleCvv(e){
                this.$emit('update:cvv', e.target.value);
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
    input{
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
</style>