<script setup>
const { cart } = useCart()
</script>

<template>
  <header
    class="flex justify-between items-center text-white p-6 h-16 bg-purple-800"
  >
    <NuxtLink to="/">
      <span>LOGO</span>
    </NuxtLink>

    <span>Amount:{{ cart.length }}</span>
  </header>
</template>
