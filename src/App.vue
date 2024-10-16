<script setup lang="ts">
import { changeColor } from "./utils/common";
import VSass from "@/style/variables.module.scss";

onBeforeMount(() => {
  changeColor(VSass["primaryColor"]);
});
</script>

<template>
  <div size-screen center text-100px text-primary>
    <div class="i-mdi-hail"></div>
    <div>hello</div>
  </div>
</template>

<style lang="scss"></style>
