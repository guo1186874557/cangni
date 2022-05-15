<template>
  <div class="carousel-containe">
    <el-carousel :interval="4000" height="500px">
      <el-carousel-item v-for="item in imgItmes" :key="item.id" class="carousel-item">
        <img :src="item.imgUrl" alt="">
        <div class="iconBox">
          <i :class="item.iconClassName" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang='ts'>
interface imgItemType {
  id:number,
  imgUrl:string,
  iconClassName:string
}
const imgItmes:imgItemType[] = [
  {
    id: 1,
    imgUrl: new URL('../../assets/slide_music.jpg', import.meta.url).href,
    iconClassName: 'iconfont icon-yinle'
  },
  {
    id: 2,
    imgUrl: new URL('../../assets/slide_ph.jpg', import.meta.url).href,
    iconClassName: 'iconfont icon-taiyang'
  },
  {
    id: 3,
    imgUrl: new URL('../../assets/slide_text.jpg', import.meta.url).href,
    iconClassName: 'iconfont icon-xingqiu'
  }
]
</script>

<style lang="scss" scoped>
.carousel-containe {
    width: 1000px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 0;
}
.carousel-item {
  &:hover {
    .iconBox {
      background-color: rgba($color: #000, $alpha: 0.5);
      i {
        opacity: 1;
      }
    }
  }
  .iconBox {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    cursor: pointer;
    i {
      font-size: 200px;
      opacity: 0;
      transition: all 1s;
      color: #99a9bf;
    }
  }
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
