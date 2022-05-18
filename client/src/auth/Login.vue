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
          class="labelItem"
        />
      </div>
      <div class="item-login">
        <label for="password" class="labelItem">Mật khẩu :</label>
        <div>
          <el-input
            id="password"
            type="password"
            placeholder="password"
            v-model="form.password"
            class="labelItem"
          />
        </div>
      </div>
      {{ alert1 }}
      <el-button type="primary" @click="handleButtonLogin" class="buttonLogin"
        >Đăng nhập</el-button
      >
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
      alert1: "",
    };
  },
  methods: {
    async handleButtonLogin() {
      const resulf = await this.apiLogin();
      this.alert1 = resulf.message && resulf.message;
      if (resulf.status) {
        localStorage.setItem("token", resulf.data.token);
        await this.$router.push({ name: "/" });
      }
    },
    // call api
    async apiLogin() {
      try {
        const resulf = await myAxios.post("/auth/login", this.form);
        return resulf;
      } catch (error) {
        return error;
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
  border-radius: 5px;
}
.item-login {
  padding: 6px 0px;
}
.labelItem {
  margin: 4px 0px;
}
.buttonLogin {
  width: 100%;
  margin-top: 10px;
}
</style>