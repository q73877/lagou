<template>
  <div class="page-home-search">
    <!-- 二级路由页面，搜索页 -->
    <router-link to="/city" class="city-a" tag="span">全国</router-link>
    <van-search
      placeholder="搜索公司名称或职位"
      show-action
      shape="round"
      left-icon
      v-model="searchVal"
      @blur="handsearch"
    >
      <div slot="action" @click="handsearch">
        <i class="iconfont icon-weibiaoti- icon-size"></i>
      </div>
    </van-search>

    <ul class="list">
      <router-link
        tag="li"
        v-for="item in search"
        :key="item.id"
        :to="{path:'/film',query:{ id:item.id }}"
      >
        <img :src="item.img" />
        <div>
          <h2>{{ item.title }}</h2>
          <p>
            <span>{{ item.job }} [{{item.address}}]</span>
            <span>{{item.wage}}</span>
          </p>
          <span class="a-time">{{item.ltime}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
.page-home-search {
  .city-a {
    float: left;
    display: block;
    width: 15%;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .van-search {
    padding: 0;
    width: 85%;
    float: right;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;

    .van-search__content {
      border-radius: 0;
      background: #fff;
    }
    .van-search__action {
      width: 30px;
    }
    .van-cell {
      height: 40px;
      line-height: 30px;
      font-size: 18px;
    }
    .icon-size {
      font-size: 18px !important;
      line-height: 40px;
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
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      searchVal: "",
      search: []
    };
  },
  computed: {
    ...mapState("film", ["filmList"])
  },
  methods: {
    //...mapActions("film", ["getFilmList"]),
    handsearch() {
      if (!this.searchVal) {
        return [];
      }
      this.search = this.filmList.filter(item => {
        return (
          console.log("aa"),
          item.title.indexOf(this.searchVal) > -1 ||
            item.job.indexOf(this.searchVal) > -1
        );
      });
      //return tmp;
    }
  },
  /*  computed: {
    ...mapState("film", ["search"])
  }, */
  created() {
    //this.getFilmList();
    console.log(this.filmList);
  }
};
</script>
