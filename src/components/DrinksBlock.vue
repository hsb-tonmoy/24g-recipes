<script setup lang="ts">
import { ref } from 'vue'
import { type Drink } from '../types/drinks'
import DrinkPage from './DrinkPage.vue'

const props = defineProps<{ drinks: Drink[] }>() // Define props for the component
const hoveredDrinkId = ref<number | null>(null) // Define a reactive variable for the hovered drink, to be able to change the image on hover
const showModal = ref<boolean>(false) // Define a reactive variable for the modal state
const selectedDrink = ref<Drink | null>(null) // Define a reactive variable for the selected drink, to be able to pass the drink object to the modal

const openModal = (drink: Drink) => {
  selectedDrink.value = drink
  showModal.value = true
}
</script>

<template>
  <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 xl:gap-12">
    <!-- Loop through the drinks and display them in a grid -->
    <li
      v-for="drink in props.drinks"
      :key="drink.id"
      class="transform transition-transform ease-in-out duration-300 hover:-translate-y-3"
      @mouseover="hoveredDrinkId = drink.id"
      @mouseleave="hoveredDrinkId = null"
      @click="openModal(drink)"
    >
      <img
        :src="hoveredDrinkId === drink.id ? drink.images.back : drink.images.front"
        :alt="drink.name"
      />
    </li>
  </ul>
  <div v-if="selectedDrink" class="fixed inset-0 flex items-center justify-center h-full z-40">
    <button @click="selectedDrink = null" class="absolute top-10 right-10 z-50">
      <img src="../assets/exit_icon.svg" alt="Exit" />
    </button>
    <!-- Modal Content -->
    <div class="w-full max-w-screen-sm xl:max-w-screen-md h-3/4 xl:h-auto px-6 xl:px-0 z-50">
      <DrinkPage :drink="selectedDrink" />
    </div>
    <!-- Background Overlay -->
    <div class="fixed inset-0 bg-black opacity-50" @click="selectedDrink = null"></div>
  </div>
</template>
