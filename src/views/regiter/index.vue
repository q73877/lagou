<template>
  <div class="page-home-login">
    <!-- 一级路由页面，注册页面 -->
    <header>
      <h2>注册拉勾</h2>
      <!-- 点击切换到登陆页面 -->
      <router-link to="/login" tag="span">登录</router-link>
    </header>
    <!-- vant 组件 输入框 -->
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        right-icon="question-o"
        placeholder="请输入用户名"
        @blur="isRes"
      />

      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="primary" @click="handres" :disabled="falg">注册</van-button>
  </div>
</template>
<style lang="scss">
.page-home-login {
  height: 100%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
  font-size: 18px;
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
    font-size: 20px;
  }
}
</style>

<script>
import axios from "axios";
// 引入 bcryptjs 密码加盐
import bcryptjs from "bcryptjs";
export default {
  data() {
    return {
      username: "", // 绑定用户名输入框
      password: "", // 绑定密码输入框
      falg: true
    };
  },
  methods: {
    // 注册按钮 点击事件
    handres() {
      let that = this;
      if (this.username == "" || this.password == "") {
        this.$toast.fail("用户名或密码不能为空");
        return;
      }
      axios
        .post("http://182.254.161.39:3000/user", {
          username: this.username, // post 请求 向后台发送输入的用户名和密码
          password: bcryptjs.hashSync(this.password, 10) //对密码加盐之后存入数据库
        })
        .then(response => {
          if (response.status === 201) {
            // 注册成功之后自动跳转到登陆页面

            this.$toast.success("注册成功");

            this.$router.replace("/login");
          } else {
            this.$toast.fail("注册失败");
          }
        });
    },
    isRes() {
      let that = this;
      axios.get("http://182.254.161.39:3000/user").then(response => {
        if (response.status === 200) {
          // 请求成功之后 ，判断用户名是否存在
          let tmp = response.data.find(item => {
            return item.username == that.username;
          });
          if (tmp) {
            this.$toast.fail("用户名已存在");

            this.falg = true;
          } else {
            this.falg = false;
          }
        }
      });
    }
  }
};
</script>
