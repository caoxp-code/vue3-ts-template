import { Response } from '../base'
export type LoginContent = {
  bgImage: String
  icon: String
  title: String
  subTitle?: String
}
export type LoginResponse = Response<LoginContent>
