<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
    >
      {{destination.name}}
    </router-link>
  </div>
</template>

<script setup>
import sourceData from '@/data.json';
import {ref} from "vue";
const destinations = ref(sourceData.destinations);
</script>