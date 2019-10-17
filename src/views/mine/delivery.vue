<template>
  <div class="page-mine-delivery">
    <!-- 二级路由页面，个人中心-投递 -->
    <div class="header">我的投递</div>
    <ul class="list">
      <router-link
        tag="li"
        v-for="ele in list"
        :key="ele.id"
        :to="{path:'/film',query:{ id:ele.id }}"
      >
        <img :src="ele.img" />
        <div>
          <h2>{{ele.title}}</h2>
          <p>
            <span>{{ele.job}} [{{ele.address}}]</span>
            <span>{{ele.wage}}</span>
          </p>
          <span class="a-time">投递时间：{{ ele.time }}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
.page-mine-delivery {
  .header {
    height: 45px;
    line-height: 45px;
    background: #00b38a;
    text-align: center;
    color: #fff;
    font-size: 20px;
    position: relative;
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
import { mapState } from "vuex";
export default {
  /* data() {
    return {
      list: []
    };
  }, */
  computed: {
    ...mapState("film", ["filmSearch"]),
    list() {
      //console.log(this.filmSearch);
      let user = JSON.parse(window.localStorage.getItem("userInfo")) || [];
      user = user.username || "";
      let id = JSON.parse(window.localStorage.getItem(user + "id")) || [];
      let tmp = [];
      this.filmSearch.forEach(ele => {
        id.forEach(item => {
          if (ele.id == item.id) {
            ele.time = item.time;
            tmp.push(ele);
          }
        });
      });
      console.log(id);
      console.log(tmp);
      return tmp;
    }
  }
  /* created() {
    //console.log(this.list);
  } */
};
</script>
