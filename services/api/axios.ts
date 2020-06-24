import Axios from 'axios-observable'
import { AxiosRequestConfig } from 'axios'

Axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    // TODO: 認証処理(PJに合わせる)
    console.log('リクエスト前処理: ', request.url)
    return request
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  },
)

Axios.interceptors.response.use((response) => {
  // TODO: エラーハンドリング(PJのi/oに合わせる)
  console.log('リクエスト後処理: ', response)
  return response
})

export const axios = Axios
