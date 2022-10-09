<template>

    <div class="card">
        <div class="card-title">{{ product.name }}
            <img src="star.png" v-if="product.favorite" alt="" @click="toggleClick">
            <img src="un-star.png" v-else alt="" @click="toggleClick">
        </div>
        <div class="card-body">
            <p>
                <img :src="product.link">
            </p>
            <p>
                {{ product.price }}
            </p>
        </div>
        <div class="card-footer">
            <button @click="handleBuyNow">Buy Now</button>
            <button @click="handleAddTocart">Add To Cart</button>
        </div>
    </div>

</template>

<script>
    export default {
        emits: {
            "handle-buy-now": function(data){
                if(!data){
                    console.error('data missing')
                    return false;
                }
                return true;
            }
        },
        props: {product: {type: Object, default: () =>({})}},
        mounted() {
            console.log(this.$slots.footer)
        },
        methods: {
            handleBuyNow(){
                this.$emit('handle-buy-now')
            },  
            handleAddTocart(){
                this.$emit('handle-add-to-cart', this.product)
            },
            toggleClick(){
                this.$emit('handle-toggle', this.product);
            }
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
        text-align: center;
    }
    .card-footer{
        background: gray;
        color: #fff;
        padding: 5px 10px;
    }
    .card-body img{
        height: 100px;
    }
</style>