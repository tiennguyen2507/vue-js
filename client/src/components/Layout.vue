<template>
  <div class="layout_body">
    <Sidebar />
    <div>
      <el-button type="primary" @click="handleLogOut" class="button_logout"> Log out! </el-button>
    </div>
    <MessageOutlined />
  </div>
</template>

<script>
import { ElButton } from "element-plus";
import { setOrDeleteAuthorizationHeader } from "../api";

import Sidebar from "./sidebar/Sidebar.vue"
export default {
  name: "HelloWorld",
  components: {
    ElButton,
    Sidebar,
  },
  mounted() {
    setOrDeleteAuthorizationHeader();
  },
  methods: {
    handleLogOut() {
      localStorage.removeItem("token");
      setOrDeleteAuthorizationHeader();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout_body{
  display: flex;

}
</style>
