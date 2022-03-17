<template>
  <trend-bar></trend-bar>
  <div
    class="container mx-auto max-w-6xl p-4 lg:p-0 lg:pt-4"
    v-if="$store.state.news !== null"
  >
    <div class="flex">
      <head-line class="w-[450px] mr-5"></head-line>
      <div class="grow">
        <div class="flex">
          <div class="basis-1/2 mr-2">
            <under-line newsIdx="0"></under-line>
            <under-line newsIdx="1"></under-line>
          </div>
          <div class="basis-1/2">
            <under-line newsIdx="2"></under-line>
            <under-line newsIdx="3"></under-line>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid gap-5 grid-cols-3">
      <the-card newsIdx="0"></the-card>
      <the-card newsIdx="1"></the-card>
      <the-card newsIdx="2"></the-card>
    </div>
  </div>
  <the-footer v-if="$store.state.news !== null"></the-footer>
</template>

<script>
import TrendBar from "@/components/TrendBar.vue";
import HeadLine from "@/components/HeadLine.vue";
import UnderLine from "@/components/UnderLine.vue";
import TheCard from "@/components/TheCard.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: { TrendBar, HeadLine, UnderLine, TheCard, TheFooter },
};
</script>

<style lang="scss" scoped>
article,
li {
  @apply text-sm font-normal;
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
.divider {
  @apply my-10;
  &::before,
  &::after {
    content: " ";
    @apply block h-[4px] w-full bg-cnn-lightGray mb-[1px];
  }
}
</style>
