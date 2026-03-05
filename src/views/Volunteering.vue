<template>
  <main class="mx-auto p-4 font-roboto">
    <section class="lg:px-5 p-0">
      <!-- Food Shelf Volunteers -->
      <article class="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-lg p-4 mb-4">
        <section class="lg:w-1/3 w-full">
          <ImageCarousel :images="foodShelfImages" class="h-48 lg:h-80" />
        </section>
        <section class="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
          <h3 class="text-xl lg:text-2xl text-mainColor font-bold mb-2">Food Shelf Volunteers</h3>
          <p class="text-gray-700">
            Five Loaves Food Shelf volunteers help by welcoming clients to the food shelf, assisting them with paperwork, assisting them with food choices, keeping shelves full, receiving/unloading deliveries, and making sure the food is properly stocked before each shift.
          </p>
          <p class="text-gray-700 mt-2">
            The Food Shelf volunteer opportunities are limitless. To become a food shelf volunteer, please complete the online application.
          </p>
          <a id="volunteerFormLink" target="_blank" href="https://forms.gle/ytjPZb4gCME5uyPdA" class="text-secondaryColor underline mt-2 block">
            <i class="fas fa-arrow-up-right-from-square"></i> Food Shelf Volunteer Form
          </a>
        </section>
      </article>
      <!-- Thrift Store Volunteers -->
      <article class="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-lg p-4">
        <section class="lg:w-1/3 w-full">
          <ImageCarousel :images="thriftStoreImages" class="h-48 lg:h-80" />
        </section>
        <section class="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
          <h3 class="text-xl lg:text-2xl font-bold mb-2">Thrift Store Volunteers</h3>
          <p class="text-gray-700">
            Two Fish Thrift Store volunteers help by accepting, sorting, and pricing donations to be placed on the sales floor. They also assist customers shopping and check them out.
          </p>
          <p class="text-gray-700 mt-2">
            All sales at the Two Fish Thrift Store allow Five Loaves to purchase food for the food shelf. Each dollar raised at Two Fish allows Five Loaves to purchase $6.00 worth of food.
          </p>
          <a href="/files/Two_Fish_Volunteer_Form.pdf" class="text-secondaryColor underline mt-2 block">
            <i class="fas fa-file-pdf"></i> Download Two Fish Volunteer Form (PDF)
          </a>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
import ImageCarousel from '@/components/ImageCarousel.vue';
import FSC1 from '@/assets/images/Food_Shelf_Carousel/FSC_1.webp';
import FSC2 from '@/assets/images/Food_Shelf_Carousel/FSC_2.webp';
import FSC3 from '@/assets/images/Food_Shelf_Carousel/FSC_3.webp';
import FSC4 from '@/assets/images/Food_Shelf_Carousel/FSC_4.webp';
import FSC5 from '@/assets/images/Food_Shelf_Carousel/FSC_5.webp';
import TS1 from '@/assets/images/ts_1.webp';
import TS8 from '@/assets/images/ts_8.webp';
import TS3 from '@/assets/images/ts_3.webp';
import TS4 from '@/assets/images/ts_4.webp';
import TS5 from '@/assets/images/ts_5.webp';
import TS6 from '@/assets/images/ts_6.webp';

export default {
  name: 'Volunteer',
  components: { ImageCarousel },
  data() {
    return {
      foodShelfImages: [FSC1, FSC2, FSC3, FSC4, FSC5],
      thriftStoreImages: [TS1, TS8, TS3, TS4, TS5, TS6]
    };
  }
};
</script>