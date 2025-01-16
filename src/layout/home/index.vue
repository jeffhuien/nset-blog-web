<script setup lang="ts"></script>

<template>
  <div id="main" class="flex gap1 size-full">
    <div class="menu noSelect">
      <Menu />
      <Me />
    </div>
    <div flex="~ col 1" bg-gray-500 rounded-2xl overflow-hidden p-2>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.menu {
  @apply h-full flex-col;
  width: $menu-width;
}
</style>
