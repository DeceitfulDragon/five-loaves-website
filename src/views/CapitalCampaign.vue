<template>
  <main class="mx-auto p-4 font-roboto">

    <!-- Image Section -->
    <section class="flex flex-col lg:flex-row justify-center items-center gap-6 mb-6">
      <!-- Drawing 1 -->
      <img 
        src="@/assets/images/Campaign/CC_A2.webp" 
        alt="Capital Campaign Image 1" 
        class="w-full lg:w-1/3 object-cover rounded-xl shadow-lg"
      />
      <!-- Site -->
      <img 
        src="@/assets/images/Campaign/CC_SITE.webp" 
        alt="Capital Campaign Image 3" 
        class="w-full lg:w-1/3 object-cover rounded-xl shadow-lg"
      />
      <!-- Drawing 2 -->
      <img 
        src="@/assets/images/Campaign/CC_A1.webp" 
        alt="Capital Campaign Image 2" 
        class="w-full lg:w-1/3 object-cover rounded-xl shadow-lg"
      />
    </section>

    <!-- Text Section -->
    <section class="bg-white h-64 flex flex-col lg:flex-row items-center justify-between p-6 rounded-xl">
      <!-- Text on the left -->
      <article class="lg:w-2/3">
        <h2 class="text-3xl font-bold text-left text-mainColor underline">
          <i class="fa-regular fa-heart"></i> We need your help!
        </h2>
        <p class="text-lg text-left pt-4">
          We are excited to announce our fundraiser to build a <strong>permanent location</strong> for our food shelf and thrift store at 648 W Fourth Street in New Richmond WI.<br>
          We need your help on this important mission! Your support will help us secure a new, larger facility to better serve our neighbors!<br>
          Every contribution, big or small, helps us provide vital resources to families in our community and get closer to our goal.<br>
          Please spread the word! Share our cause with friends, family, and social networks to increase our reach.
        </p>
      </article>
      <!-- Donate Button on the right -->
      <article class="lg:w-auto mt-4 lg:mt-0 lg:ml-6">
        <a target="_blank" class="bg-secondaryColor p-20 rounded-xl text-white font-bold text-3xl font-montserrat block text-center hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg" href="https://www.zeffy.com/fundraising/869bc731-ff93-4cd3-a6d1-f037a07c7745">
          <i class="fa-solid fa-circle-dollar-to-slot"></i> Donate Here!
        </a>
      </article>
    </section>

  </main>
</template>

<script>
export default {
  name: "CapitalCampaign",
};
</script>
