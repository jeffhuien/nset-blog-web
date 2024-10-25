import router from "@/router";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { ElMessage } from "element-plus";

export class Http {
  private instance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public async request<T, D = APIResponse<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<D>;
  }

  private interceptors() {
    this.interceptorsRequest(); //请求拦截器
    this.interceptorsResponse(); //响应拦截器
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      function (config) {
        config.timeout = 10000;
        // if (store.get(CacheEnum.TOKEN_NAME)) {
        //   config.headers["x-token"] = store.get(CacheEnum.TOKEN_NAME);
        // }

        return config;
      },
      function (error) {
        // 对请求错误做些什么
        console.log("出错了");

        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse() {
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
          ElMessage({
            type: "error",
            message: `服务器请求超时，请稍后重试`,
            duration: 3000,
            showClose: true,
          });
        } else {
          if (error.status === 422) {
            return ElMessage.warning(error.response.data.message);
          } else if (error.status === 400) {
            return ElMessage.error(error.response.data.message);
          }
          return ElMessage.error(error.message);
        }
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }
}
