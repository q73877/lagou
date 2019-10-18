<template>
  <div class="page-home-first">
    <!-- 二级路由页面，默认列表页 -->
    <div class="content-f">
      <div class="custom-info">
        <span>10秒钟定制职位</span>
        <router-link to="/editor" class="editor-a">编辑</router-link>
      </div>
      <ul class="list">
        <!-- 点击之后 query 当前点击的 id 到详情页 -->
        <router-link
          tag="li"
          v-for="film in filmList"
          :key="film.id"
          :to="{path:'/film',query:{ id:film.id }}"
        >
          <img :src="film.img" />
          <div>
            <h2>{{ film.title }}</h2>
            <p>
              <span>{{ film.job }} [{{ film.address }}]</span>
              <span>{{ film.wage }}</span>
            </p>
            <span class="a-time">{{ film.ltime }}</span>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="loading" @click="addLodding">{{loadele}}</div>
  </div>
</template>

<style lang="scss">
.page-home-first {
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
      display: flex;
      img {
        float: left;
        width: 60px;
        height: 60px;
      }
      div {
        margin-left: 10px;
        height: 62px;
        width: 100%;
        color: #333;
        h2 {
          font-size: 16px;
          margin-bottom: 6px;
          width: 80%;
          overflow: hidden;
          white-space: nowrap;
          font-weight: bold;
        }
        p {
          margin-bottom: 6px;
          width: 100%;
          height: 15px;
          line-height: 15px;
          color: #333;
          font-size: 14px;
          display: block;
          span:nth-child(2) {
            float: right;
            font-size: 16px;
            color: #00b38a;
          }
        }
      }
      .a-time {
        color: #333;
        font-size: 12px;
      }
    }
  }
  .loading {
    height: 52px;
    line-height: 50px;
    text-align: center;
  }
}
</style>

<script>
import { mapState, mapActions } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      num: 10,
      loadele: "加载更多"
    };
  },
  computed: {
    // 用于每次显示 10 条的列表仓库数据
    ...mapState("film", ["filmList"]),
    // 用于加载更多并判断是否加载了所有数据
    ...mapState("film", ["filmSearch"])
  },
  watch: {
    num(newVal) {
      // 监听加载数量 加载所有数据后
      if (this.filmSearch.length <= newVal) {
        this.loadele = "没有更多了！";
        return;
      }
    }
  },
  methods: {
    // 用于向 ajax 传参 加载的条数
    ...mapActions("film", ["getFilmList"]),
    // 点击加载更多 每次加载 10 条
    addLodding() {
      // alert("dd");
      //console.log(this.filmSearch.length);
      if (this.filmSearch.length <= this.num) {
        // 加载所有数据后 不在执行调用请求
        return;
      }
      this.num += 10;
      console.log(this.num);
      this.getFilmList(this.num);
    }
  }
};
</script>
