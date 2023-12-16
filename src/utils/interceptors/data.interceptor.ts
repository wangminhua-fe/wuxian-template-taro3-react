/*
 * @Author: Marshall
 * @Date: 2023-12-16 12:54:30
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 16:58:17
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/utils/interceptors/data.interceptor.ts
 */
import { SUCCESS_LIST } from '@/constants/code';
import Toast from '@/utils/toast'
import type { Chain } from "@tarojs/taro";

export default function(chain: Chain) {
  const requestParams = chain.requestParams
  const { showToast } = requestParams.header
  return chain.proceed(requestParams).then(res => {
    console.log('data拦截器接收到的数据', res)

    // 先判断状态码
    if(res.statusCode !== 200) {
      // 错误处理
      console.error(`接口异常: ${res.data.path}`, res.statusCode)
      if (showToast) {
        Toast.info('很抱歉，数据临时丢失，请耐心等待修复')
      }
      return Promise.resolve('很抱歉，数据临时丢失，请耐心等待修复')
    }

    const resultData = { ...res.data }

    // TODO 根据实际项目情况处理
    // if (!SUCCESS_LIST.includes(resultData.code) && showToast) {
    //   if (resultData.code === '50000') {
    //     Toast.info('系统开小差了')
    //   } else {
    //     Toast.info(resultData.msg)
    //   }
    // }

		return Promise.resolve(resultData)
  }).catch(err => {
    Toast.hideLoading()
    Toast.info('网络开小差了')
    return Promise.reject(err)
  })
}
