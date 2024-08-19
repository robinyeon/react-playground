import { AxiosRequestConfig } from "axios";

interface HttpBase {
  get<Response>(url: string): Promise<Response>;
  patch<Request, Response>(
    url: string,
    body: Request,
    config?: AxiosRequestConfig
  ): Promise<Response>;
  post<Request, Response>(
    url: string,
    body: Request,
    config?: AxiosRequestConfig
  ): Promise<Response>;
  del<Response>(url: string): Promise<Response>;
}

export default HttpBase;
