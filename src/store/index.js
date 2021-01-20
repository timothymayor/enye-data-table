import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
let colName = {
  "First Name": "",
  "Last Name": "",
  "Gender": "",
  // "Latitude": "",
  // "Longitude": "",
  // "CreditCardNumber": "",
  "Email": "",
  "Phone Number": "",
  // "DomainName": "",
  // "MacAddress": "",
  "User Name": "",
  "URL": "",
  // "LastLogin": "",
  "Credit Card Type": "",
  "Payment Method": ""
};

export default new Vuex.Store({
  state: {
    users: [],
    col: Object.keys(colName),
  },
  mutations: {
    SET_USERS(state, datas) {
      state.users = datas;
    }
  },
  actions: {
    setusers({commit}, datas) {
      commit('SET_USERS', datas)
    }
  },
  modules: {
  }
})
