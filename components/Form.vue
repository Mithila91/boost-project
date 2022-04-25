<script setup>
const emit = defineEmits(["update-products"]);
const formData = ref({});
const { $listify } = useNuxtApp();
const submitHandler = async() => {
    const {name, description, image, vegetarian, allergies} = formData.value;
  
  let allergyList;
    if (allergies) {
        allergyList = $listify(allergies) ;
    }
    const productData = {
        id: `${Math.floor(Math.random()* 10000) + 1000}`,
        name,
        description,
        image,
        vegetarian: vegetarian ?? false,
        allergies: allergyList ?? [],
    };
    
    try {
    await useFetch("/api/products", {method: "post", body: productData});
    emit("update-products");
    formData.value = {};
    } catch (error) {
        console.log('ERROR');
    }
}
</script>
<template>
    <div class="w-3/3 mt-20 mb-20 ml-10">
        <form class="w-32" @submit.prevent="submitHandler">
            <div>
                <label for="name">Name</label>
                <input v-model="formData.name" id="name" type="text" placeholder="name" required class="block mb-5 text-gray-700 border"/>
               
                <label for="description">Description</label>
                <input v-model="formData.description" id="description" type="text" placeholder="add description" required class="block mb-5 text-gray-700 border"/>
        
                <label for="imageURL">image url</label>
                <input v-model="formData.image" id="imageURL" type="text" placeholder="Add Image" required class="block mb-5 text-gray-700 border"/>
                
                <label for="vegetarian">Vegeterian:</label>
                <input v-model="formData.vegetarian" type="checkbox" id="vegetarian" class="block mb-5 text-gray-700 border"/>
                
                <label for="allergies">add allergies</label>
                <input v-model="formData.allergies" type="input" id="allergies" placeholder="add allergies" required class="block mb-5 text-gray-700 border"/>
            </div>
            <Button type="submit">Add to cart</Button>
        </form>
    </div>
</template>