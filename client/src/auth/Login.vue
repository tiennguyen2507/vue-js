<template>
  <div class="bodyLogin">
    <div class="containerLogin box-shadow" style="light">
      <div class="item-login">
        <label for="gmail">Gmail :</label>
        <el-input
          id="gmail"
          type="gmail"
          placeholder="gmail"
          v-model="form.gmail"
        />
      </div>
      <div class="item-login">
        <label for="password">Mật khẩu :</label>
        <el-input
          id="password"
          type="password"
          placeholder="password"
          v-model="form.password"
        />
      </div>
      <el-button type="primary" @click="login">Đăng nhập</el-button>
    </div>
  </div>
</template>

<script>
import myAxios from "../api";
import { ElButton, ElInput } from "element-plus";
export default {
  name: "login",
  components: {
    ElButton,
    ElInput,
  },
  data() {
    return {
      form: {
        gmail: "",
        password: "",
      },
      alert1:''
    };
  },
  created() {
  },
  methods: {
    async login() {
      try {
      const resulf = await myAxios.post("/auth/login", this.form);
      console.log(resulf)
      } catch (error) {
      console.log(error)
      }
    },
  },
};
</script>

<style scoped>
.bodyLogin {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.containerLogin {
  width: 350px;

  padding: 20px;
  border-radius: 10px;
}
.item-login {
  padding: 6px 0px;
}
</style>