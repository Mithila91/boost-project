<script setup>
const route = useRoute()

const { data: product } = await useFetch(`/api/product/${route.params.id}`)
</script>

<template>
  <div>
    <Head>
      <Title>{{ product.name }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
  </div>
</template>
