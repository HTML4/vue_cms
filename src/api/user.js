import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login.do',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/get_user_info.do',
    method: 'post',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
