const actions = {
  async nuxtServerInit ({ dispatch }, ctx) {
    // dispatch('parseAppCookies', ctx)
    await dispatch('fetchAppSettings', ctx)
  },
  nuxtClientInit ({ state }, ctx) {
    const { app } = ctx
    const isAnalyticsEnabled = state.gdpr.service.analytics
    if (isAnalyticsEnabled) { app.$ga.startPageTracking() }
  },
  async fetchAppSettings ({ dispatch }, ctx) {
    try {
      const settings = await ctx.app.$storyapi.getStory('settings', {
        resolve_links: 'url'
      })

      const isStoryblok = ctx.query._storyblok
      const content = settings.data?.story?.content || {}

      const isCookieBannerEnabled = {
        staging: content.show_cookie_banner_staging,
        production: content.show_cookie_banner_production,
        development: content.show_cookie_banner_development
      }

      dispatch('nav/setSettings', content)

      if (!isStoryblok) {
        dispatch('gdpr/setCookieBannerSettings', isCookieBannerEnabled)
      }
    } catch (e) {
      console.error(e)
    }
  },

  parseAppCookies ({ dispatch }) {
    dispatch('gdpr/parseCookies')
  }
}

export default {
  actions
}
