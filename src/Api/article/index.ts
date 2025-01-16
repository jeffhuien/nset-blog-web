import { Http } from "@/plugins/Axios";
import type { AxiosRequestConfig } from "axios";
import type { ArticleModel } from "types/article";

class ArticleAPI extends Http {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  public getArticleList(params?: any) {
    return this.request<ArticleModel[]>({
      method: "get",
      params,
    });
  }
}

export const articleApi = new ArticleAPI({
  baseURL: "/api/article",
});
