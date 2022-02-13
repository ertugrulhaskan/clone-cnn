<template>
  <trend-bar></trend-bar>
  <div class="container mx-auto max-w-6xl p-4 lg:p-0 lg:pt-4">
    <div class="flex">
      <head-line class="w-[450px] mr-5"></head-line>
      <div class="grow">
        <div class="flex">
          <div class="basis-1/2 mr-2">Col-2</div>
          <div class="basis-1/2">Col-3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrendBar from '@/components/TrendBar.vue';
import HeadLine from '@/components/HeadLine.vue';
export default {
  name: "HomeView",
  components: { TrendBar, HeadLine },
};
</script>
