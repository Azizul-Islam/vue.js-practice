<template>
    <div>
        <h2>{{ msg }}</h2>
        <product-card v-for="product in products" :key="product.name" :product="product" @handle-buy-now="buyNow" @handle-add-to-cart="addToCart" @handle-toggle="handleToggle">
         
        </product-card>
        
       
    </div>
</template>

<script>
    import ProductCard from './ProductCard.vue'
    export default {
        data() {
            return {
                msg: 'Hello This is vue js 3.',
                products: [
                    {
                    name: 'Female Bag',
                    link: 'https://ae01.alicdn.com/kf/S7d282e971c2c45a3984e9f3c6f5d1ba1A.jpg_350x350.jpg_480x480Q90.webp',
                    price: 500,
                    favorite: false,
                    },
                    {
                    name: 'Androide 11',
                    link: 'https://ae01.alicdn.com/kf/Sc9db6ada3a77421f919577f7923b6c6cr.jpg_350x350.jpg_480x480Q90.webp',
                    price: 10120,
                    favorite: true,
                    },
                    {
                    name: 'Brazil T-Shirt',
                    link: 'https://ae01.alicdn.com/kf/A0a13258623914ce08883d1fa446a2c447.jpg_220x220.webp_480x480Q90.webp',
                    price: 1000,
                    favorite: false,
                    },
            ]
            };
        },
        components: {
            ProductCard
        },
        methods: {
            buyNow(product){
                console.log(product);
            },
            addToCart(product){
                console.log(product);
            },
            handleToggle(product){
                product.favorite = !product.favorite;
            }
        }
    }
</script>