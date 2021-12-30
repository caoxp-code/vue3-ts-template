# vue3-ts-template

创建一个常使用的 vue3 模板，其中包括 typescript，tailwind. 以及 eslint，stylelint，husky 等一些开发流程梳理的组件。优化开发体验，减少初始化项目难度。

## engine

node >= 16

## use

```
npx degit caoxp-code/vue3-ts-template my-project
```

### 提交代码

通过使用 husky 配置 git 钩子，并通过 commitlint 规范化 git commit 的消息格式。其中的配置信息在 commitlint.config.js 中。提交信息结构类似

```
type(scope?): subject
body?
footer?
比如：
git commit -m "fix(login): 修改登录bug"
```

其中 type-enum 类型为 type|说明 ---|---: feat|新增功能 fix|修改 bug perf|优化相关，比如提升性能、体验 ci|持续集成 docs|文档修改 style|代码格式修改，不是 css 修改 test|测试用例修改 refactor|回滚到上一个版本 build|编译相关的修改，例如发布版本、项目构建、依赖改动 chore|其他修改，比如修改构建流程
