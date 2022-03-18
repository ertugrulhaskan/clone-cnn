<template>
  <div class="container mx-auto hidden max-w-6xl pt-4 lg:block">
    <ul class="m-auto flex justify-center text-sm">
      <li><strong>PODCAST:</strong> Axe Files</li>
      <li><strong>TRENDING:</strong> Biden and Putin</li>
      <li>Super Bowl ticket prices</li>
      <li>Canadian truckers</li>
      <li>Potato perfume</li>
      <li>Valentine's Day gifts</li>
      <li>'Inventing Anna'</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
strong {
  @apply text-cnn-red;
}
li {
  @apply mr-2 border-r-2 border-cnn-lightGray pr-2;
}
</style>
