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
        <form @submit.prevent="submitHandler">
            <div>
                <label for="name" class="font-medium text-m">name</label>
                <input v-model="formData.name" id="name" type="text" placeholder="name" required class="w-60 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
               
                <label for="description" class="font-medium text-m">description</label>
                <input v-model="formData.description" id="description" type="text" placeholder="add description" required class="w-60 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        
                <label for="imageURL" class="font-medium text-m">image url</label>
                <input v-model="formData.image" id="imageURL" type="text" placeholder="Add Image" required class="w-60 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
                
                <label for="allergies" class="font-medium text-m">add allergies</label>
                <input v-model="formData.allergies" type="input" id="allergies" placeholder="add allergies" required class="w-60 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>

                 <label for="vegetarian" class="font-medium text-m">vegeterian:</label>
                <input v-model="formData.vegetarian" type="checkbox" id="vegetarian" class="block mb-5 text-gray-700 border"/>
            </div>
            <div class="flex justify-center"><Button class="px-10" type="submit">Add to cart</Button></div>
            
        </form>
    </div>
</template>