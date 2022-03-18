<template>
  <section>
    <article class="relative">
      <h2 class="mb-2 text-center text-4xl font-medium">
        <a href="#">{{ headlines.head.title }}</a>
      </h2>
      <a href="#">
        <img class="w-full" :src="headlines.head.src" alt />
      </a>
      <h3 class="py-2">
        <a href="#">
          <strong>{{ headlines.head.body }}</strong>
        </a>
      </h3>
    </article>
    <article>
      <ul>
        <li v-for="(item, idx) in headlines.listNews" :key="idx">
          <template v-if="item.text !== 'Video'">
            <a :href="item.link"
              ><strong v-if="item.text">{{ item.text }}: </strong
              >{{ item.body }}</a
            >
          </template>
          <template v-else>
            <a :href="item.link" class="flex">
              <em class="mr-2 block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="none" d="M0 0h48v48H0z" />
                  <path
                    fill="rgb(204 0 0 / var(--tw-text-opacity))"
                    d="m20 33 12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"
                  />
                </svg> </em
              >{{ item.body }}
            </a>
          </template>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HeadLine",
  setup() {
    const store = useStore();

    const headlines = computed(() => {
      return store.state.news.headlines;
    });

    return {
      headlines,
    };
  },
};
</script>

<style lang="scss" scoped>
article,
li {
  @apply border-b border-cnn-lightGray text-sm font-normal;
}
li {
  @apply py-2;
  &:last-child {
    @apply border-b-0;
  }
}
a {
  &:hover {
    @apply text-cnn-red;
  }
}
</style>
