
<script setup>
const route = useRoute();
const {data: product} = await useFetch(`/api/product/${route.params.id}`);
definePageMeta({
    middleware: "auth",
});
</script>

<template>
<div class="grid-rows-1 mt-20 w-1/2 mx-auto">
    <Head>
        <Title>{{product.name}}</Title>
        <Meta name="description" content="product.description" />
    </Head>
    <div class="flex px40 rounded-lg shadow-lg shadow-purple-500/50">
    
        <img :src="product.image" width="200" height="200" :alt="product.name" class="object-cover m-5 border shadow-md h-80" loading="lazy">
        <div class="flex flex-col justify-center md:ml-10">
            <h2 class="mb-5 text-5xl font-bold">{{product.name}}</h2>
            <div>
                <p>{{product.description}}</p>
                <br>
                <p> {{product.vegetarian ? "vegeterian" : ""}} </p>
                <br>
                <p> {{product.allergies ? "allergies:" : ""}}</p>
                <ul>
                    <li v-for="allergy in product.allergies" :key="allergy">{{allergy}}</li>
                </ul>
           </div>
        </div>
    </div>
</div>
</template>