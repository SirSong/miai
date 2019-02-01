import rest from '@/utils/rest'

import wxchatConfig from '@/config/wxproject'

export const fetchOpenIdFromCode = code =>
  rest.get('https://api.weixin.qq.com/sns/jscode2session', {
    params: {
      appid: wxchatConfig.appId,
      secret: wxchatConfig.secret,
      js_code: code,
      grant_type: 'authorization_code'
    }
  })