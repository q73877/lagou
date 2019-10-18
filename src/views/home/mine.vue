<template>
  <div class="page-home-mine">
    <!-- 二级路由页面，个人中心页 -->
    <div class="loginInfo">
      <!-- 未登录 -->
      <div class="nologin" v-if="!islogin">
        <router-link to="/login" tag="p">登录/注册</router-link>
      </div>
      <!-- 已登录 -->
      <div class="haslogin" v-else>
        <router-link to="/resume" class="resume-router">简历></router-link>
        <div class="headcon">
          <img src="//www.lgstatic.com/images/myresume/default_headpic.png" />
        </div>
        <div class="name">{{this.haslogin.username}}</div>
      </div>
    </div>
    <div class="buttons">
      <div class="but-a" style="display:flex">
        <router-link to="/user/delivery" class="button">
          <span>投递</span>
        </router-link>
        <router-link to="/user/interview" class="button">
          <span>面试</span>
        </router-link>
      </div>
      <div style="display:flex">
        <router-link to="/user/collection" class="button">
          <span>邀约</span>
        </router-link>
        <router-link to="/user/collection" class="button">
          <span>收藏</span>
        </router-link>
      </div>
    </div>
    <van-button type="primary" @click="unlogin" v-if="islogin" class="setfont">退出登录</van-button>
  </div>
</template>

<style lang="scss">
.page-home-mine {
  padding: 0 15px;
  .loginInfo {
    margin: 10px 0;
    .nologin {
      height: 111px;
      width: 125px;
      margin: 0 auto;
      font-size: 20px;
      p {
        color: #fff;
        width: 100%;
        height: 45px;
        text-align: center;
        background: #1fc8a1;
        position: relative;
        top: 33px;
        line-height: 45px;
      }
    }
    .haslogin {
      position: relative;
      width: 100%;
      top: 10px;
      height: 111px;
      .resume-router {
        position: absolute;
        color: #00b38a;
        font-size: 16px;
        right: 0;
        text-decoration: none;
      }
      .headcon {
        height: 81px;
        width: 81px;
        margin: 0 auto;
        overflow: hidden;
        background: #f6f6f6;
        border-radius: 40.5px;
        img {
          width: 72px;
          height: 72px;
          margin: 4px 0 0 5px;
          border-radius: 36px;
        }
      }
      .name {
        color: #333;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  .setfont {
    font-size: 20px;
  }
  .buttons {
    .button {
      float: left;
      display: block;
      height: 86px;
      width: 48%;
      line-height: 86px;
      background: #1fc8a1;
      text-align: center;
      color: #fff;
      margin-top: 10px;
      font-size: 18px;
      &:nth-child(2) {
        margin-left: 12px;
      }
    }
  }
  .van-button {
    width: 100%;
    margin-top: 30px;
    background: #00b38a;
  }
}
</style>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      islogin: false //判断登录状态
    };
  },
  computed: {
    ...mapState("film", ["haslogin"])
  },
  methods: {
    ...mapActions("film", ["setlogin"]),
    // 点击退出登录
    unlogin() {
      window.localStorage.removeItem("userInfo");
      this.setlogin("");
      this.islogin = false;
      this.$router.push("/first");
    }
  },

  created() {
    //console.log(this.haslogin);
    // 判断 登录状态，
    let user = window.localStorage.getItem("userInfo");
    if (user) {
      this.setlogin(JSON.parse(user));
      this.islogin = true;
    }
  }
};
</script>