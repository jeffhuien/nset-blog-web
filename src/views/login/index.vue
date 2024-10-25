<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/Auth";
import { getFieldData } from "@/utils/common";
import { ElMessage } from "element-plus";

const form = reactive<Record<keyof loginOP, field>>({
  name: {
    value: "",
    label: "用户名",
    type: "input",
    placeholder: "请输入用户名",
    rules: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      { min: 3, max: 25, message: "长度在 3 到 5 个字符", trigger: "blur" },
    ],
  },

  password: {
    value: "",
    label: "密码",
    type: "input",
    placeholder: "请输入密码",
    rules: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 3, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" },
    ],
  },
  captcha: {
    value: "",
    label: "验证码",
    type: "custom",
    slotName: "captcha",
    rules: [{ required: true, message: "请输入验证码", trigger: "blur" }],
  },

  captchaId: {
    value: "",
    show: false,
    label: "",
    type: "",
  },
});

const loginFormRef = templateRef("loginFormRef");

const submit = async () => {
  let t = await loginFormRef.value?.Validate();
  if (t) {
    let y = getFieldData(form);
    useAuthStore()
      .login(y as any)
      .then(res => {
        if (!res) getCaptchaFun();
        else router.push({ name: "home" });
      });
  }
};

const reset = () => {
  loginFormRef.value?.resetFields();
};

const getCaptcha = ref();

function getCaptchaFun() {
  authApi.getCaptcha().then(res => {
    getCaptcha.value = res.data;
    form.captchaId.value = res.data.captchaId;
    form.captcha.value = "";
  });
}

onMounted(() => {
  getCaptchaFun();
});
</script>

<template>
  <div class="bg-white size-full center aa">
    <div class="w-320px">
      <ComForm ref="loginFormRef" :model="form" class="w-full">
        <template #captcha>
          <div class="flex items-center w-full">
            <el-input v-model="form.captcha.value" placeholder="请输入验证码"></el-input>
            <div @click="getCaptchaFun" class="bg-white h-8 [&>svg]:h-9" v-html="getCaptcha?.captcha"></div>
          </div>
        </template>

        <div w-full flex>
          <el-button @click="reset" class="flex-1" type="warning">重置</el-button>
          <el-button @click="submit" class="flex-1" type="primary">登录</el-button>
        </div>
      </ComForm>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
