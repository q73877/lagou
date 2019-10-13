<template>
  <div class="page-home-first">
    <!-- 二级路由页面，默认列表页 -->
    <div class="content-f">
      <div class="custom-info">
        <span>10秒钟定制职位</span>
        <router-link to="/editor" class="editor-a">编辑</router-link>
      </div>
      <ul class="list">
        <li>
          <img src="//www.lgstatic.com/i/image2/M01/7B/04/CgotOVtxRgOAYwR6AAAJqpibehU283.jpg" />
          <div>
            <h2>ImageDT图匠数据</h2>
            <p>
              <span>高级java开发工程师 [ 广州 ]</span>
              <span>20k-30k</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.page-home-first {
  .content-f {
    margin-bottom: 45px;
  }
  .custom-info {
    border-bottom: 1px solid #e8e8e8;
    height: 43px;
    padding: 0 15px;
    color: #555;
    font-size: 16px;
    position: relative;
    display: flex;
    justify-content: space-between;
    span {
      line-height: 43px;
    }
    .editor-a {
      position: absolute;
      right: 15px;
      display: block;
      top: 0;
      float: right;
      background: #f5f5f5;
      padding: 0 20px;
      height: 30px;
      margin-top: 6px;
      color: #00b38a;
      border-radius: 15px;
      text-decoration: none;
      line-height: 30px;
    }
  }
  .list {
    li {
      padding: 14px;
      border-bottom: 1px solid #e8e8e8;
      display: list-item;
    }
  }
}
</style>
