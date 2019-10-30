import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'

const state = {
  spinShow:false,
  ticket:'',
  params:{},
  templateSetting: {
    templateId: null,
  },
};

Vue.use(Vuex);

const getters = {};

//持久化配置
const vuePersistenct = createPersistedState({
  paths:['templateSetting'],
  storage: {
    getItem: key => sessionStorage.getItem(key),
    setItem: (key, value) =>
      sessionStorage.setItem(key,value),
    removeItem: key => sessionStorage.removeItem(key)
  }
});

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  plugins: [vuePersistenct]
});

export default store
