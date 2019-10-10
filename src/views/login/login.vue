<template>
  <div class="page-home-login">
    <!-- 一级路由页面，登录页面 -->
    <p>
      <span>登录拉勾</span>
      <router-link to="/regiter">注册</router-link>
    </p>
  </div>
</template>
<style lang="scss">
.page-home-login {
  height: 100%;
  p {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
}
</style>
