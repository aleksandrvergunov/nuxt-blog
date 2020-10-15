<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time" />
        {{ new Date().toLocaleDateString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://cdn21.img.ria.ru/images/155959/50/1559595090_0:0:3160:2048_600x0_80_0_0_3b7a6ec53871df2f4ff4a0017d397b12.jpg"
        alt="post image"
        class="post-img"
      >
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">
        Открыть
      </el-button>
      <span>
        <i class="el-icon-message" />
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  name: 'Post',
  methods: {
    openPost () {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    /*height: 200px;*/
    /*//border: 1px solid black;*/
   margin-bottom: 1.5rem;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-img {
    width: 100%;
    height: auto;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>
