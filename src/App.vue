<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {

  }
}
</script>



<style lang="scss">
#app {
  @apply h-full;
}
</style>
