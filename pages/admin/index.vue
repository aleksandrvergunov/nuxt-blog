<template>
  <h1>Welcome admin page</h1>
</template>

<script>
export default {
  name: 'Index',
  head: {
    title: 'Аналитика'
  },
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>

<style lang="scss" scoped>

</style>
