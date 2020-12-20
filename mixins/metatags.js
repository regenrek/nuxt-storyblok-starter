const createSeoMeta = (data = {}) => {
  const meta = [
    {
      hid: 'description',
      name: 'description',
      content:
        data.description ||
        'Die Plattform zur Vernetzung von Personen und Unternehmen mit digitalen Interessen'
    },
    { hid: 'og:site_name', property: 'og:site_name', content: '@TBD Sitename' },
    {
      hid: 'og:type',
      property: 'og:type',
      content: data.og_type || 'website'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: data.og_title || '@TBD: Title'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: data.og_description || '@TBD Description'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: data.og_image || '/img/placeholder.png'
    },
    // { hid: 'twitter:site', name: 'twitter:site', content: '' },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: data.twitter_card || 'summary_large_image'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: data.twitter_title || '@TBD: Title'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:title',
      content: data.twitter_description || '@TBD: Description'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: data.twitter_image || '/img/placeholder.png'
    }
  ]
  const head = {
    title: data.title || 'Das virtuelle Haus der Digitalisierung',
    meta: meta
  }
  return head
}

export default {
  head() {
    if (this.story?.content?.meta) {
      const meta = this.story.content.meta
      return createSeoMeta({
        ...(meta.title ? { title: meta.title } : null),
        ...(meta.description ? { description: meta.description } : null),
        ...(meta.og_title ? { og_title: meta.og_title } : null),
        ...(meta.og_description
          ? { og_description: meta.og_description }
          : null),
        ...(meta.og_image ? { og_image: meta.og_image } : null),
        ...(meta.twitter_title ? { twitter_title: meta.twitter_title } : null),
        ...(meta.twitter_description
          ? { twitter_description: meta.twitter_description }
          : null),
        ...(meta.twitter_image ? { twitter_image: meta.twitter_image } : null)
      })
    }
  }
}
