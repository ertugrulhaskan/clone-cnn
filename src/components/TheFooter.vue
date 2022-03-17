<template>
  <footer class="bg-cnn-black py-20 text-white mt-20">
    <div class="container mx-auto max-w-6xl">
      <search-bar></search-bar>
      <nav class="text-cnn-white mt-5 grid grid-cols-7 gap-3 menu-wrapper">
        <div v-for="(item, idx) of footerMenu" :key="idx">
          <h4 class="mb-2 py-2 text-lg font-semibold">
            <a :href="item.link">{{ item.title }}</a>
          </h4>
          <ul>
            <li
              v-for="(listItem, idx) in item.listLink"
              :key="`menu-${idx}`"
              class="mt-1"
            >
              <a
                :href="listItem.link"
                class="hover:underline hover:decoration-cnn-white"
                >{{ listItem.text }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <div
        class="flex justify-between text-sm font-semibold items-center my-10 pb-10 border-b border-[#4d4d4d]"
      >
        <router-link class="text-white text-sm font-normal" to="/">
          <the-logo></the-logo>
        </router-link>
        <div class="flex social-media">
          <div class="border-r border-[#4d4d4d] mr-4 pr-4">FOLLOW CNN</div>
          <div class="icons flex">
            <a href="#" class="w-6 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h10v-8h-3v-3h3V9a4 4 0 0 1 4-4 20 20 0 0 1 2 0v3h-2l-1 1v2h3l-1 3h-2v8h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
                />
              </svg>
            </a>
            <a href="#" class="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="&lt;Group&gt;">
                  <path
                    fill="none"
                    stroke="#303c42"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2 4a14 14 0 0 0 10 5c0-2 0-4 2-6a5 5 0 0 1 3 0 5 5 0 0 1 3 1 11 11 0 0 0 3-1 5 5 0 0 1-2 2 9 9 0 0 0 3 0 9 9 0 0 1-3 2c1 7-5 14-13 14a15 15 0 0 1-7-2 9 9 0 0 0 7-2 6 6 0 0 1-5-3h2a5 5 0 0 1-4-5 4 4 0 0 0 3 1 5 5 0 0 1-2-6Z"
                    data-name="&lt;Path&gt;"
                  />
                </g>
              </svg>
            </a>
            <a href="#" class="w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 5a1 1 0 1 0 2 2 1 1 0 0 0-2-2Zm5 3a8 8 0 0 0-1-3 5 5 0 0 0-1-1 5 5 0 0 0-1-1 7 7 0 0 0-3-1H8a7 7 0 0 0-3 1 5 5 0 0 0-1 1 5 5 0 0 0-1 1 7 7 0 0 0-1 3v8a7 7 0 0 0 1 3 5 5 0 0 0 1 1 5 5 0 0 0 1 1 7 7 0 0 0 3 1h8a7 7 0 0 0 3-1 5 5 0 0 0 1-1 5 5 0 0 0 1-1 8 8 0 0 0 1-3V8Zm-2 8a6 6 0 0 1 0 2 3 3 0 0 1-1 1 3 3 0 0 1-1 1 6 6 0 0 1-2 0H8a6 6 0 0 1-2 0 3 3 0 0 1-1-1 3 3 0 0 1-1-1 6 6 0 0 1 0-2V8a6 6 0 0 1 0-2 3 3 0 0 1 1-1 3 3 0 0 1 1-1 6 6 0 0 1 2 0h8a6 6 0 0 1 2 0 3 3 0 0 1 1 1 3 3 0 0 1 1 1 6 6 0 0 1 0 2v8Zm-8-9a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright text-sm text-white">
        This website is not related with CNN Website. Just created for a website
        project. If you want to visit to
        <a href="https://www.cnn.com" class="text-underline"
          >CNN website click here</a
        >!
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SearchBar from "./SearchBar.vue";
import TheLogo from "./TheLogo.vue";

export default {
  name: "TheFooter",
  setup() {
    const store = useStore();

    const footerMenu = computed(() => store.state.news.footer);

    return {
      footerMenu,
    };
  },
  components: { SearchBar, TheLogo },
};
</script>

<style lang="scss" scoped>
svg {
  path {
    @apply fill-cnn-white;
  }
}
</style>
