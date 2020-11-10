<template>
  <div class="home">
    <img class="img_logo" src="../assets/logo.png" />

    <van-field
      v-model="account"
      label="账号"
      clearable
      type="textarea"
      placeholder="请输入账号"
      rows="1"
      autosize
    />

    <van-field
      v-model="password"
      label="密码"
      clearable
      type="password"
      placeholder="请输入密码"
      rows="1"
      autosize
    />
    <div class="row_g_prompt">
      <span>注册账号</span>
      <span>忘记密码</span>
    </div>

    <button class="bt_login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      account: '',
    }
  },
}
</script>


<style lang="less" scoped>
.home {
  height: 100%;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.img_logo {
  width: 60px;
  height: 60px;
  border: 1px solid grey;
  padding: 5px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 1px #cccccc;
}

.row_g_prompt {
  margin-top: 15px;
  display: flex;
  width: 80%;
  justify-content: space-between;
}

.bt_login {
  margin-top: 30px;
  width: 80%;
  box-shadow: 0 1px 1px grey;
}
</style>
