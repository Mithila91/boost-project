<script setup>
const { data: products, refresh } = await useFetch('/api/products')

const filteredProducts = computed(() =>{
  const filter = {
    vegetarian:true
  }
  return products.value.filter((p) => p.vegetarian === filter.vegetarian)
})


useHead({
  title: 'Title',
  meta: [{ name: 'Name', content: 'My content' }],
})

definePageMeta({
  middleware: "logger"
})

</script>

<template>
  <main>
  <Form @added="refresh"/>
    <div class="m-10 flex flex-wrap justify-evenly space-x-4">
      <Card
        v-for="(product, index) in filteredProducts"
        :product="product"
        :key="index"
        @deleteProduct="refresh"
      />
    </div>

  </main>
</template>
