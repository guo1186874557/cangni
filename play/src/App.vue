<script setup lang="ts">
import Play from "./Play.vue";
</script>

<template>
  <Play v-for="item in 1000" :key="item"></Play>
</template>

<style scoped></style>
