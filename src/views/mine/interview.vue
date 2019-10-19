<template>
  <div class="page-mine-collection">
    <!-- 二级路由页面，个人中心-面试 -->
    <header id="header">
      我的面试
      <div class="left">
        <span class="corner" @click="goBack"></span>
      </div>
      <router-link class="right" to="/first">
        <span class="corner"></span>
      </router-link>
    </header>
  </div>
</template>

<style lang="scss">
.page-mine-collection {
  #header {
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color: #fff;
    font-size: 18px;
    text-align: center;
    position: relative;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 40px;
      .corner {
        width: 9px;
        height: 20px;
        margin: 13px auto 0 auto;
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon2.png)
          no-repeat -1.5px -20.5px;
        background-size: 250px 250px;
        display: inline-block;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 40px;
      .corner {
        width: 17px;
        height: 20px;
        margin: 13px auto 0 auto;
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon2.png)
          no-repeat -60px -46.5px;
        background-size: 250px 250px;
        display: inline-block;
      }
    }
  }
}
</style>
<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>