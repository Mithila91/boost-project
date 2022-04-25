<script setup>
const { cart } = useCart()

//console.log(cart.value)
</script>
<template>
  <div v-if="!cart.length"><p>Product not shown</p></div>
  <div v-for="product in cart" :key="index">
    <p>{{ product.quantity }}</p>
  </div>
</template>
