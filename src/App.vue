<script setup lang="ts">
import { changeColor } from "./utils/common";
import VSass from "@/style/variables.module.scss";

onBeforeMount(() => {
  changeColor(VSass["primaryColor"]);
});
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss"></style>
