<template>
  <div class="page-home-search">
    <!-- 二级路由页面，搜索页 -->
    <div class="wrap">
      <div>
        <router-link to="/city" class="city-a" tag="span">{{city}}</router-link>
        <van-search
          placeholder="搜索公司名或职位"
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
    </div>
  </div>
</template>

<style lang="scss">
.page-home-search {
  .wrap {
    height: 575px;
  }
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
import BScroll from "better-scroll";
export default {
  data() {
    return {
      city: "全国",
      searchVal: "", // 绑定搜索框
      search: [] // 搜索过来的数据列表
    };
  },
  computed: {
    // 获取仓库中的数据列表
    ...mapState("film", ["filmSearch"])
  },
  methods: {
    //...mapActions("film", ["getSearch"]),
    // 点击搜索
    handsearch() {
      if (this.$route.params.city) {
        if (!this.searchVal) {
          this.search = this.filmSearch.filter(item => {
            return item.address === this.$route.params.city;
          });
        } else {
          this.search = this.filmSearch.filter(item => {
            return (
              item.address === this.$route.params.city &&
              (item.title.indexOf(this.searchVal) > -1 ||
                item.job.indexOf(this.searchVal) > -1 ||
                item.pingying.indexOf(this.searchVal.toLowerCase()) > -1 ||
                item.jobpy.indexOf(this.searchVal.toLowerCase()) > -1)
            );
          });
        }
      } else {
        if (!this.searchVal) {
          return;
        } else {
          this.search = this.filmSearch.filter(item => {
            return (
              //console.log("aa"),
              // 公司名搜索
              item.title.indexOf(this.searchVal) > -1 ||
              item.job.indexOf(this.searchVal) > -1 ||
              item.pingying.indexOf(this.searchVal.toLowerCase()) > -1 ||
              item.jobpy.indexOf(this.searchVal.toLowerCase()) > -1
            );
          });
        }
      }
    }
  },
  mounted() {
    let better = new BScroll(".wrap", {
      click: true
    });
  },
  created() {
    //console.log(typeof this.$route.params.city);

    if (this.$route.params.city) {
      this.city = this.$route.params.city;
    }
  }
};
</script>
