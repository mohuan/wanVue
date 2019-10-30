import axios from 'axios'
import Vue from 'vue'
import config from '../config/config';

Vue.prototype.axios = axios;

axios.defaults.baseURL = '/api';

let util = {};

util.AjaxUrl = config.api_url;

util.config = config;

util.ajax = axios.create({
  baseURL: config.api_url,
  withCredentials: true,
  requestHeader: {'Content-Type': 'application/json'},
  timeout: 30000
});

export default util;
