<template>
  <div class="page-home">
    <!-- 一级路由页面，首页 -->
    <div class="header">拉勾网</div>

    <!-- 二级路由页面坑 -->
    <router-view></router-view>

    <ul class="navbar">
      <router-link tag="li" to="/first">
        <i class="iconfont icon-shouye"></i>
        <span>职位</span>
      </router-link>
      <router-link tag="li" to="/search">
        <i class="iconfont icon-weibiaoti-"></i>
        <span>搜索</span>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-weibiaoti-1"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>


<style lang="scss">
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > div:nth-child(2) {
    flex: 1;
    overflow-y: auto;
  }
  .header {
    height: 45px;
    line-height: 45px;
    background: #00b38a;
    text-align: center;
    color: #fff;
    font-size: 20px;
    position: relative;
  }
  .navbar {
    height: 46px;
    display: flex;
    background: #e7f3f0;
    z-index: 999;
    border-top: 1px solid #e8e8e8;
    li {
      flex: 1;
      justify-content: center;
      height: 100%;
      line-height: 46px;
      text-align: center;
      color: #c2cfcc;
      font-size: 16px;
      &.router-link-active {
        color: #00b38a;
        background: #e7f3f0;
      }
    }
  }
}
</style>
