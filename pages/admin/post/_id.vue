<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">
        Посты
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input v-model="controls.text" type="textarea" resize="none" :rows="10" />
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time" />
          <span>{{ post.date }}</span>
        </small>
        <small>
          <i class="el-icon-view" />
          <span>{{ post.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Сохранить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Id',
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return { post }
  },
  data () {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым.', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () { // call only client side
    this.controls.text = this.post.text
    const { message } = this.$route.query

    if (message === 'login') {
      this.$message.info('Для начала войдите в систему')
    } else if (message === 'logout') { this.$message.success('Вы вышли из панели администратора') }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          try {
            const formData = {
              text: this.controls.text,
              id: this.post._id
            }
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Пост обновлён')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  },
  head () {
    return {
      title: `Пост ${this.post.title}`
    }
  },
  validate ({ params }) {
    return Boolean(params.id)
  }
}
</script>

<style lang="scss" scoped>
  .page-wrap {
    width: 600px;
  }
</style>
