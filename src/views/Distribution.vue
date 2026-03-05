<template>
  <main class="mx-auto lg:mx-20 p-4 font-roboto">
    
    <!-- Header -->
    <section class="text-center mb-2">
      <h2 class="text-3xl font-bold mt-4">Receiving food at Five Loaves</h2>
      <p class="mt-2 text-lg">
        <i class="fas fa-circle-exclamation"></i> To receive food at Five Loaves, you need to be a resident of or live within the boundaries of the New Richmond school district.
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <!-- 1 -->
      <article class="bg-white border-secondaryColor shadow-lg rounded-3xl p-6 text-center hover:shadow-xl transition w-full">
        <img src="@/assets/images/fs_1.webp" alt="Some outdoor wall art" class="w-full h-80 object-cover rounded-3xl mb-4">
        <h3 class="text-2xl font-bold text-mainColor">
          <i class="fas fa-basket-shopping"></i> <u>First Visit</u>
        </h3>
        <p class="mt-2">The first time you receive food from Five Loaves, you will need:</p>
        <ul class="mt-4 ml-6 text-left list-disc space-y-2">
          <li><i class="far fa-address-card"></i> Some form of ID with a birthdate</li>
          <li><i class="far fa-address-book"></i> The names and age groups of those residing in your household</li>
        </ul>
        <p class="mt-4">
          <i class="fas fa-circle-exclamation"></i> You must be a resident of or live within the boundaries of the <span class="cityAndState"></span> School District.
        </p>
      </article>

      <!-- 2 -->
      <article class="bg-white border-secondaryColor shadow-lg rounded-3xl p-6 text-center hover:shadow-xl transition w-full">
        <img src="@/assets/images/fs_11.webp" alt="A cart with food in someone's hand" class="w-full h-80 object-cover rounded-3xl mb-4">
        <h3 class="text-2xl font-bold text-mainColor">
          <i class="fas fa-utensils"></i> <u>Getting Food</u>
        </h3>
        <p class="mt-2 text-gray-700">
          Clients may visit Five Loaves <strong>TWICE</strong> a month to receive food. You may come in to shop for food or receive food curbside.
        </p>
        <h3 class="mt-4 text-2xl font-bold text-mainColor">
          <i class="fas fa-car-side"></i> <u>Curbside List</u>
        </h3>
        <p class="mt-2 text-gray-700">
          Curbside lists are available inside the client entrance. You can also print the list below and bring it with you, or email it to: 
          <a id="foodShelfEmailLink" href="mailto:jennifer5loaves@gmail.com" class="text-secondaryColor underline"><br>
            <i class="fas fa-paper-plane"></i> <u>jennifer5loaves@gmail.com</u>
          </a>
        </p>
        <a href="/files/Curbside_Pick_Up.pdf" class="mt-4 text-secondaryColor underline">
          <i class="fas fa-file-pdf"></i> <u>Download Curbside Pick Up Form (PDF)</u>
        </a>
      </article>

      <!-- 3 -->
      <article class="bg-white border-secondaryColor shadow-lg rounded-3xl p-6 text-center hover:shadow-xl transition w-full">
        <img src="@/assets/images/fs_6.webp" alt="A waiting room" class="w-full h-80 object-cover rounded-3xl mb-4">
        <h3 class="text-2xl font-bold text-mainColor">
          <i class="far fa-calendar-alt"></i> <u>Our Hours</u>
        </h3>
        <p class="mt-2 text-gray-700">
          We offer open distribution times, so no appointment is needed. Please arrive 15 minutes prior to closing to ensure there's enough time for you to receive your food.
        </p>
        <ul class="mt-4 ml-6 text-left list-disc space-y-2">
          <li><i class="far fa-clock"></i> <span class="font-semibold">Monday</span> - 5:30pm to 7:00pm</li>
          <li><i class="far fa-clock"></i> <span class="font-semibold">Tuesday</span> - 10:00am to 12:00pm</li>
          <li><i class="far fa-clock"></i> <span class="font-semibold">Wednesday</span> - 2:00pm to 4:00pm</li>
          <li><i class="far fa-clock"></i> <span class="font-semibold">Thursday</span> - 5:30pm to 7:00pm</li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "Distribution",
};
</script>