<template>
  <section>
    <article>
      <h2 class="text-4xl mb-2 font-medium text-center">
        <a href="#">How Russia surrounded Ukraine on three sides</a>
      </h2>
      <a href="#">
        <img
          class="w-full"
          src="https://cdn.cnn.com/cnnnext/dam/assets/220210143848-02-russia-military-buildup-satellite-images-0210-zyabrovka-large-tease.jpg"
          alt
        />
      </a>
      <h3 class="py-2">
        <a href="#">
          <strong>Russia has created pressure points on multiple fronts. Here's a visual guide to where an invasion could be launched.</strong>
        </a>
      </h3>
    </article>
    <article>
      <ul>
        <li>
          <a
            href="#"
          >Biden warns Putin US will react 'decisively and impose swift and severe costs' if Russia invades Ukraine</a>
        </li>
        <li>
          <a
            href="#"
          >Serbia orders large quantities of food as Ukraine-Russia tensions mount, according to CNN affiliate</a>
        </li>
        <li>
          <a href="#">
            <strong>Analysis:</strong> What created the new, more aggressive Putin
          </a>
        </li>
        <li>
          <a href="#">
            <strong>Opinions:</strong> Ukrainians aren't laughing now
          </a>
        </li>
        <li>
          <a href="#">This nurse makes house calls near Ukraine's front lines</a>
        </li>
        <li class="video">
          <a href="#" class="flex items-center">
            <em class="block w-4 h-4 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="m20 33 12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"
                />
              </svg>
            </em>Gunshots rang out as CNN gets look at standoff in East Ukraine
          </a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>

export default {
  setup() {

  }
}
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