<template>
  <div class="page-home-login">
    <!-- 一级路由页面，登录页面 -->
    <header>
      <h2>登录拉勾</h2>
      <!-- vant 组件 -->
      <router-link to="/regiter" tag="span">注册</router-link>
    </header>
    <van-cell-group>
      <van-field v-model="username" clearable right-icon="question-o" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="primary" @click="handlogin">登录</van-button>
  </div>
</template>
<style lang="scss">
.page-home-login {
  height: 100%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
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
import { mapActions } from "vuex";
import bcryptjs from "bcryptjs";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("film", ["setlogin"]),
    // 点击登录
    handlogin() {
      let that = this;
      axios.get("http://localhost:3000/user").then(response => {
        //console.log(response);
        if (response.status === 200) {
          let tmp = response.data.find(item => {
            return item.username == that.username;
          });
          if (tmp) {
            // 登录成功
            // console.log("ggg");
            let psd = response.data.find(item => {
              return bcryptjs.compareSync(that.password, item.password);
            });
            if (psd) {
              //console.log("psd");

              window.localStorage.setItem(
                "userInfo",
                JSON.stringify({ username: JSON.stringify(that.username) })
              );
              alert("登录成功");
              let redirect = this.$route.query.redirect || "/first";
              this.$router.replace(redirect);
              this.setlogin(window.localStorage.getItem("userInfo"));
            }
          } else {
            alert("用户名或密码错误");
          }
        }
      });
    }
  },
  mounted() {
    //console.log(this.setlogin);
  },
  created() {}
};
</script>
