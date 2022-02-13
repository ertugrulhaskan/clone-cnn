<template>
  <header class="bg-cnn-black">
    <div class="container mx-auto flex justify-between max-w-6xl">
      <div class="flex">
        <router-link class="ml-2 text-white text-sm font-normal" to="/">
          <the-logo></the-logo>
        </router-link>
        <div class="hidden text-white lg:flex lg:items-center">
          <router-link class="ml-2 text-white text-sm font-normal" to="/">US</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">World</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Politics</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Business</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Opinion</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Health</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Entertainment</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Style</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Travel</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Sports</router-link>
          <router-link class="ml-2 text-white text-sm font-normal" to="/">Videos</router-link>
        </div>
      </div>
      <div class="flex items-center text-white">
        <router-link to="/" class="text-sm tracking-widest flex items-center">
          <img class="w-2 h-2 mr-2" src="@/assets/images/live-story-status_dark.gif" alt="Live TV" /> LIVE TV
        </router-link>
        <div class="relative language ml-6">
          <div class="hidden lg:flex text-sm items-center">
            Edition
            <div class="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                xml:space="preserve"
                viewBox="0 0 29 29"
              >
                <path
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m20.5 11.5-6 6-6-6"
                />
              </svg>
            </div>
          </div>
          <ul
            class="hidden absolute top-12 right-0 bg-cnn-white shadow-md rounded-md px-4 py-2 text-cnn-gray text-sm"
          >
            <li>U.S</li>
            <li>International</li>
            <li>Arabic</li>
            <li>Español</li>
          </ul>
        </div>
        <div class="hidden lg:inline-flex ml-3">
          <div class="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              fill="#FFFFFF"
              viewBox="0 0 29 29"
            >
              <path
                d="M11.854 21.854c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.588-8-8-8z"
              />
              <path
                d="M26.146 27.146a.997.997 0 0 1-.707-.293l-7.694-7.694a.999.999 0 1 1 1.414-1.414l7.694 7.694a.999.999 0 0 1-.707 1.707z"
              />
            </svg>
          </div>
        </div>
        <div class="ml-3">
          <div class="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              xml:space="preserve"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 .986A7.022 7.022 0 0 0 .986 8c0 1.874.73 3.635 2.055 4.959A6.965 6.965 0 0 0 8 15.014 7.022 7.022 0 0 0 15.014 8 7.022 7.022 0 0 0 8 .986zm0 1A6.021 6.021 0 0 1 14.014 8a5.984 5.984 0 0 1-1.606 4.074 5.836 5.836 0 0 0-2.564-1.754 2.999 2.999 0 0 0 1.11-2.326A2.997 2.997 0 0 0 7.94 5.006a2.997 2.997 0 0 0-2.988 3.012c0 .929.436 1.75 1.104 2.298a5.846 5.846 0 0 0-2.526 1.698A5.964 5.964 0 0 1 1.986 8 6.021 6.021 0 0 1 8 1.986zm-.035 4.02c1.097 0 1.988.892 1.988 2.012A1.988 1.988 0 0 1 8.03 10c-.029 0-.057-.006-.086-.006-.025 0-.049.005-.074.006a1.994 1.994 0 0 1-1.916-2.006c0-1.096.892-1.988 2.012-1.988zm-.096 4.992c.024.001.048.008.072.008h.024c.022 0 .04-.007.062-.008a4.84 4.84 0 0 1 3.643 1.752A5.963 5.963 0 0 1 8 14.014a5.965 5.965 0 0 1-3.742-1.31 4.848 4.848 0 0 1 3.611-1.706z"
              />
            </svg>
          </div>
        </div>
        <div class="ml-3">
          <div class="w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M4.484 4a.5.5 0 0 0 .051 1h6.93a.5.5 0 1 0 0-1h-6.93a.5.5 0 0 0-.05 0zm0 3a.5.5 0 0 0 .051 1h6.93a.5.5 0 1 0 0-1h-6.93a.5.5 0 0 0-.05 0zm0 3a.5.5 0 0 0 .051 1h6.93a.5.5 0 1 0 0-1h-6.93a.5.5 0 0 0-.05 0z"
                color="#000"
                font-family="sans-serif"
                font-weight="400"
                overflow="visible"
                style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from './TheLogo.vue'

export default {
  components: { TheLogo },
  name: "NavBar",
  setup() {
  }
}
</script>

<style lang="scss" scoped>
</style>