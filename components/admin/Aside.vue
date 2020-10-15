<template>
  <el-menu
    :style="{height: '100%'}"
    router
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu" />
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit" />
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets" />
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user" />
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-close" />
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style scoped>

</style>
