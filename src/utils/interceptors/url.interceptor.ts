/*
 * @Author: Marshall
 * @Date: 2023-12-16 11:43:19
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 12:01:50
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/utils/interceptors/url.interceptor.ts
 */
import type { Chain } from '@tarojs/taro'

export default function(chain: Chain) {
  const requestParams = chain.requestParams
  const { url } = requestParams

  // 如果传入url自带域名则不做处理 否则加上对应的域名
  if(!(url.startsWith('https://') || url.startsWith('http://'))) {
    requestParams.url = `${process.env.TARO_APP_BASE_URL}${url}`
  }

  return chain.proceed(requestParams)
}
