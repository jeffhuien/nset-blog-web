<script setup lang="ts">
import type { FormInstance } from "element-plus";

const model = defineModel<Record<string, field>>("model", {
  default: {},
});

const rules = computed(() => {
  return Object.fromEntries(Object.keys(model.value).map(item => [item + ".value", model.value[item].rules]));
});

console.log(rules.value);

const formRef = templateRef<FormInstance>("formRef");

const clearValidate = () => {
  formRef.value?.clearValidate();
};

const Validate = (): Promise<Boolean> => {
  return formRef.value?.validate(valid => {
    if (valid) {
      console.log("验证通过");
    } else {
      console.log("验证失败");
    }
  });
};

const resetFields = () => {
  formRef.value?.resetFields();
};

defineExpose({
  Validate,
  clearValidate,
  resetFields,
  formRef,
});
</script>

<template>
  <div class="">
    <el-form ref="formRef" label-width="auto" :model="model" :rules="rules">
      <template v-for="(item, index) in model" :key="index">
        <el-form-item v-if="item.show != false" :prop="index + '.value'" :label="item.label">
          <el-input v-if="item.type === 'input'" v-model="item.value" :placeholder="item.placeholder || `${item.type != 'input' ? '请选择' : '请输入'}${item.label}`"></el-input>
          <template v-else-if="item.type === 'custom'">
            <slot :name="item.slotName ?? index" :prop="index"></slot>
          </template>
        </el-form-item>
      </template>

      <el-form-item>
        <slot></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss"></style>
