<script setup>
const emit = defineEmits(["deleteProduct"]);
const props = defineProps({
    product: Object
});
const { addToCart } = useCart();
function addToList() {
    addToCart(props.product);
}
const handleDelete = async() => {
  try {
    await useFetch("/api/products", {method: "delete", body: props.product.id});
    emit("deleteProduct");
    } catch (error) {
        console.log('error');
    } 
}
</script>

<template>
    <div class="flex flex-col p-5 m-5 border rounded-lg shadow-lg shadow-purple-500/50">
    
    <svg @click="handleDelete"
     xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>

        <NuxtLink :to="`/product/${product.id}`">
            <img :src="product.image" width="200" height="200" :alt="product.name" class="object-cover h-52" loading="lazy">
        </NuxtLink>
        <h3 class="mb-3">{{product.name}}</h3>
        <p class="mb-3 text-gray-600">{{product.description}}</p>
        <Button @click="addToList" class="w-full">Adopt puppy</Button>
    </div>
</template>