<template>
  <div class="container mx-auto pt-4 max-w-6xl hidden lg:block">
    <ul class="flex justify-center text-sm m-auto">
      <li>
        <strong>PODCAST:</strong> Axe Files
      </li>
      <li>
        <strong>TRENDING:</strong> Biden and Putin
      </li>
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
  setup() {

  }
}
</script>

<style lang="scss" scoped>
strong {
  @apply text-cnn-red;
}
li {
  @apply border-r-2 border-cnn-lightGray pr-2 mr-2;
}
</style>