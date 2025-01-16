<script setup lang="ts">
import { custom_formatDate } from "@/utils";
import type { ArticleModel } from "types/article";

const ps = defineProps<{
  data: ArticleModel;
}>();
</script>

<template>
  <div class="rounded-lg bg-conbg p-2">
    <div class="header my-3 text-center">
      <div class="title font700 text-xl">{{ data.title }}</div>
      <div class="info center text-sm text-gray-800">
        <div class="author">{{ data?.author }}</div>
        <div class="time">{{ custom_formatDate(data.createdAt) }}</div>
      </div>
    </div>
    <div class="body">
      <div>
        {{ data.content }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
