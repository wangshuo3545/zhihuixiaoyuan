import { createStore } from 'vuex'

interface User {
  id: number;
  username: string;
  // 添加其他用户属性
}

interface State {
  user: User | null;
  token: string | null;
}

export default createStore<State>({
  state: {
    user: null,
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user
    },
    setToken(state, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    },
    logout(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    login({ commit }, { user, token }: { user: User; token: string }) {
      commit('setUser', user)
      commit('setToken', token)
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token
  }
})
