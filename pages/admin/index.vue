<template>
    <h1>Welcome admin page</h1>
</template>

<script>
    export default {
        name: "index",
        layout: 'admin',
        middleware: ['admin-auth']
    }
</script>

<style lang="scss" scoped>

</style>
