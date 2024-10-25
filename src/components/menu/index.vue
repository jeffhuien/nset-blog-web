<script setup lang="ts">
const menus = reactive<
  {
    name: string;
    path: string;
    icon: string;
  }[]
>([
  {
    name: "首页",
    path: "/home",
    icon: "i-mdi-home",
  },
  {
    name: "关于",
    path: "/about",
    icon: "i-mdi-microsoft-azure",
  },
  {
    name: "文章",
    path: "/article",
    icon: "i-mdi-text",
  },
  {
    name: "登录",
    path: "/login",
    icon: "i-mdi-account",
  },
]);
</script>

<template>
  <div class="bg-primary">
    <router-link v-for="menu in menus" :key="menu.path" :to="menu.path">
      <div class="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
        <i :class="menu.icon" class="mr-2"></i>
        <span>{{ menu.name }}</span>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
