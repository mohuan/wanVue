import Vue from 'vue'
import Util from '../libs/util'
import apiUrl from '../config/api'
import store from '../store/store'
import HelloWorld from './HelloWorld.vue'

const components = {
  'hello-world':HelloWorld
};

const install = function () {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  });

  Vue.prototype.$api = function(ops) {
    return new Promise((resolve, reject) => {
      ops.header = ops.header ? ops.header : {}
      // ops.header.ticket = store.state.ticket

      // ops.header.sid = store.state.sid
      ops.params = ops.params ? ops.params : {}
      store.dispatch('spinshow', true)

      //处理缓存问题
      // var timestamp = new Date().getTime()
      // if (ops.url && ops.url.indexOf('?') != -1) {
      //   ops.url += '&_t=' + timestamp
      // } else {
      //   ops.url += '?_t=' + timestamp
      // }

      debugger

      Util.ajax({
        // responseType: 'json',
        method: ops.method ? ops.method : 'get',
        url: '/api'+ops.url,   // 跨域问题
        params: ops.params ? ops.params : {},
        data: ops.data ? ops.data : {},
        headers: ops.header,
        withCredentials: true,
      })
        .then(response => {
          this.$store.dispatch('spinshow', false)
          // if (!ops.disableMask)
          //   if (ops.successMessage === '') {
          //     this.$store.dispatch('spinshow', false)
          //   } else {
          //     this.alertSuccess(
          //       ops.successMessage ? ops.successMessage : '操作成功！'
          //     )
          //   }
          resolve(response.data)
        })
        .catch(error => {
          this.$store.dispatch('spinshow', false)
          // if (!ops.disableMask)
          //   if (error.response && error.response.status == 404) {
          //     this.alertError('网络中断，请稍后重试')
          //   } else if (error.response && error.response.status == 500) {
          //     this.alertError('网络繁忙，请稍后重试')
          //   } else if (error.response && error.response.status == 503) {
          //     this.alertError('服务器异常，请稍后重试')
          //   } else if (error.response && error.response.status == 401) {
          //     this.$router.push('/login')
          //   } else {
          //     const data = error && error.response && error.response.data
          //     data && data.msg && this.alertError(data.msg)
          //   }
          reject(error)
        })
    })
  }

  Vue.prototype.$rest = function(api, param = {}, data = {}, ops) {
    return new Promise((resolve, reject) => {
      let apiArr = apiUrl[api].split(' ')
      let url = ''
      let method = 'get'
      if (apiArr.length > 1) {
        url = apiArr[1]
        method = apiArr[0]
      } else {
        url = apiUrl[api]
      }
      let iops = ops
        ? ops
        : {
          successMessage: '',
        }
      iops.params = param ? param : {}
      iops.data = data ? data : {}
      iops.url = url
      iops.method = ops && ops.method ? ops.method : method
      this.$api(iops)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  Vue.prototype.$get = function(api, param = {}, ops) {
    return this.$rest(api, param, null, ops)
  }

  Vue.prototype.$post = function(api, data = {}, ops) {
    return this.$rest(api, null, data, ops)
  }

};

const API = {
  install
}

export default API;
