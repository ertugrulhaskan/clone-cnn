<template>
  <div>
    <a
      :href="card.link"
      class="title h-9 flex justify-between text-cnn-lightBlack bg-cnn-silver font-semibold"
      ><h2 class="p-2">{{ card.title }}</h2>
      <div class="w-9 bg-cnn-lightGray">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill="#34485c"
            fill-rule="evenodd"
            d="m-937 909.462.7-.7 5.3 5.3-5.3 5.3-.7-.7 4.6-4.6-4.6-4.6z"
            color="#000"
            font-family="sans-serif"
            font-weight="400"
            overflow="visible"
            style="
              line-height: normal;
              text-indent: 0;
              text-align: start;
              text-decoration-line: none;
              text-decoration-style: solid;
              text-decoration-color: #000;
              text-transform: none;
              block-progression: tb;
              isolation: auto;
              mix-blend-mode: normal;
            "
            transform="translate(942 -906.362)"
          />
        </svg>
      </div>
    </a>
    <a :href="card.newsLink">
      <figure class="relative">
        <img :src="card.image.src" :alt="card.title" />
        <figcaption
          v-if="card.image.caption"
          class="bg-cnn-black absolute left-0 bottom-0 p-2 text-cnn-white"
        >
          {{ card.image.caption }}
        </figcaption>
      </figure>
    </a>
    <h3 class="text-lg">
      <a :href="card.newsLink">{{ card.body }}</a>
    </h3>
    <div>
      <h3 v-for="(item, idx) in card.listNews" :key="idx">
        <a :href="item.link">{{ item.body }}</a>
      </h3>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TheCard",
  props: {
    newsIdx: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props) {
    const store = useStore();

    const card = computed(() => store.state.news.card[props.newsIdx]);

    return {
      card,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  @apply border-b border-cnn-lightGray font-normal;
}
h3 {
  &:last-child {
    @apply border-b-0;
  }
  a {
    @apply block p-2;
    &:hover {
      @apply text-cnn-red;
    }
  }
}
</style>
