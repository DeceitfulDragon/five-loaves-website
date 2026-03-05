<template>
  <main class="mx-auto p-4 font-roboto">

    <!-- Organization: Five Loaves Food Shelf -->
    <section class="cursor-pointer bg-white rounded-xl shadow-md p-6 mb-4" @click="toggleOrg(1)">
      <div class="flex flex-col md:flex-row items-start md:items-center">
        <img src="@/assets/images/logo.webp" alt="Food Shelf Image" class="w-52 h-auto rounded-xl mr-0 md:mr-4 mb-4 md:mb-0">
        <header class="flex-grow text-left">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold text-mainColor">Five Loaves Food Shelf</h1>
              <p class="text-secondaryColor font-semibold">Established 1986 - Serving the community</p>
            </div>
            <i :class="orgToggled[1] ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="text-2xl ml-4"></i>
          </div>
        </header>
      </div>
      <transition name="fade">
        <article v-if="orgToggled[1]" class="mt-4 border-t-2 border-gray-200 pt-4">
          <p>
            The Food Shelf, established in 1986, has transitioned through various locations including the attic of Holy Family Hospital, the Community Commons. Initially operating by appointment only, we now welcomes walk-ins four days a week. <br>
            We collaborate with programs like TEFAP, Second Harvest Heartland, AmpleHarvest.org, and The Emergency Food Network, supported by the United Way of St Croix County. We accept community donations, though emphasize the importance of checking expiration dates on donated food. <br>
            The Food Shelf provides a variety of food items ranging from non-perishable goods to fresh produce, deli items, and frozen meats. Clients can visit twice a month to select food according to their needs. Additionally, the Happy Kids Backpack Program offers weekend food assistance to families with elementary school children, available through schools or upon request at the Food Shelf. </p>
        </article>
      </transition>
    </section>

    <!-- Organization: Two Fish Thrift Store -->
    <section class="cursor-pointer bg-white rounded-xl shadow-md p-6 mb-4" @click="toggleOrg(2)">
      <div class="flex flex-col md:flex-row items-start md:items-center">
        <img src="@/assets/images/two_fish.webp" alt="Two Fish Thrift Store Image" class="w-52 h-auto rounded-xl mr-0 md:mr-4 mb-4 md:mb-0">
        <header class="flex-grow text-left">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold text-mainColor">Two Fish Thrift Store</h1>
              <p class="text-secondaryColor font-semibold">Started as the Community Clothing Center in 1979</p>
            </div>
            <i :class="orgToggled[2] ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="text-2xl ml-4"></i>
          </div>
        </header>
      </div>
      <transition name="fade">
        <article v-if="orgToggled[2]" class="mt-4 border-t-2 border-gray-200 pt-4">
          <p>
            Two Fish Thrift Store has a long history in New Richmond. Started as the Community Clothing Center in 1979 in the basement of First Lutheran Church, it moved around town and eventually became the Clothing Center. <br>
            The Clothing Center was later renamed "Two Fish" to complement the food pantry, Five Loaves. Two Fish has a wide assortment of clothing, books, games, puzzles, toys, and household items. <br>
            Most items are priced between $1-$6, with sales each week and a senior citizen discount on Monday and Tuesdays. 
          </p>
        </article>
      </transition>
    </section>

    <!-- Organization: C.O.M.E. -->
    <section class="cursor-pointer bg-white rounded-xl shadow-md p-6 mb-4" @click="toggleOrg(3)">
      <div class="flex flex-col md:flex-row items-start md:items-center">
        <img src="@/assets/images/fs_10.webp" alt="C.O.M.E. Image" class="w-52 h-auto rounded-xl mr-0 md:mr-4 mb-4 md:mb-0">
        <header class="flex-grow text-left">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold text-mainColor">C.O.M.E.</h1>
              <p class="text-secondaryColor font-semibold">Community Outreach Meal for Everyone</p>
            </div>
            <i :class="orgToggled[3] ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="text-2xl ml-4"></i>
          </div>
        </header>
      </div>
      <transition name="fade">
        <article v-if="orgToggled[3]" class="mt-4 border-t-2 border-gray-200 pt-4">
          <p>
            You are invited to attend the C.O.M.E. - Every 2nd Tuesday of the month from 5:00 - 6:30 pm <br>
            This no cost meal is served monthly at: The United Methodist Church 209 E. Second Street New Richmond, WI <br>
            ALL ARE WELCOME - ALWAYS! 
          </p>
        </article>
      </transition>
    </section>

  </main>
</template>

<script>
export default {
  name: 'Organizations',
  data() {
    return {
      orgToggled: {
        1: false,
        2: false,
        3: false,
      }
    };
  },
  methods: {
    toggleOrg(orgNumber) {
      // Close other sections
      for (let key in this.orgToggled) {
        if (parseInt(key) !== orgNumber) {
          this.orgToggled[key] = false;
        }
      }
      // Toggle
      this.orgToggled[orgNumber] = !this.orgToggled[orgNumber];
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
section article {
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
}
</style>