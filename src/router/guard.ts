import { useAuthStore } from "@/stores/Auth";
import { ElMessage } from "element-plus";

import type { RouteLocationNormalized, Router } from "vue-router";
class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    const token = this.token();
    const userInfo = this.getUserInfo();
    const userRole = userInfo?.authorityId;

    if (to.meta?.guest) return true;
    if (to.path === from.path) return true;
    if (to.meta?.login) {
      console.log(token);

      if (!token) {
        ElMessage.warning("需要登录");
        return "/login";
      }

      if (to.meta?.role && to.meta.role !== userRole) {
        ElMessage.warning("您没有权限访问该页面");
        return from;
      }
      return true;
    }

    if (to.name === "login" && token) {
      ElMessage.warning("您已登录，请勿重复登录");
      return false;
    }
  }

  private getUserInfo() {
    if (this.token()) return useAuthStore().user;
  }

  private token(): string | undefined {
    return useAuthStore().token;
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
