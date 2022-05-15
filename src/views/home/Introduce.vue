<template>
  <div class="page-introduce">
    <div class="image">
      <img src="@/assets/harbour1.png" alt="">
    </div>
    <div class="content">
      <div class="text-container">
        <div class="text">
          <p>临近冬日的小松鼠会藏匿他的松子，</p>
          <p>一颗一颗的，小心翼翼</p>
          <p>夏末眉眼清澈的少年会藏起他微笑</p>
          <p>的嘴角</p>
          <p>那你呢</p>
          <p>想要藏起一些什么？</p>
          <p>不论是年少的心绪暗涌，还是暮年追</p>
          <p>忆，</p>
          <p>亦或是那些风都不曾知晓得的。。。</p>
          <p>请放在这里吧</p>
        </div>
        <div class="text-right">
          <p class="time">
            2020/05/10
          </p>
          <div class="text-content">
            <p>请将细碎</p>
            <p>的生活点</p>
            <p>滴放在这</p>
            <p>里吧</p>
            <p>[寻找共鸣]</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.page-introduce {
    width: 1000px;
    height: 400px;
    margin: auto;
    background-color: #162548;
    display: grid;
    grid-template-columns: 1fr 2fr;
    .image {
        display: flex;
        justify-content: right;
        align-items: center;
        img {
            width: 300px;
            height: 300px;
            box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.5);
        }
    }
    .content {
        display: flex;
        justify-content: left;
        align-items: center;
        .text-container {
            width: 620px;
            height: 270px;
            background: linear-gradient(135deg,#316db8,#796ad2,#b498b4);
            display: grid;
            grid-template-columns: 4fr 1fr;
            .text {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              p {
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 5px;
                line-height: 25px;
              }
            }
            .text-right {
              position: relative;
              .time {
                position: absolute;
                top: 0;
                left: -10px;
                transform: rotateZ(20deg);
                margin: 30px 0;
                letter-spacing: 2px;
                font-weight: 600;
                color: #131971;
                font-size: 20px;
              }
              .text-content {
                position: absolute;
                left: -10px;
                bottom: 50px;
                text-align: center;
                font-size: 20px;
                letter-spacing: 5px;
                color: #613fa7;
              }
            }
        }
    }
}
</style>
