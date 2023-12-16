/*
 * @Author: Marshall
 * @Date: 2023-12-16 01:39:51
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 16:19:50
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/utils/request.ts
 */
import { SUCCESS_LIST } from '@/constants/code'
import Taro from '@tarojs/taro'
import toast from './toast'
import urlInterceptor from './interceptors/url.interceptor'
import headerInterceptor from './interceptors/header.interceptor'
import paramInterceptor from './interceptors/param.interceptor'
import dataInterceptor from './interceptors/data.interceptor'

// 添加拦截器
const getInterceptors = () => {
  return [
    urlInterceptor,
		headerInterceptor,
		paramInterceptor,
		dataInterceptor,
    Taro.interceptors.logInterceptor,
    Taro.interceptors.timeoutInterceptor
  ]
}

getInterceptors().forEach((interceptorItem) => {
  Taro.addInterceptor(interceptorItem)
})

interface IRequestConfig {
  url: string
  data?: any
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPLOAD'
  [key: string]: any
}

interface IOptions {
  [key: string]: any
}

class BaseRequest {
  public options: IOptions

  constructor(options) {
    console.log('request options:', options)
    this.options = options
  }

  public async request({
    url,
    data,
    method,
    header = {
      'Content-Type': 'application/json'
    },
    dataType = 'json',
    responseType = 'text',
    showToast = true,
    jsonp = false,
  }: IRequestConfig): Promise<any> {
    header = {
      ...header,
      showToast
    }
    if(method === 'UPLOAD') {
      return new Promise((resolve, reject) => {
        return Taro.uploadFile({
          url,
          filePath: data,
          name: 'file',
          success(res) {
            const resultData = res.data

						console.log('uploadFile success', resultData)
						console.log('uploadFile success', JSON.parse(resultData))
						const result = JSON.parse(resultData)
						if (SUCCESS_LIST.includes(result.code)) {
							resolve(result)
						} else {
							toast.info(result.msg)
							reject(result)
						}
          },
          fail(err) {
            console.log('uploadFile err', err)
            reject(err)
          }
        })
      })
    } else {
      return Taro.request({
        url,
        data,
        method,
        header,
        dataType,
        responseType,
        jsonp
      })
    }
  }

  public get(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
	}): Promise<Response> {
		return this.request({
			method: 'GET',
			...payload,
		})
	}

	public post(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
	}): Promise<Response> {
		return this.request({
			method: 'POST',
			...payload,
		})
	}

	public put(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
	}): Promise<Response> {
		return this.request({
			method: 'PUT',
			...payload,
		})
	}

	public delete(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
	}): Promise<Response> {
		return this.request({
			method: 'DELETE',
			...payload,
		})
	}

	public jsonp(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
	}): Promise<Response> {
		return this.request({
			method: 'GET',
			jsonp: true,
			...payload,
		})
	}

	/**
	 * 上传文件
	 */
	public upload(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
	}): Promise<Response> {
		return this.request({
			...payload,
			method: 'UPLOAD',
			header: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}
}

export default BaseRequest
