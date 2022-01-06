import { LoginResponse, LoginContent } from '../../models/db/login'
const content: LoginContent = {
  bgImage: '',
  icon: '',
  title: '',
  subTitle: '',
}
const loginContentRet: LoginResponse = {
  result: {
    items: content,
  },
  code: 1,
  message: '',
}
export { loginContentRet }
