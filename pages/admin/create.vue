<template>
    <el-form
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
        ref="form">

        <h1>Создать новый пост</h1>

        <el-form-item label="Заголовок поста" prop="title">
          <el-input v-model.trim="controls.title" />
        </el-form-item>

        <el-form-item label="Текст в формате .md или .html" prop="text">
          <el-input type="textarea" resize="none" :rows="10" v-model="controls.text" />
        </el-form-item>

        <el-dialog
          title="Предпросмотр"
          :visible.sync="previewDialog"
         >
          <div :key="controls.text">
            <vue-markdown>{{controls.text}}</vue-markdown>
          </div>
        </el-dialog>

        <el-upload
          ref="upload"
          class="mb"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleImageChange"
          :auto-upload="false"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Перетащите картинку или <em>нажмите</em></div>
          <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
        </el-upload>

        <el-button class="mb" type="success" @click="previewDialog = !previewDialog"> Предпросмотр</el-button>

        <el-form-item>
          <el-button
            type="primary"
            round
            native-type="submit"
            :loading="loading"
          >
            Создать пост
          </el-button>
        </el-form-item>
      </el-form>
</template>

<script>
    export default {
        name: "create",
        layout: 'admin',
        middleware: ['admin-auth'],
       data() {
          return {
              image: null,
              previewDialog: false,
              loading: false,
              controls: {
                  title: '',
                  text: ''
            },
             rules: {
              title: [
                { required: true, message: 'Заголовок не должен быть пустым.', trigger: 'blur' }
              ],
              text: [
                { required: true, message: 'Текст не должен быть пустым.', trigger: 'blur' }
              ]
            }
          }
      },
      methods: {
          onSubmit() {
              this.$refs.form.validate(async (valid) => {
              if (valid && this.image) {
                  this.loading = true
                  try {
                      const formData = {
                        title: this.controls.title,
                        text: this.controls.text,
                        image: this.image
                      }
                      await this.$store.dispatch('post/create', formData)
                      this.controls.title = ''
                      this.controls.text = ''
                      this.image = null
                      this.$refs.upload.clearFiles()
                      this.$message.success('Пост добавлен')
                  } catch (e) {} finally {
                      this.loading = false
                  }
              } else {
                  this.$message.warning('Форма не валидна')
              }
            });
          },
          handleImageChange(file, fileList) {
              this.image = file.raw
              console.log(this.image)
          }
      }
    }
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
</style>
