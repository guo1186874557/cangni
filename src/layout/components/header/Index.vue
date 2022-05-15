<template>
  <div class="header-content area">
    <!-- logo -->
    <div class="logo">
      <h1>
        <router-link to="/" class="logo-imgage">
          藏匿
        </router-link>
      </h1>
      <span>藏 匿</span>
    </div>
    <!-- 导航链接 -->
    <div class="nav-links">
      <router-link to="" class="links">
        首页
      </router-link>
      <router-link to="" class="links">
        发现
      </router-link>
    </div>
    <!-- 用户中心 -->
    <div class="user-center">
      <el-dropdown>
        <div class="user-dropdown-link">
          <img src="@/assets/LOGO.png" alt="">
        </div>
        <!-- 登陆成功 -->
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
        <!-- 未登录 -->
        <!-- <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>登陆后，享用全部功能</el-dropdown-item>
          </el-dropdown-menu>
        </template> -->
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.header-content {
  height: 100%;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  .logo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo-imgage {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: url('@/assets/LOGO.png') no-repeat;
      background-size: 100% 100%;
      font-size: 0;
    }
    span {
      font-size: 18px;
      margin-left: 10px;
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    padding-left: 50px;
    .links {
      border: 1px solid #c8c8c8;
      padding: 5px 30px;
      margin: 10px;
      color: #000;
      font-weight: 600;
      transition: all 0.2s;
      background-color: #c8c8c8;
      &:hover {
        background: linear-gradient(to bottom,#526269,#436355);
        border-color: #000;
      }
    }
  }
  .user-center {
    display: flex;
    justify-content: center;
    align-items: center;
    .user-dropdown-link {
      width: 50px;
      height: 50px;
      background-color: pink;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
