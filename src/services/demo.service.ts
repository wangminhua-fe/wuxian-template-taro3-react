import BaseRequest from "@/utils/request";

/**
 * 服务类示例
 */
class DemoService extends BaseRequest {
  constructor() {
    super({})
  }

  getSomething(data?: any) {
    return this.get({
      url: '/posts/1',
      data
    })
  }
}

export default new DemoService()
