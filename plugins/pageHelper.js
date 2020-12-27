export default (context, inject) => {
  const getLink = (link) => {
    return Array.isArray(link) && link.length && link.link?.link
  }

  const pageHelper = {
    getLink
  }

  inject('pageHelper', pageHelper)
  context.$pageHelper = pageHelper
}
