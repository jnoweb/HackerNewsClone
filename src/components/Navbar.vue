<template>
  <div class="pure-menu pure-menu-horizontal">
        <div class="container">
        <router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Home</router-link>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><router-link :to="{ path: '/new' }" class="pure-menu-link">New Stories</router-link></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.pure-menu {
    background-color: #E17842;
}
.pure-menu a:link {
    color: #ffffff;
}
.pure-menu a:visited {
    color: #555f77;
}
.pure-menu a:hover {
    color: #E17842;
}
.pure-menu a:active {
    color: #E17842;
}
</style>
