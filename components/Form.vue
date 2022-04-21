<script setup>
const formData = ref({});
const emit = defineEmits (['added']);

const handleSubmit = async() => {
    const {name, description, image} = formData.value

const productData = {
id:`${Math.floor(Math.random() * 1000)+1000}`,
name,
description,
image
    }
    try{
    await useFetch("api/products",{method: 'post', body: productData})
    emit('added')
    formData.value = {}
    }
    catch(error){
        console.log(error)
    }
}

</script>

<template>
<div class="flex justify-center mt-4">
<form @submit.prevent="handleSubmit">
<div class="mb-4"><label>Namn</label>
<input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
 v-model="formData.name" type="text" placeholder="name" required />
</div>

<div class="mb-4">
<label>Description</label>
<input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
 v-model="formData.description" type="text" placeholder="description" required />
</div>

<div class="mb-4">
<label>Image</label>
<input class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
 v-model="formData.image" type="text" placeholder="image url" required />
</div>

<Button type="submit">Add to cart</Button>
</form>
</div>
</template>