<template>
  <div class="mx-auto max-w-4xl my-5">
    <div>
      <h1 class="text-4xl">
        {{ home.name }}
      </h1>

      <div class="bg-gray-100 py-8 px-8 my-8">
        <ul class="grid gap-y-4">
          <li v-for="(post, index) in posts" :key="index" class="">
            {{ index + 1 }}. {{ post.content.title }}
          </li>
        </ul>

        <div v-if="$fetchState.pending" class="my-2">Posts are loading...</div>
      </div>

      <div class="flex space-x-6">
        <button class="border b-gray-200 p-4" @click="createNewPost">
          Create new post
        </button>
        <button class="border b-gray-200 p-4" @click="refetchPosts">
          Refetch Posts
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
const PARENT_STORY_ID = 28237991

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
          parent_id: PARENT_STORY_ID,
          content: {
            title: title,
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
      let randomNum = Math.random() * (max - min) + min
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
