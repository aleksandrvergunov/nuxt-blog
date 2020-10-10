<template>
    <article class="post">
      <header class="post-header">
        <div class="post-title">
          <h1>Post title</h1>
          <nuxt-link to="/">
            <i class="el-icon-back"></i>
          </nuxt-link>
        </div>
        <div class="post-info">
          <small>
            <i class="el-icon-time"></i>
            {{ new Date().toLocaleDateString() }}
          </small>
          <small>
            <i class="el-icon-view"></i>
            12
          </small>
        </div>
        <div class="post-image">
          <img
            src="https://cdn21.img.ria.ru/images/155959/50/1559595090_0:0:3160:2048_600x0_80_0_0_3b7a6ec53871df2f4ff4a0017d397b12.jpg"
            alt="post image"
            class="post-img" />
        </div>
      </header>

      <main class="post-content">
        Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        <p>
          Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        </p>
        <p>
          Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
          Tremble, scotty, crazy moon! Nunquam captis imber. Everything we do is connected with purpose: silence, mind, intuition, mineral.
        </p>
      </main>
      <footer>
        <div class="comments" v-if="true">
          <h1>Добавить комментарий</h1>
          <app-comment-from
            @created="createCommentHandler"
            v-if="canAddComment"
          />
          <app-comment
            v-for="comment in 4"
            :key="comment"
            :content="comment"
          ></app-comment>
        </div>
        <div class="text-center" v-else>Комментариев нет.</div>
      </footer>
    </article>
</template>

<script>
    import AppComment from '@/components/main/Comment'
    import AppCommentFrom from '@/components/main/CommentForm'
    export default {
        name: "_id",
        validate({params}) {
            return Boolean(params.id)
        },
        components: {
            AppComment,
            AppCommentFrom
        },
        data() {
            return {
                canAddComment: true
            }
        },
        methods: {
            createCommentHandler() {
                this.canAddComment = false
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
