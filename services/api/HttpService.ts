import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface'
import { axios } from './axios'
import { AxiosRequestConfig } from 'axios'

class HttpService {
  static readonly BasePath: string = 'https://www.googleapis.com/books/v1' // todo BaseURL変更
  public static getBaseUrl = (targetApi: string, basePath: string = HttpService.BasePath): string => {
    // return `/${basePath}/${targetApi}`
    return `${basePath}/${targetApi}`
  }
  public static GetAsync<Req, Res>(
    targetApi: string,
    params?: Req,
    basePath?: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<Res> {
    return axios.get(this.getBaseUrl(targetApi, basePath), { params, ...config })
  }
  public static PostAsync<Req, Res>(
    targetApi: string,
    data: Req,
    basePath?: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<Res> {
    return axios.post(this.getBaseUrl(targetApi, basePath), data, config)
  }
  public static PutAsync<Req, Res>(
    targetApi: string,
    data: Req,
    basePath?: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<Res> {
    return axios.put(this.getBaseUrl(targetApi, basePath), data, config)
  }
  public static DeleteAsync<Req, Res>(targetApi: string, data: Req, basePath?: string): AxiosObservable<Res> {
    return axios.delete(this.getBaseUrl(targetApi, basePath), { data: data })
  }
}
export default HttpService
