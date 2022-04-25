<script setup>
const emit = defineEmits(['deleteProduct'])
const props = defineProps({
  product: Object,
})
const addToList = () => {
  addToCart(props.product)
}
const handleDelete = async () => {
  await useFetch('api/products', { method: 'delete', body: props.product.id })
  emit('deleteProduct')
}

const { addToCart } = useCart()
</script>

<template>
  <div
    class="flex flex-col p-5 m-5 border rounded-lg shadow-lg shadow-purple-500/50"
  >
    <svg
      @click="handleDelete"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
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
    <p>{{ product.vegetarian ? 'Yes' : 'No' }}</p>
    <h2 v-if="product.allergies?.length">allergies</h2>
    <li v-for="allergy in product.allergies" :key="allergy">{{ allergy }}</li>
    <Button @click="addToList" class="w-full">add product</Button>
  </div>
</template>
