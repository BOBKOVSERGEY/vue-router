<template>
  <section class="destination">
    <h1>
      {{ destination.name}}
    </h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params: { experienceSlug: experience.slug }}">
          <ExperienceCard
          :experience="experience" />
      </router-link>
    </div>
  </section>

</template>

<script setup>
import ExperienceCard from "@/components/ExperienceCard.vue";
import { useRoute } from "vue-router";
import sourceData from '@/data.json';
import {computed} from "vue";
const route = useRoute();
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
})

const destination = computed(() => sourceData.destinations.find(destination => destination.id === props.id));

</script>