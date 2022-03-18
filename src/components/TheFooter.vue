<template>
  <footer class="mt-5 bg-cnn-black py-5 text-white lg:mt-20 lg:py-20">
    <div class="container mx-auto lg:max-w-6xl">
      <search-bar></search-bar>
      <nav
        class="menu-wrapper mt-5 grid grid-cols-1 gap-3 text-cnn-white lg:grid-cols-7"
      >
        <div v-for="(item, idx) of menu" :key="idx">
          <h4
            class="text-center text-lg font-semibold lg:mb-2 lg:py-2 lg:text-left"
          >
            <a :href="item.link">{{ item.title }}</a>
          </h4>
          <ul class="hidden lg:block">
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
        class="my-10 flex flex-col items-center justify-between border-t border-[#4d4d4d] pt-10 text-sm font-semibold lg:flex-row lg:border-b lg:pb-10"
      >
        <router-link class="text-sm font-normal text-white" to="/">
          <the-logo></the-logo>
        </router-link>
        <div class="social-media flex flex-col lg:flex-row">
          <div
            class="my-4 text-center lg:my-0 lg:mr-4 lg:border-r lg:border-[#4d4d4d] lg:pr-4 lg:text-left"
          >
            FOLLOW CNN
          </div>
          <div class="icons flex">
            <a href="#" class="mr-4 w-6">
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
            <a href="#" class="mr-4 w-6">
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
      <div class="copyright text-center text-sm text-white lg:text-left">
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

    const menu = computed(() => store.state.news.menu);

    return {
      menu,
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
