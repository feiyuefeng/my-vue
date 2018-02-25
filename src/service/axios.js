/**
 * Created by fyf on 2018/2/23.
 */
import Vue from 'vue'
import axios from 'axios'
import { read, clear } from '../storage/session'
import Promise from 'promise-polyfill'
import Constants from '../commons/constants'

axios.defaults.withCredentials = true

// axios.defaults.baseURL = 'http://localhost:8082';
axios.defaults.baseURL = ''

if (!window.Promise) {
  window.Promise = Promise
}

axios.interceptors.request.use(function (config) {
  config.headers['Token'] = read(Constants.SESSION_STORAGE_TOKEN)
  return config
}, function (error) {
  return Promise.reject(error)
})

const respSuccess = function (resp, resolve, reject) {
  if (resp.data.status !== 'OK') {
    if (resp.data.code === '501') {
      clear(null, true)
      location.replace('/login')
    } else {
      new Vue().$message.error(resp.data.msg)
      reject(resp)
    }
  } else {
    resolve(resp.data.result)
  }
}

const respError = function (error, reject) {
  new Vue().$message.error('系统错误，请与管理员联系')
  reject(error)
}

export default {
  get: function (url, body) {
    body = body || {}
    return new Promise((resolve, reject) => {
      axios.get(url, body).then((resp) => {
        respSuccess(resp, resolve, reject)
      }).catch((error) => {
        respError(error, reject)
      })
    })
  },
  post: function (url, body) {
    return new Promise((resolve, reject) => {
      axios.post(url, body).then((resp) => {
        respSuccess(resp, resolve, reject)
      }).catch((error) => {
        respError(error, reject)
      })
    })
  }
}
