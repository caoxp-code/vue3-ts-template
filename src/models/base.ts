export type JsonResponse = {
  message: String
  code: Number
}

export type result<T> = {
  items: T[] | T
  count?: Number
}

export interface Response<T> extends JsonResponse {
  result: result<T>
}

export type axiosOptions = {
  path: string
  root?: string
  params?: { [name: string]: any }
  responseType?: 'json' | 'blob' | 'arraybuffer'
}
