/*
 * @Author: Marshall
 * @Date: 2023-12-16 11:59:13
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 12:01:29
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/utils/interceptors/param.interceptor.ts
 */
import type { Chain } from '@tarojs/taro'

export default function(chain: Chain) {
  const requestParams = chain.requestParams
  const { data } = requestParams

  // 接口参数相关处理
  requestParams.data = data

  return chain.proceed(requestParams)
}
