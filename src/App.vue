<script setup lang="ts">
import { changeColor } from "./utils/common";
import VSass from "@/style/variables.module.scss";

onBeforeMount(() => {
  changeColor(VSass["primaryColor"]);
});
</script>

<template>
  <main class="size-full p-2">
    <router-view></router-view>
  </main>
</template>

<style lang="scss"></style>
