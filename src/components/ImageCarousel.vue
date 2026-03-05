<template>
  <div class="relative w-full rounded-xl shadow-lg overflow-hidden z-10">
    <div class="relative h-64 lg:h-96">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="{
          'absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out': true,
          'opacity-0 z-0': currentImage !== index,
          'opacity-100 z-10': currentImage === index
        }"
      >
        <img :src="image" class="object-cover w-full h-full" />
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="setCurrentImage(index)"
        class="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
        :class="{ 'bg-gray-700': currentImage === index }"
      ></button>
    </div>

    <!-- Slider controls -->
    <button
      @click="prevImage"
      class="absolute top-1/2 left-3 transform -translate-y-1/2 z-20 bg-gray-300/50 rounded-full p-2 hover:bg-gray-400 transition"
    >
      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <button
      @click="nextImage"
      class="absolute top-1/2 right-3 transform -translate-y-1/2 z-20 bg-gray-300/50 rounded-full p-2 hover:bg-gray-400 transition"
    >
      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImage: 0,
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      this.interval = setInterval(this.nextImage, 5000);
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    setCurrentImage(index) {
      this.currentImage = index;
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
img {
  transition: opacity 0.7s ease-in-out;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
</style>