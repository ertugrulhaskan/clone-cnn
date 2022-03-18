<template>
  <nav-bar v-if="$store.state.news !== null"></nav-bar>
  <router-view />
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    // Methods
    function fetchNews() {
      axios.get("http://localhost:3000/news").then(({ data }) => {
        store.state.news = data;
      });
    }

    // Lifecycle hooks
    onMounted(() => {
      fetchNews();
    });
  },
};
</script>

<style lang="scss">
#app {
  @apply h-full;
}
</style>
