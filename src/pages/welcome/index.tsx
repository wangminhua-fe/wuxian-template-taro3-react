/*
 * @Author: Marshall
 * @Date: 2023-12-16 01:40:41
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-16 17:19:41
 * @Description:
 * @FilePath: /wuxian-template-taro3-react/src/pages/welcome/index.tsx
 */
import { View, Text } from '@tarojs/components'
import { useDidShow, useLoad } from '@tarojs/taro'
import DemoService from '@/services/demo.service'
import './index.scss'
import { useState } from 'react'
import { Button } from '@nutui/nutui-react-taro';
import { Add } from '@nutui/icons-react-taro';

export default function Index() {

  const [content, setContent] = useState()

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(async () => {
    const res: any = await DemoService.getSomething()
    setContent(JSON.stringify(res))
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Add color='red' />
      <Button type='primary'>主要按钮</Button>
      <View>接口请求结果：{content}</View>
    </View>
  )
}
