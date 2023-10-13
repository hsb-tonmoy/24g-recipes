<script setup lang="ts">
import { type Drink } from '../types/drinks'

const props = defineProps<{ drinks: Drink[] }>()

console.log(props.drinks)
</script>

<template>
  <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
    <li v-for="drink in props.drinks" :key="drink.id">
      <img :src="drink.images.front" :alt="drink.name" />
    </li>
  </ul>
</template>
