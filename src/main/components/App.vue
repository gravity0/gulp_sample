
<script>
  var Navbar = require('./Navbar.vue')
  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>

<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
