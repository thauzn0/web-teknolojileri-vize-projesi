<template>
  <div class="search-overlay q-pa-md">
    <div class="flex justify-between items-center">
      <!-- Your logo or any other content goes here -->
      <div class="logo relative">
        <!-- Your logo content goes here -->
      </div>

      <div class="w-full mr-2 relative">
        <q-input
          v-model="searchQuery"
          class="search-input cornered"
          placeholder="Ne aramıştınız?"
          @keydown.enter="performSearch"
        />
        <span class="overlay-search-icon" @click="performSearch">
          <!-- Your search icon SVG goes here -->
        </span>
      </div>

      <!-- Close icon -->
      <div>
        <span class="overlay-close-icon" @click="closeSearch">
          <!-- Your close icon SVG goes here -->
        </span>
      </div>
    </div>

    <!-- Additional content goes here -->

    <!-- Category products or other content -->
    <div class="flex-1 mt-4 category-products-main">
      <!-- Your category products or other content goes here -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      // Handle search action
      console.log('Performing search:', this.searchQuery);
    },
    closeSearch() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-overlay input {
  width: 900px;
  height: 50px;
  margin-top: -400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.overlay-close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  cursor: pointer;
}
</style>
