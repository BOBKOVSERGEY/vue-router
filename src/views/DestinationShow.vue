<template>
  <section class="destination" v-if="destination">
    <h1>
      {{ destination.name}}
    </h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>

</template>

<script setup>
import { useRoute } from "vue-router";
import sourceData from '@/data.json';
import {computed, onMounted, ref, watch} from "vue";
const route = useRoute();
const destination = ref({});
//const destinationId = computed(() => +route.params.id);
//const destination = computed(() => sourceData.destinations.find(destination => destination.id === destinationId.value));

onMounted(async () => {
  await initData();
})

watch(
    () => route.params,
    initData
);

async function initData() {
  const response =  await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
  destination.value = await response.json()
}

</script>