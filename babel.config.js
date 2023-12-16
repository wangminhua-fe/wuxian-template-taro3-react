/*
 * @Author: Marshall
 * @Date: 2023-12-16 01:11:46
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 17:10:48
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/babel.config.js
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-react-taro",
        "libraryDirectory": "dist/esm",
        "style": 'css',
        "camel2DashComponentName": false
      },
      'nutui-react-taro'
    ]
  ]
}
