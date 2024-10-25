import { ElMessage } from "element-plus";

export const useAuthStore = defineStore(
  "Auth",
  () => {
    const user = ref<any>();
    const token = ref<string>();

    const login = async (data: loginOP) => {
      return new Promise(async (resolve, reject) => {
        try {
          let t = await authApi.login(data);
          if (t.code === 0) {
            console.log(t.data);
            user.value = t.data.user;
            token.value = t.data.token;
            ElMessage({
              message: "登录成功",
              type: "success",
              plain: true,
            });
          }
          resolve(true);
        } catch (error) {
          ElMessage({
            message: "登录失败",
            type: "error",
            plain: true,
          });
          resolve(false);
        }
      });
    };

    const logout = async () => {
      // TODO: Implement logout logic
    };

    return {
      user,
      token,
      login,
      logout,
    };
  },
  {
    persist: true,
  }
);
