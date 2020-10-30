<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}"
  >
    <h2>Войти в панель администратора</h2>
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Войти
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Login',
  layout: 'empty',
  data () {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин.', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль.', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть не менее 6 символов.', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () { // call only client side
    const { message } = this.$route.query

    if (message === 'login') {
      this.$message.info('Для начала войдите в систему')
    } else if (message === 'logout') {
      this.$message.success('Вы вышли из панели администратора')
    } else if (message === 'session') {
      this.$message.warning('Время сессии истекло, пожалуйста зайдите заного')
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
