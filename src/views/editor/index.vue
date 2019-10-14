<template>
  <div class="page-editor">
    <!-- 一级路由页面，编辑定制职位页面 -->
    <header id="header">
      设置定制信息
      <div class="left">
        <span class="corner"></span>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.page-editor{
  #header{
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color:#fff;
    font-size:16px;
    text-align: center;
    position: relative;
    .left{
      position: absolute;
      left: 0;
      top:0;
      height:100%;
      width:40px;
      .corner{
        width:9px;
        height:20px;
        margin:13px auto 0 auto;
        background:url(https://www.lgstatic.com/images/mobile/asset/common/img/icon2.png) no-repeat -1.5px -20.5px;
        background-size: 250px 250px;
        display: inline-block;
      }
    }
  }
  
}
</style>