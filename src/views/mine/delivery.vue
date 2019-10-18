<template>
  <div class="page-mine-delivery">
    <!-- 二级路由页面，个人中心-投递 -->
    <header id="header">
      我的投递
      <div class="left">
        <span class="corner" @click="goBack"></span>
      </div>
      <div class="right">
        <span class="corner"></span>
      </div>
    </header>
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
            <span>
              {{ele.wage}}
              <em @click.stop="dele(ele.id)">删除</em>
            </span>
          </p>
          <span class="a-time">投递时间：{{ ele.time }}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
.page-mine-delivery {
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
            em {
              color: red;
            }
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
  data() {
    return {
      toudi: []
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    // 点击删除按钮
    dele(id) {
      // console.log(this.haslogin);
      //
      let user = this.haslogin.username + "id";
      this.toudi = JSON.parse(window.localStorage.getItem(user));
      //console.log(this.toudi);
      // 获取当前删除的 id
      let num = this.toudi.find((item, index) => {
        if (item.id == id) {
          return index;
        }
      });
      //删除localStorage 里相对应的投递
      this.toudi.splice(num, 1);
      //console.log(this.toudi);
      window.localStorage.setItem(user, JSON.stringify(this.toudi));
      this.$toast.success("删除成功");
    }
  },

  computed: {
    ...mapState("film", ["filmSearch", "haslogin"]),
    // 获取存在 localStorage 投递的公司的 列表
    list() {
      let user = this.haslogin.username + "id" || "";
      this.toudi = JSON.parse(window.localStorage.getItem(user)) || [];
      let tmp = [];
      this.filmSearch.forEach(ele => {
        this.toudi.forEach(item => {
          if (ele.id == item.id) {
            ele.time = item.time;
            tmp.push(ele);
          }
        });
      });
      return tmp;
    }
  }
};
</script>
