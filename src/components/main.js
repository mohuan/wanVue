import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'

const components = {
  'hello-world':HelloWorld
};

const install = function () {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
};

const API = {
  install
}

export default API;
