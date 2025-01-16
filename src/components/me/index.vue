<script setup lang="ts"></script>

<template>
  <div class="bg-conbg itemBox flex-col gap-10">
    <div text-center flex-col items-center>
      <el-avatar :size="100" src="/img/avatar.svg" alt="" />
      <span text-center text-2xl> gaogao</span>
    </div>
    <div text-xs text-center text-textColor>再平凡的人也有属于他的梦想 ✨</div>
    <div class="flex justify-between items-center w-full text-xs">
      <div class="Block">
        <div>80</div>
        <div>日志</div>
      </div>
      <div class="Block">
        <div>80</div>
        <div>日志</div>
      </div>
      <div class="Block">
        <div>80</div>
        <div>日志</div>
      </div>
    </div>

    <div class="flex justify-center items-center gap-5">
      <div flex text-xs items-center gap1>
        <div class="text-2xl i-mdi-github"></div>
      </div>
      <div flex text-xs items-center gap1>
        <div class="text-2xl i-mdi-gitlab"></div>
      </div>
      <div flex text-xs items-center gap1>
        <div class="text-2xl i-mdi-email"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Block {
  & div:first-child {
    font-weight: 700;
  }
  & div:last-child {
    font-weight: normal;
  }
  &:not(:last-child)::after {
    content: "";
    background: #dddddd7a;
    display: block;
    width: 1px;
    height: 80%;
    position: absolute;
    right: 10px;
    top: 10%;
  }
  @apply center flex-col gap-1 flex-1 relative text-textColor;
}
</style>
