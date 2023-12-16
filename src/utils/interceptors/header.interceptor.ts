/*
 * @Author: Marshall
 * @Date: 2023-12-16 16:19:12
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 16:19:12
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/utils/interceptors/header.interceptor.ts
 */
/**
 * 头部拦截器 处理请求头的配置
 */

export default function (chain) {
	const requestParams = chain.requestParams

	const { header } = requestParams

	requestParams.header = header

	return chain.proceed(requestParams)
}
