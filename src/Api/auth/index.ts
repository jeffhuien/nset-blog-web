import { Http } from "@/plugins/Axios";
import type { AxiosRequestConfig } from "axios";

class AuthAPI extends Http {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  public login(data: loginOP) {
    return this.request<LoginRES>({
      baseURL: "api/login",
      method: "post",
      data,
    });
  }

  public getCaptcha() {
    return this.request<any>({
      baseURL: "api/captcha",
      method: "get",
    });
  }

  public ValidateCaptcha(op: { id: string; value: string }) {
    return this.request<any>({
      baseURL: "api/vv",
      method: "post",
      data: op,
    });
  }
}

export const authApi = new AuthAPI({
  baseURL: "/api/auth",
});
