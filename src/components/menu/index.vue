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

const dark = useDark();
const theme = useToggle(dark);
</script>

<template>
  <div class="bg-primary rounded-2xl p-2">
    <router-link v-for="menu in menus" :key="menu.path" :to="menu.path">
      <div class="w-full flex items-center px-4 py-2 text-gray-700 hover:(bg-gray-100 rounded-2xl)">
        <i :class="menu.icon" class="mr-2"></i>
        <span>{{ menu.name }}</span>
      </div>
    </router-link>

    <div @click="theme()" class="transition-all w-full flex items-center px-4 py-2 text-gray-700 hover:(bg-gray-100 rounded-2xl)">
      <i :class="dark ? 'i-mdi-weather-night' : 'i-mdi-weather-sunny'" class="mr-2"></i>
      <span>{{ dark ? "夜间模式" : "日间模式" }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
