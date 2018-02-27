/**
 * Created by feiyuefeng on 2018/2/24/024.
 */
import http from './axios'

export function checkToken (param) {
  const url = '/user/testToken'
  return http.post(url, param)
}

export function queryById (id) {
  const url = '/user/queryById?id=' + id
  return http.get(url)
}
