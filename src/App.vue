<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Drink } from './types/drinks'
import DrinksBlock from './components/DrinksBlock.vue'

const loading = ref<boolean>(true)
const data = ref<Drink[]>([])
const error = ref<string | null>(null)

const url: string = 'https://assets.24g.com/public/2022-frontend-test-project/drinks.json'

onMounted(async () => {
  loading.value = true
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Error fetching list of recipes')
    }
    const fetchdData = await response.json()
    data.value = fetchdData.drinks
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div
    id="wrapper"
    class="w-auto h-full bg-mobile md:bg-tablet xl:bg-desktop bg-cover bg-center bg-fixed font-primary"
  >
    <header class="flex items-center p-12">
      <img alt="24G" src="./assets/logo.svg" class="object-cover w-20 md:w-28" />
    </header>

    <main
      class="container mx-auto flex flex-col items-center pt-10 xl:pt-4 pb-16 md:pb-28 px-8 md:px-16"
    >
      <h1 class="text-white text-center font-secondary text-7xl mb-10 leading-normal">
        Welcome Holiday Text
      </h1>
      <p class="text-white leading-loose text-center md:max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio ac ante
        malesuada feugiat. Mauris pretium, nulla ac imperdiet suscipit, nibh enim pellentesque
        sapien, ut hendrerit dolor sapien gravida lacus.
      </p>
      <div id="drinks" class="mt-16">
        <!-- Loading state -->
        <div v-if="loading">Loading...</div>

        <!-- Display DrinksBlock if there's no error -->
        <DrinksBlock v-else-if="!error" :drinks="data" />

        <!-- Display error message if there's an error -->
        <div v-else>Error: {{ error }}</div>
      </div>
    </main>
  </div>
</template>
