<script setup lang="ts">
import { type Drink } from '../types/drinks'

defineProps<{ drink: Drink; showModal: boolean }>()
defineEmits(['update:showModal'])
</script>

<template>
  <div class="bg-[#1f1f1f] flex flex-col p-10 rounded-2xl overflow-y-auto text-white h-full">
    <h2 class="font-secondary text-7xl mb-10 leading-normal">
      {{ drink.name }}
    </h2>
    <div class="md:overflow-y-auto md:flex-grow xl:h-80">
      <h6 class="font-bold text-xl mb-4">Ingredients</h6>
      <ul
        class="flex items-center"
        style="list-style-type: circle"
        v-for="(ingredient, index) in drink.ingredients"
        v-bind:key="index"
      >
        <li class="ml-4 mb-2 text-base">{{ ingredient }}</li>
      </ul>
      <hr class="w-full border-[#393C3E] my-6" />
      <h6 class="font-bold text-xl mb-4">How to prepare</h6>
      <ul class="flex items-center" v-for="(step, index) in drink.steps" v-bind:key="index">
        <li class="inline-flex gap-3 mb-3 text-base">
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
