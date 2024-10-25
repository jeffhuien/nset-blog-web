<script setup lang="ts"></script>

<template>
  <div flex gap1 size-full id="main">
    <Menu class="w-300px" />
    <div flex="~ col 1" bg-gray-500>
      <router-view></router-view>
    </div>
  </div>
</template>
