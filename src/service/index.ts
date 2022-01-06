// 为了快速使用，暂时使用代码注入方式，编写mock。
// 后期可以使用工具来生成
const services = () => {
  if (import.meta.env.MODE === 'mock') {
    import('./mock')
  } else {
    import('./db')
  }
}
export default services()
