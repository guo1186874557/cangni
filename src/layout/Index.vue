<template>
  <el-container class="container">
    <el-header class="header" height="80px">
      <Header />
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer class="footer" height="520px">
      <Footer />
    </el-footer>
    <audio
      ref="mp3" class="mp3" src="./mang.mp3"
      loop
    />
    <div class="bofang" @click="boofang">
      <i v-if="isBofang" class="iconfont icon-zanting" />
      <i v-if="!isBofang" class="iconfont icon-bofang" />
    </div>
  </el-container>
</template>

<script setup lang='ts'>
import Header from './components/header/Index.vue'
import Footer from './components/footer/Index.vue'
import { ref } from 'vue'
const mp3 = ref<HTMLAudioElement | null>(null)
const isBofang = ref<boolean>(false)
const boofang = () => {
  if (mp3.value?.paused) {
    mp3.value?.play()
    isBofang.value = !mp3.value?.paused
  } else {
    mp3.value?.pause()
    isBofang.value = !mp3.value?.paused!
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  background-color: #000000;
  .bofang {
    position: fixed;
    width: 50px;
    height: 50px;
    background-color: #fff;
    top: 60%;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    i {
      font-size: 40px;
    }
  }
}
.header {
  background-color: rgba($color: #000, $alpha: 0.3);
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(5px);
  z-index: 999;
}
.footer {
  margin-top: 50px;
}
.mp3 {
  display: none;
}

</style>
