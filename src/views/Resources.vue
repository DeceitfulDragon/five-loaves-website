<template>
  <main class="mx-auto max-w-6xl px-4 py-6 font-roboto">
    <header class="mb-6">
      <h1 class="text-3xl font-bold text-mainColor">Resources</h1>
      <p class="mt-2 text-gray-700">
        Community programs, helpful information, and announcements.
      </p>
    </header>

    <div class="space-y-5">
      <article v-for="resource in visibleResources" :key="resource.id"
        class="overflow-hidden rounded-3xl bg-white p-5 shadow-lg sm:p-7">
        <h2 class="text-2xl font-bold text-secondaryColor">
          {{ resource.title }}
        </h2>

        <div v-if="resource.paragraphs?.length" class="mt-3 space-y-3 text-gray-700">
          <p v-for="(paragraph, index) in resource.paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div v-if="resource.image" class="mt-5">
          <a :href="resource.image" target="_blank" rel="noopener noreferrer"
            :aria-label="`View ${resource.title} image at full size`" class="block rounded-xl bg-gray-50 p-3 sm:p-5">
            <img :src="resource.image" :alt="resource.imageAlt || resource.title" loading="lazy"
              class="mx-auto max-h-[750px] w-auto max-w-full rounded-lg object-contain">
          </a>
          <p class="mt-2 text-center text-sm text-gray-500">
            Select the image to view it at full size.
          </p>
        </div>

        <div v-if="resource.links?.length" class="mt-5 flex flex-wrap gap-3">
          <a v-for="link in resource.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-mainColor px-4 py-2 font-semibold text-white hover:opacity-90">
            {{ link.label }}
            <i class="fas fa-arrow-up-right-from-square ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import thanksgivingFlyer from '@/assets/images/resources/thanksgiving_flyer_2026.png';
export default {
  name: 'Resources',
  data() {
    return {
      resources: [
        {
          id: 'thanksgiving-meal-basket',
          title: 'Thanksgiving Meal Basket',
          paragraphs: [],
          image: thanksgivingFlyer,
          imageAlt: 'Thanksgiving Meal Basket information flyer',
          links: [],
          published: true
        }
      ]
    };
  },
  computed: {
    visibleResources() {
      return this.resources.filter(resource => resource.published);
    }
  }
};
</script>