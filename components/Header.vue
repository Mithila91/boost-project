<script setup>
const { cart } = useCart();
const cartCount = computed(() => cart.value.reduce((total, cartProduct) => total += cartProduct.quantity, 0));
</script>

<template>
    <header>
        <div class="flex items-center justify-between h-20 px-20 text-white bg-purple-300">
            <NuxtLink to="/">
            <span class="text-4xl">LOGO</span>
            </NuxtLink>
            <NuxtLink to="/cart">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                    <span class="ml-3">{{ cartCount }}</span>
                </div>
            </NuxtLink>
        </div>
    </header>
</template>
