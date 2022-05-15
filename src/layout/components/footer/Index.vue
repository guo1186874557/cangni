<template>
  <div class="footer-centent area">
    <div class="item">
      <h3>关于我们</h3>
      <p>没啥可好奇的</p>
      <p>普通且无聊</p>
      <p>的人</p>
      <p>主要也是想听听</p>
      <p>你的故事</p>
      <p>唉，过分文艺了</p>
    </div>
    <div class="item">
      <h3>服务</h3>
      <p>应该不会有什么问题</p>
      <p>有问题你就</p>
      <p>你就...</p>
      <p>唉</p>
      <p>再说吧</p>
    </div>
    <div class="item">
      <h3>团队介绍</h3>
      <p>人员一：</p>
      <p>无聊且无聊的人</p>
      <p>人员一：</p>
      <p>不明所以且无聊的人</p>
    </div>
    <div class="item">
      <h3>网站二维码</h3>
      <img src="@/assets/erweima.jpg" alt="" class="erweima">
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.footer-centent {
  height: 100%;
  background: url('@/assets/bottom_bg.jpg') no-repeat center;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  justify-items: center;
  align-items: center;
  .item {
    width: 235px;
    height: 335px;
    background-color: rgba($color: #fff, $alpha: 0.5);
    text-align: center;
    h3 {
      letter-spacing: 5px;
      margin: 40px 0;
    }
    p {
      line-height: 30px;
      letter-spacing: 3px;
    }
    .erweima {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
