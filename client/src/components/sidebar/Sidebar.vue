<template>
  <div class="sidebar_body">
    <div class="sidebar_logo">
      <img src="../../assets/logo.png" alt="logo" />
      <h2>TienNLD</h2>
    </div>
    <hr />
    <menu-item />
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "sidebar",
  components: {
    MenuItem,
  },
};
</script>

<style>
.sidebar_body {
  width: 224px;
  height: 100vh;

  padding: 0px 16px;
  background-color: #4e73df;
}
.sidebar_logo {
  display: flex;
  justify-content: center;
  padding: 24px 0px;
  box-sizing: border-box;

  cursor: pointer;
}
.sidebar_logo img {
  width: 32px;
  height: 32px;

  padding-right: 5px;
}

.sidebar_logo h2 {
  color: rgb(155, 225, 190);
  font-weight: 800;
}
hr {
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}
</style>