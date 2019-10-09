<template>
  <div class="page-home">
    <!-- 一级路由页面，首页 -->

    <!-- 二级路由页面坑 -->
    <router-view></router-view>

    <ul class="navbar">
      <router-link tag="li" to="/">
        <span>职位</span>
      </router-link>
      <router-link tag="li" to="/">
        <span>搜索</span>
      </router-link>
      <router-link tag="li" to="/">
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>