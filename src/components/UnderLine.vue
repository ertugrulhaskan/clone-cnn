<template>
  <section class="mb-2">
    <article class="relative">
      <a href="#">
        <img class="w-full" :src="underline.head.src" alt />
      </a>
      <h3 class="py-2">
        <a href="#">
          <strong>{{ underline.head.body }}</strong>
        </a>
      </h3>
    </article>
    <article>
      <ul class="list-inside">
        <li v-for="(item, idx) in underline.listNews" :key="idx">
          •
          <a :href="item.link"
            ><strong v-if="item.text">{{ item.text }}: </strong
            >{{ item.body }}</a
          >
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "UnderLine",
  props: {
    newsIdx: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props) {
    const store = useStore();

    const underline = computed(() => {
      return store.state.news.underline[props.newsIdx];
    });

    return {
      props,
      underline,
    };
  },
};
</script>

<style lang="scss" scoped>
li {
  a {
    @apply border-b-2 border-cnn-lightGray;
    &:hover {
      @apply border-none text-cnn-red;
    }
  }
}
</style>
