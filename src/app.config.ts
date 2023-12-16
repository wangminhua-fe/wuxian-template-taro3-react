/*
 * @Author: Marshall
 * @Date: 2023-12-16 01:11:46
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 16:49:30
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/app.config.ts
 */
export default defineAppConfig({
  pages: [
    'pages/welcome/index',
    'pages/index/index',
    'pages/webview/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
})
