<script setup>
const formData = ref({})

const {$listify} = useNuxtApp()
const emit = defineEmits(['added'])

const handleSubmit = async () => {
  const { name, description, image, allergies, vegetarian } = formData.value

  let allergyList
  if (allergies) {
    allergyList = $listify(allergies)
  }

  const productData = {
    id: `${Math.floor(Math.random() * 1000) + 1000}`,
    name,
    description,
    image,
    vegetarian,
    allergies: allergyList ? allergyList : [],
  }
  try {
    await useFetch('api/products', { method: 'post', body: productData })
    emit('added')
    formData.value = {}
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex justify-center mt-4">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label>Namn</label>
        <input
          class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="formData.name"
          type="text"
          placeholder="name"
          required
        />
      </div>

      <div class="mb-4">
        <label>Description</label>
        <input
          class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="formData.description"
          type="text"
          placeholder="description"
          required
        />
      </div>

      <div class="mb-4">
        <label>Image</label>
        <input
          class="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="formData.image"
          type="text"
          placeholder="image url"
          required
        />
      </div>
      <div class="mb-4">
        <label>Allergies</label>
        <input
          class="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="formData.allergies"
          type="text"
          placeholder="allergies"
        />
      </div>
      <div class="mb-4">
        <label>Vegeterian</label>
        <input
          v-model="formData.vegetarian"
          id="vegetarian"
          type="checkbox"
          placeholder="vegeterian"
        />
      </div>

      <Button type="submit">Add to cart</Button>
    </form>
  </div>
</template>
