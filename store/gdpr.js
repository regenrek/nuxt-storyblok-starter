const PREFIX = '_virh'
const ONE_WEEK = 60 * 60 * 24 * 7
const ONE_MONTH = 60 * 60 * 24 * 30

const types = {
  SET_COOKIE_BANNER: 'SET_COOKIE_BANNER',
  SET_COOKIE_BANNER_SETTINGS: 'SET_COOKIE_BANNER_SETTINGS',
  SET_SERVICE: 'SET_SERVICE'
}

const state = () => ({
  showCookieBanner: false,
  cookieBannerSettings: {
    staging: true,
    production: true,
    development: true
  },
  service: {
    functional: false,
    analytics: false,
    media: false
  }
})

// getters
const getters = {}

const mutations = {
  [types.SET_COOKIE_BANNER](state, status) {
    state.showCookieBanner = status
  },
  [types.SET_COOKIE_BANNER_SETTINGS](state, settings) {
    state.cookieBannerSettings = settings
  },
  [types.SET_SERVICE](state, { key, value }) {
    state.service[key] = value
  }
}
const actions = {
  openCookieBanner({ dispatch }) {
    dispatch('setCookieBanner', true)
  },
  closeCookieBanner({ dispatch }) {
    dispatch('setCookieBanner', false)
  },
  setCookieBanner({ commit }, value) {
    const cookieName = `${PREFIX}_gdpr`
    const cookieOptions = {
      path: '/',
      maxAge: ONE_WEEK
    }
    this.$cookies.set(cookieName, value, cookieOptions)
    commit(types.SET_COOKIE_BANNER, value)
  },
  setCookieBannerSettings({ commit }, settings) {
    commit(types.SET_COOKIE_BANNER_SETTINGS, settings)
  },
  setService({ commit }, { key, value }) {
    const cookieName = `${PREFIX}_${key}`
    const cookieOptions = {
      path: '/',
      maxAge: ONE_MONTH
    }

    if (value) {
      this.$cookies.set(cookieName, value, cookieOptions)
    } else {
      this.$cookies.remove(cookieName)
    }

    commit(types.SET_SERVICE, { key, value })
  },
  parseCookies({ commit, state }) {
    Object.keys(state.service).forEach((key) => {
      const value = this.$cookies.get(`${PREFIX}_${key}`)
      if (value) {
        commit(types.SET_SERVICE, { key, value })
      }
    })

    let isActive = this.$cookies.get(`${PREFIX}_gdpr`)
    if ([undefined, null].includes(isActive)) isActive = true
    commit(types.SET_COOKIE_BANNER, isActive)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
