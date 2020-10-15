<template>
  <div>Очищаем данные</div>
</template>

<script>
export default {
  name: 'Logout',
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate () { // life cycle hook
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>

<style scoped>

</style>
