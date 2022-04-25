<script setup>
const { cart } = useCart();
</script>

<template>
    <div class="min-h-screen">
        <div v-if="!cart.length">
            <p class="text-5xl font-bold">cart is empty</p>
        </div>
        <div v-else v-for="(product, index) in cart" :product="product" :key="index">
            <div class="mt-20 flex flex-col justify-center items-center">
                <img :src="product.image" width="100" height="100" :alt="product.name" class="object-cover h-10 mb-3" loading="lazy">
                <span>{{product.name}}</span>
                 <span>{{product.description}} </span>
                 <span>Quantity:{{product.quantity}}</span>
             
            </div>
        </div>
    </div>
</template>