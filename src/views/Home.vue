<template>
  <main class="flex flex-col lg:flex-row w-full p-4 font-roboto">
    <!-- Main Content -->
    <section class="lg:w-3/4 bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-center">
      <h1 class="text-3xl text-center">
        Serving those in need within our community for nearly 40 years
      </h1>
      <h2 class="text-2xl text-center mt-4">
        Five Loaves Food Shelf: <span class="font-semibold">(715)-246-5255</span>
      </h2>
      <h2 class="text-2xl text-center mt-2">
        Two Fish Thrift Store: <span class="font-semibold">(715)-246-0066</span>
      </h2>

      <!-- Youtube Video -->
      <section class="my-2 flex justify-center">
        <div class="w-full lg:w-3/4 aspect-video">
          <iframe title="Five Loaves Video"
            src="https://www.youtube.com/embed/drwyi3m8qGw?wmode=transparent&autoplay=1&mute=1&theme=dark&controls=1&autohide=0&loop=0&showinfo=1&rel=0&enablejsapi=0"
            class="w-full h-full rounded-2xl" allowfullscreen></iframe>
        </div>
      </section>
    </section>

    <!-- Sidebar -->
    <aside class="lg:w-1/4 rounded-lg p-2 lg:ml-6 flex flex-col ">
      <!-- Image Carousel -->
      <ImageCarousel class="mb-5" :images="carouselImages" />

      <!-- Sidebar Buttons -->
      <header class="text-center">
        <h1 class="text-3xl font-bold mb-4">Quick Links</h1>
      </header>

      <ul class="space-y-4">
        <li>
          <a target="_blank" href="https://www.zeffy.com/donation-form/648d7641-d6f5-4c1c-a9b0-9b4f34568973"
            class="w-full block text-center bg-secondaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg">
            Donate Here (No Fees!)
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.zeffy.com/fundraising/869bc731-ff93-4cd3-a6d1-f037a07c7745"
            class="w-full block text-center bg-secondaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg">
            Capital Campaign Donations
          </a>
        </li>
        <li>
          <router-link to="/about"
            class="w-full block text-center bg-secondaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg">
            Our Locations and Hours
          </router-link>
        </li>
        <li>
          <router-link to="/volunteering"
            class="w-full block text-center bg-secondaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg">
            Volunteering
          </router-link>
        </li>
        <li>
          <router-link to="/organizations#orgInfo3"
            class="w-full block text-center bg-secondaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg">
            C.O.M.E. Meal
          </router-link>
        </li>
      </ul>
    </aside>
  </main>
</template>

<script>
import ImageCarousel from '@/components/ImageCarousel.vue';
import FSC1 from '@/assets/images/Food_Shelf_Carousel/FSC_1.webp';
import FSC2 from '@/assets/images/Food_Shelf_Carousel/FSC_2.webp';
import FSC3 from '@/assets/images/Food_Shelf_Carousel/FSC_3.webp';
import FSC4 from '@/assets/images/Food_Shelf_Carousel/FSC_4.webp';
import FSC5 from '@/assets/images/Food_Shelf_Carousel/FSC_5.webp';

export default {
  name: 'Home',
  components: { ImageCarousel },
  data() {
    return {
      carouselImages: [FSC1, FSC2, FSC3, FSC4, FSC5]
    };
  }
};
</script>