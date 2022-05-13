<template>
  <div class="bodyLogin">
    <div class="containerLogin" style="light">
      <div>
        <label for="gmail">gmail</label>
        <el-input
          id="gmail"
          type="gmail"
          placeholder="gmail"
          v-model="form.gmail"
        />
      </div>
      <div>
        <label for="password">password</label>
        <el-input
          id="password"
          type="password"
          placeholder="password"
          v-model="form.password"
        />
      </div>
      <el-button type="primary">Đăng nhập</el-button>
    </div>
  </div>
</template>

<script>
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
    };
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
.containerLogin{
    width: 350px;

    background-color: aqua;
    padding: 20px;
    border-radius: 10px

}
</style>