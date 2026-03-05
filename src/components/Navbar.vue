<template>
  <header class="bg-mainColor p-6 w-full font-bold text-montserrat">
    <nav class="relative flex items-center">
      <!-- Logo on the left -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/images/logo.webp" alt="Logo" class="h-16" />
      </router-link>

      <!-- Large screens menu -->
      <section class="hidden lg:flex items-center justify-start w-auto ml-4" id="navbarNav">
        <ul class="flex flex-row list-none w-full lg:w-auto text-lg">
          <li class="py-2 lg:py-0 lg:border-r border-white">
            <router-link to="/" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-house"></i> Home
            </router-link>
          </li>
          <li class="py-2 lg:py-0 lg:border-r border-white">
            <router-link to="/distribution" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-utensils"></i> Food Distribution
            </router-link>
          </li>
          <li class="py-2 lg:py-0 lg:border-r border-white">
            <router-link to="/organizations" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-sitemap"></i> Organizations
            </router-link>
          </li>
          <li class="py-2 lg:py-0 lg:border-r border-white">
            <router-link to="/donations" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-money-check-dollar"></i> Donations
            </router-link>
          </li>
          <li class="py-2 lg:py-0 lg:border-r border-white">
            <router-link to="/volunteering" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-users"></i> Volunteer
            </router-link>
          </li>
          <li class="py-2 lg:py-0 lg:border-r border-white">
            <router-link to="/campaign" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-building"></i> Capital Campaign
            </router-link>
          </li>
          <li class="py-2 lg:py-0">
            <router-link to="/about" class="text-white px-4 hover:text-green-500">
              <i class="fa-solid fa-user-tie"></i> About Us
            </router-link>
          </li>
        </ul>
      </section>

      <!-- Small screen menu button -->
      <button
        class="block lg:hidden text-white text-3xl ml-auto"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Small screen menu -->
      <transition name="slide-expand">
        <section
          v-if="isMenuOpen"
          class="absolute top-full w-full bg-mainColor lg:hidden z-40"
          id="navbarNavMobile"
        >
          <ul class="flex flex-col items-start list-none w-full px-4 py-4">
            <li class="py-3 border-b border-white w-full">
              <router-link to="/" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-house"></i> Home
              </router-link>
            </li>
            <li class="py-3 border-b border-white w-full">
              <router-link to="/distribution" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-utensils"></i> Food Distribution
              </router-link>
            </li>
            <li class="py-3 border-b border-white w-full">
              <router-link to="/organizations" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-sitemap"></i> Organizations
              </router-link>
            </li>
            <li class="py-3 border-b border-white w-full">
              <router-link to="/donations" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-money-check-dollar"></i> Donations
              </router-link>
            </li>
            <li class="py-3 border-b border-white w-full">
              <router-link to="/volunteering" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-users"></i> Volunteer
              </router-link>
            </li>
            <li class="py-3 border-b border-white w-full">
              <router-link to="/campaign" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-building"></i> Capital Campaign
              </router-link>
            </li>
            <li class="py-3 w-full">
              <router-link to="/about" class="text-white px-4 hover:text-green-500" @click="closeMenu">
                <i class="fa-solid fa-user-tie"></i> About Us
              </router-link>
            </li>
          </ul>
        </section>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
</style>