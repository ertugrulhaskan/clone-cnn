<template>
  <trend-bar></trend-bar>
  <div class="container mx-auto max-w-6xl p-4 lg:p-0 lg:pt-4">
    <div class="flex">
      <head-line class="w-[450px] mr-5"></head-line>
      <div class="grow">
        <div class="flex">
          <div class="basis-1/2 mr-2">
            <article class="relative">
              <a href="#">
                <img
                  class="w-full"
                  src="https://cdn.cnn.com/cnnnext/dam/assets/220213221336-60-super-bowl-2022-medium-tease.jpg"
                  alt
                />
              </a>
              <h3 class="py-2">
                <a href="#">
                  <strong>Who scored and who fumbled on TV's biggest stage</strong>
                </a>
              </h3>
            </article>
            <article class="mb-2">
              <ul class="list-disc list-inside">
                <li>Rams top Bengals in dramatic Super Bowl</li>
                <li>Hear from Rams players on their big victory</li>
                <li>Strange QR-code ad briefly crashes app</li>
              </ul>
            </article>
            <article class="relative">
              <a href="#">
                <img
                  class="w-full"
                  src="https://cdn.cnn.com/cnnnext/dam/assets/220214000814-ambassador-bridge-02132022-medium-tease.jpg"
                  alt
                />
              </a>
              <h3 class="py-2">
                <a href="#">
                  <strong>Trudeau becomes first Canadian leader to invoke Emergencies Act</strong>
                </a>
              </h3>
            </article>
            <article>
              <ul class="list-disc list-inside">
                <li>US truckers frustrated by more than Covid</li>
                <li>California to keep mask mandate in schools as indoor mandate ends</li>
              </ul>
            </article>
          </div>
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
</style>