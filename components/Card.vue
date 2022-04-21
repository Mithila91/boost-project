<script setup>
const emit = defineEmits(['deleteProduct'])
const props = defineProps({
  product: Object,
})
const addToList = () => {
  addToCart(props.product)
}
const handleDelete = async () =>{
    await useFetch("api/products",{method: 'delete', body: props.product.id})
    emit('deleteProduct')
   
}

const { addToCart } = useCart()
</script>

<template>
  <div
    class="flex flex-col p-5 m-5 border rounded-lg shadow-lg shadow-purple-500/50"
  >
    <NuxtLink :to="`/product/${product.id}`">
      <img
        width="200"
        height="200"
        :src="product.image"
        :alt="product.name"
        loading="lazy"
      />
    </NuxtLink>
    <h2 class="my-2 text-xl flex justify-center font-bold">
      {{ product.name }}
    </h2>
    <p class="my-2 flex justify-center">{{ product.description }}</p>
    <Button @click="addToList" class="w-full">add product</Button>
      <Button @click="handleDelete" class="mt-4">delete</Button>
  </div>
</template>
