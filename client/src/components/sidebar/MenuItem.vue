<template>
  <div>
    <div class="menu_body" v-for="(item, index) in data" :key="index">
      <div class="menu_item" @click="item.toggleItem = !item.toggleItem">
        <HomeOutlined class="icon" />
        <p>{{ item.nameItem }}</p>
      </div>
      <ul class="menu_list_item" v-if="item.toggleItem">
        <li v-for="(item01, index01) in item.children" :key="index01">
          <div class="menu_item01">
            <CaretRightOutlined class="icon" />
            <p>{{ item01.nameItem }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { HomeOutlined, CaretRightOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    HomeOutlined,
    CaretRightOutlined,
  },
  data() {
    return {
      data: [
        {
          nameItem: "Trang chủ",
          children: [
            { nameItem: "người lao động" },
            { nameItem: "người lao động" },
            { nameItem: "người lao động" },
          ],
          toggleItem: false,
        },
        {
          nameItem: "Trang chủ",
          children: [
            { nameItem: "người lao động" },
            { nameItem: "người lao động" },
            { nameItem: "người lao động" },
          ],
          toggleItem: false,
        },
      ],
    };
  },
};
</script>

<style>
.menu_body {
  padding: 10px 5px;
}
.menu_item {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
}
.menu_item01 {
  display: flex;
  justify-content: start;
  align-items: center;
  transition: all 3s;
}
.menu_item01 p,
.menu_item p {
  color: rgb(236, 228, 228);
  padding-top: 4px;
  padding-left: 10px;
}
.icon {
  color: rgb(236, 228, 228);
  font-size: 20px;
}
.menu_list_item {
  padding: 5px 0px;
   transition: all 3s ease;
}
.menu_list_item li {
  padding: 5px 20px;
}
.menu_list_item li:hover {
  background-color: rgb(42, 42, 202);
  border-radius: 5px;
}
.menu_item01:hover,
.menu_item:hover {
  background-color: rgb(42, 42, 202);
  border-radius: 5px;
}
</style>