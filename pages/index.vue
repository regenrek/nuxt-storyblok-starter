<template>
  <div>
    <div class="border-b border-gray-400 flex justify-between py-4 mx-16">
      <div class="text-5xl">Logo</div>

      <div>
        <NjColorSwitcher />
      </div>
    </div>

    <div class="min-h-screen mx-auto py-5 px-8">
      <div class="grid grid-cols-4 gap-12 auto-cols-min">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="border border-black p-4"
          :class="{
            'col-start-3 col-end-5 lg:col-start-3 lg:col-end-4': index % 2 === 0
          }"
        >
          <h3 class="text-2xl mb-6 dark:text-white">
            {{ post.content.title }}
          </h3>
          <p class="text-gray-700">
            {{ post.content.intro }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'

export default {
  async asyncData({ $storyblok }) {
    try {
      const { story } = await $storyblok.getCurrentStory()
      return {
        home: story
      }
    } catch (ex) {
      console.error("Couldn't fetch home data", ex)
    }
  },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    try {
      const { stories } = await this.$storyblok.getStoryCollection('posts')

      this.posts = stories
    } catch (ex) {
      console.error("Couldn't fetch posts", ex)
    }
  },
  methods: {
    createNewPost() {
      const title = `My ${this.getRand(100, 999)} post`
      this.$sbManagement.createStory(
        {
          name: title,
          slug: this.toSlug(title),
          parent_id: '000000',
          content: {
            title,
            component: 'post'
          }
        },
        { publish: 1 }
      )
    },
    refetchPosts() {
      this.$fetch()
    },
    getRand(min, max) {
      const randomNum = Math.random() * (max - min) + min
      return Math.floor(randomNum)
    },
    toSlug(title) {
      return slugify(title, {
        remove: /[*+~.,()'"!:@]/g,
        lower: true,
        locale: 'de'
      })
    }
  }
}
</script>
