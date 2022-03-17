<template>
  <form class="relative search-bar-wrapper">
    <input
      type="text"
      name="txtSearch"
      id="txtSearch"
      placeholder="Search CNN..."
      class="w-full px-2 h-9 rounded-[3px] border border-cnn-lightBlack text-cnn-black placeholder:text-cnn-black focus:outline-none"
    />
    <button
      type="submit"
      class="flex absolute right-3 top-[5px] text-cnn-black font-semibold items-center"
    >
      Search
      <div class="w-4 ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
          <switch>
            <g>
              <path
                d="M12 52h62.344L53.172 73.172a4 4 0 1 0 5.657 5.656l28-28a4 4 0 0 0 0-5.656l-28-28A3.989 3.989 0 0 0 56 16a4 4 0 0 0-2.828 6.828L74.344 44H12a4 4 0 0 0 0 8z"
              />
            </g>
          </switch>
        </svg>
      </div>
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
