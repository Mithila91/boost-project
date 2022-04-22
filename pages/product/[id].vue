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
    <div class="flex flex-col justify-center items-center p-5 m-5 border rounded-lg shadow-lg">
       <img
        width="200"
        height="200"
        :src="product.image"
        :alt="product.name"
        loading="lazy"
      />
      <h1 class="">{{product.name}} </h1>
     <p>{{product.description}}</p>  
  </div>
  </div>
</template>
