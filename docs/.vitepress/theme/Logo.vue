<script setup lang="ts"></script>

<template>
  <div class="logo_wrap">
    <video class="logo" autoplay muted loop src="/logo.webm"></video>
  </div>
</template>

<style scoped>
.logo_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.logo {
  width: 192px;
  height: 192px;
  border-radius: 50%;
}

@media screen and (min-width: 640px) {
  .logo {
    width: 256px;
    height: 256px;
  }
}
@media screen and (min-width: 960px) {
  .logo {
    width: 320px;
    height: 320px;
  }
}
</style>
