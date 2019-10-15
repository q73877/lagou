<template>
  <div class="page-home-first">
    <!-- 二级路由页面，默认列表页 -->
    <div class="content-f">
      <div class="custom-info">
        <span>10秒钟定制职位</span>
        <router-link to="/editor" class="editor-a">编辑</router-link>
      </div>
      <ul class="list">
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
}
</style>

<script>
import { mapState, mapActions } from "vuex";
// import axios from "axios";

export default {
  computed: {
    ...mapState("film", ["filmList"])
  }
  /* methods: {
    ...mapActions("film", ["getFilmList"])
  },
  created() { */
  /* axios.get("http://localhost:3000/posts").then(response => {
      console.log(response.data);
    }); */
  //this.getFilmList();
  //console.log(this.getFilmList);
  //}
};
</script>
