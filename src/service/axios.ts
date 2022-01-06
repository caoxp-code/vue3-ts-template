import { axiosOptions } from '@/models/base'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
const single: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  timeout: 5000, //milliseconds
  responseType: 'json',
})

const get = (opt: axiosOptions) => {
  const getOpt: AxiosRequestConfig = {}
  if (opt.root) getOpt.baseURL = opt.root
  if (opt.params) getOpt.params = opt.params
  return single.get(opt.path, getOpt)
}

const post = (opt: axiosOptions) => {
  const getOpt: AxiosRequestConfig = {}
  if (opt.root) getOpt.baseURL = opt.root
  if (opt.params) getOpt.data = opt.params
  return single.post(opt.path, getOpt)
}

export { get, post }
