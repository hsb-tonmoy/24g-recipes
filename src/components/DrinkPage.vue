<script setup lang="ts">
import { type Drink } from '../types/drinks'

// Define props for the component
defineProps<{ drink: Drink }>()
</script>

<template>
  <div class="bg-[#1f1f1f] flex flex-col p-10 rounded-2xl overflow-y-auto text-white h-full">
    <h2 class="font-secondary text-5xl md:text-7xl mb-10 leading-normal">
      {{ drink.name }}
    </h2>
    <div class="md:overflow-y-auto md:flex-grow xl:h-80">
      <h6 class="font-bold text-xl mb-4">Ingredients</h6>
      <ul class="flex flex-col gap-2" style="list-style-type: circle">
        <!-- Loop through the ingredients and display them in a list -->
        <li
          v-for="(ingredient, index) in drink.ingredients"
          v-bind:key="index"
          class="ml-4 text-base"
        >
          {{ ingredient }}
        </li>
      </ul>
      <hr class="w-full border-[#393C3E] my-6" />
      <h6 class="font-bold text-xl mb-4">How to prepare</h6>
      <ul class="flex flex-col gap-3">
        <!-- Loop through the steps and display them in a list -->
        <li
          v-for="(step, index) in drink.steps"
          v-bind:key="index"
          class="inline-flex gap-3 text-base"
        >
          <!-- Display the step number and description -->
          <span class="uppercase flex-shrink-0">Step {{ index + 1 }}</span> {{ step }}
        </li>
      </ul>
      <hr class="w-full border-[#393C3E] my-6" />
      <h6 class="font-bold text-xl mb-4">Make it a mocktail</h6>

      <p class="text-base">{{ drink.mocktail }}</p>

      <hr class="w-full border-[#393C3E] my-6" />
      <h6 class="font-bold text-xl mb-4">Glass recomendation</h6>
      <p class="text-base">{{ drink.glassware }}</p>
    </div>
  </div>
</template>
