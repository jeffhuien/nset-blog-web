import { Http } from "@/plugins/Axios";
import type { AxiosRequestConfig } from "axios";

class commonAPI extends Http {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }
}

export const commonApi = new commonAPI({});
