<template>
  <div class="barrage-container area">
    <div ref="barrage" class="barrage">
      <vue-danmaku
        class="barrage-panel" :danmus="danmus" use-slot
        :top="40"
        :channels="5"
        loop
        :speeds="50"
        random-channel
      >
        <template #dm="{ danmu }">
          <span
            class="barrage-item"
            :style="{color:danmu.fontColor}"
          >{{ danmu.name }}：{{ danmu.text }}</span>
        </template>
      </vue-danmaku>
      <div class="message-info">
        <p>网站人数：<span>200</span></p>
        <p>浏览总量：<span>2000</span></p>
        <p>总评论量：<span>600</span></p>
      </div>
    </div>
    <!-- 标语 -->
    <div class="slogan">
      藏匿温馨提示：万事不要emo，如果非要，记得拉上你闲着没事干的朋友
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import vueDanmaku from 'vue3-danmaku'
const danmus = ref([
  { name: '一个无聊的人', text: '我开始对你有意思了，所以我想送你一束花，一束不张扬的向日葵，将我所有的思念藏在里面', fontColor: '#3ddcb2' },
  { name: '锅锅', text: '只愿君心似我心，定不负相思意', fontColor: '#bcaf16' },
  { name: '蓦然回首', text: '你好，能不能借一生说话,桥归桥，路归路，我归你，“七”待已久，“夕”望是你，和你走过的每一段路，都是鹊桥，我想变成你，见你所见，爱你所爱', fontColor: '#674395' },
  { name: '微风中的欢喜', text: '希望我是你的小众爱好，藏着时满心欢喜，炫耀时骄傲不已', fontColor: '#fff' }
])
</script>

<style lang="scss" scoped>
.barrage-container {
  height: 650px;
  .barrage {
    position: relative;
    width: 100%;
    height: 600px;
    background: url('@/assets/top_bg.jpg') no-repeat center;
    background-size: cover;
    overflow: hidden;
    .barrage-panel {
      height: calc(100% - 60px);
      margin-top: 100px;
      .barrage-item {
        height: 30px;
        line-height: 30px;
        white-space: nowrap;
        padding: 0 10px;
        border-radius: 30px;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }
    }
    .message-info {
      position: absolute;
      right: 40px;
      bottom: 30px;
      padding: 0 30px;
      color: #fff;
      font-weight: 600;
      p {
        margin: 20px 0;
      }
    }
  }
  .slogan {
    height: 50px;
    background-color: #828080;
    line-height: 50px;
    text-align: center;
    color: #054b0e;
    font-weight: 600;
  }
}

</style>
