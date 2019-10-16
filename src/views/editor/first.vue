<template>
  <div class="page-first">
    <div id="content">
      <ul class="custom-info">
        <li>
          <span class="header">职位类型</span>
          <router-link to="/editor/job" class="desc">
            <em class="empty">请选择期望职位</em>
          </router-link>
        </li>
        <li>
          <span class="header">工作地点</span>
          <router-link to="/editor/job" class="desc">
            <em class="empty">请选择工作地点</em>
          </router-link>
        </li>
        <li>
          <span class="header">期望薪水</span>
          <router-link to="/editor/salary" class="desc">
            <em class="empty">请选择期望薪水</em>
          </router-link>
        </li>
        <li>
          <span class="header">公司规模</span>
          <router-link to="/editor/stages" class="desc">
            <em class="empty">请选择公司规模</em>
          </router-link>
        </li>
      </ul>

      <div class="search">开始搜索</div>
    </div>
  </div>
</template>
<style lang="scss">
.page-first {
  height: 100%;
  #content {
    margin-bottom: 45px;
    .custom-info {
      padding: 20px;
      .header {
        display: block;
        color: #ccc;
        font-size: 12px;
      }
      .desc {
        display: block;
        margin: 10px 0 20px 0;
        text-align: center;
        height: 62.5px;
        line-height: 62.5px;
        color: #333;
        font-size: 15px;
        background-color: #f0f0f0;
        border-radius: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 10px;
        .empty {
          color: #00b38a;
          font-style: normal;
        }
      }
    }
    .search {
      height: 45px;
      line-height: 45px;
      color: #fff;
      background-color: #00b38a;
      font-size: 16px;
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>