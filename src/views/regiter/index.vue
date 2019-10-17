<template>
  <div class="page-home-login">
    <!-- 一级路由页面，登录页面 -->
    <header>
      <van-popup v-model="show" :overlay="false" class="toudi">{{loginView}}</van-popup>
      <h2>注册拉勾</h2>
      <!-- vant 组件 -->
      <router-link to="/login" tag="span">登录</router-link>
    </header>
    <van-cell-group>
      <van-field v-model="username" clearable right-icon="question-o" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="primary" @click="handres">注册</van-button>
  </div>
</template>
<style lang="scss">
.page-home-login {
  height: 100%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
  .toudi {
    color: blue;
    font-size: 24px;
    background: #ccc;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  header {
    position: relative;
    top: 30px;
    display: flex;
    justify-content: space-between;
    h2 {
      color: #333;
      font-weight: 400;
      font-size: 24px;
    }
    span {
      color: #00b38a;
    }
  }
  .van-cell-group {
    margin-top: 100px;
    .van-cell {
      height: 60px;
      color: #333;
      font-size: 20px;
      line-height: 60px;
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
import axios from "axios";
import bcryptjs from "bcryptjs";
export default {
  data() {
    return {
      username: "",
      password: "",
      show: false,
      loginView: ""
    };
  },
  methods: {
    handres() {
      let that = this;
      axios
        .post("http://localhost:3000/user", {
          username: this.username,
          password: bcryptjs.hashSync(this.password, 10)
        })
        .then(response => {
          //console.log(response);
          if (response.status === 201) {
            let redirect = this.$route.query.redirect || "/login";

            (that.loginView = "注册成功"), (that.show = true);
            setTimeout(() => {
              that.show = false;
              this.$router.replace(redirect);
            }, 1500);
          } else {
            (that.loginView = "注册失败"), (that.show = true);
            setTimeout(() => {
              that.show = false;
            }, 1500);
          }
        });
    }
  }
};
</script>
