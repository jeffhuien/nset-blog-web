<script setup lang="ts"></script>

<template>
  <div id="main" class="flex gap1 size-full">
    <Menu class="w-300px" />
    <div flex="~ col 1" bg-gray-500 rounded-2xl overflow-hidden p-2>
      <router-view></router-view>
    </div>
  </div>
</template>
