<script setup lang="ts">
import type { ArticleModel } from "types/article";
const data = ref<ArticleModel[]>([]);

const getData = async () => {
  let res = await articleApi.getArticleList();
  data.value = res.data;
};

getData();
</script>

<template>
  <div>
    <div class="flex flex-col gap-3">
      <TransitionGroup name="list">
        <ArticleBox :style="{ transitionDelay: index * 200 + 'ms' }" :data="item" v-for="(item, index) in data" :key="item.id" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
