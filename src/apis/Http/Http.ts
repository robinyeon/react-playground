import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  isAxiosError,
} from "axios";
import HttpBase from "./HttpBase";

class Http implements HttpBase {
  private fetcher: AxiosInstance;

  constructor() {
    this.fetcher = axios.create({
      baseURL: "https://reqres.in/",
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<Response>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.fetcher.get(url, config);

      return response as Response;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async post<Request, Response>(
    url: string,
    data: Request,
    config?: AxiosRequestConfig
  ) {
    try {
      const response = await this.fetcher.post(url, data, config);

      return response as Response;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async patch<Request, Response>(
    url: string,
    data: Request,
    config?: AxiosRequestConfig
  ) {
    try {
      const response = await this.fetcher.post(url, data, config);

      return response as Response;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async del<Response>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.fetcher.delete(url, config);

      return response as Response;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  private handleError(err: unknown): Promise<never> {
    if (isAxiosError(err))
      return Promise.reject(new AxiosError(err.message).toJSON());
    return Promise.reject(err);
  }
}

export default Http;
