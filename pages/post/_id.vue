<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back" />
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time" />
          {{ new Date(post.date).toLocaleDateString() }}
        </small>
        <small>
          <i class="el-icon-view" />
          {{ post.views }}
        </small>
      </div>
      <div class="post-image">
        <img
          :src="post.imageUrl"
          alt="post image"
          class="post-img"
        >
      </div>
    </header>
    <main class="post-content">
      <vue-markdown>{{ post.text }}</vue-markdown>
    </main>
    <footer>
      <app-comment-from
        v-if="canAddComment"
        :post-id="post._id"
        @created="createCommentHandler"
      />
      <div v-if="post.comments.length" class="comments">
        <app-comment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <div v-else class="text-center">
        Комментариев нет.
      </div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentFrom from '@/components/main/CommentForm'

export default {
  validate ({ params }) {
    return Boolean(params.id)
  },
  components: {
    AppComment,
    AppCommentFrom
  },
  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return { post }
  },
  data () {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler (comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    }
  },
  head () {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  .post-image {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }
</style>
