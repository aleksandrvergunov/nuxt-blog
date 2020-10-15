<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <span>
        <i class="el-icon-time" />
        {{ new Date().toLocaleDateString() }}
      </span>
    </div>
    <div class="comment-text">
      lorem10Collision course, alignment, and advice.
      lorem10Collision course, alignment, and advice.
      lorem10Collision course, alignment, and advice.
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Comment'
  // props: ['Comment']
}
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .comment-text {
    white-space: pre-line;
  }
</style>
