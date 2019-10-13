<template>
  <div class="page-home-mine">
    <!-- 二级路由页面，个人中心页 -->
    <div class="loginInfo">
      <!-- 未登录 -->
      <div class="nologin">
        <router-link to="/login" tag="p">登录/注册</router-link>
      </div>
      <!-- 已登录 -->
      <div class="haslogin">
        <router-link to="/resume" class="resume-router">简历</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-home-mine {
  .loginInfo {
    padding: 0 15px;
    margin: 10px 0;
    .nologin {
      height: 111px;
      width: 125px;
      margin: 0 auto;
      p {
        color: #fff;
        width: 100%;
        height: 45px;
        text-align: center;
        background: #1fc8a1;
        position: relative;
        top: 33px;
        line-height: 45px;
      }
    }
    .haslogin {
    }
  }
}
</style>
