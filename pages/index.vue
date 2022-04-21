<script setup>
const { data: products, refresh } = await useFetch('/api/products')

useHead({
  title: 'Title',
  meta: [{ name: 'Name', content: 'My content' }],
})
</script>

<template>
  <main>
  <Form @added="refresh"/>
    <div class="m-10 flex flex-wrap justify-evenly space-x-4">
      <Card
        v-for="(product, index) in products"
        :product="product"
        :key="index"
        @deleteProduct="refresh"
      />
    </div>

  </main>
</template>
