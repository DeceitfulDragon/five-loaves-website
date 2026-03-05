<template>
  <main class="mx-auto p-4 font-roboto">
    <!-- About Us Section -->
    <section class="mb-6">
      <h2 class="text-4xl font-bold text-mainColor underline mb-6 pl-4">
        About Us
      </h2>
      <div class="flex flex-col lg:flex-row">
        <!-- Image (1/3) -->
        <div class="lg:w-1/3 mb-6 lg:mb-0 flex justify-start">
          <img
            src="@/assets/images/about_us.webp"
            alt="About Us"
            class="w-full mb-4 rounded-lg shadow-lg object-cover"
          />
        </div>

        <!-- Information (2/3) -->
        <div class="lg:w-2/3 lg:mx-6">
          <h2 class="text-xl mb-2 font-bold">Our Mission:</h2>
          <p class="text-lg pb-2 pl-2">
            We provide food and clothing to people in need through the
            generosity of our community.
          </p>
          <h2 class="text-xl mb-2 font-bold">Who Are We?</h2>
          <p class="text-lg pb-2 pl-2">
            We are a nonprofit 501(c)3 organization, established in 1986. We are
            staffed by volunteers and a board of directors. Our organization has
            grown to include the COME Meal (the Community Meal for Everyone) and
            the Happy Kids Backpack program.
          </p>
          <p class="text-lg pl-2">
            We receive food, clothing, monetary donations, and assistance from
            many organizations and individuals throughout the community. Thank
            you to all.
          </p>

          <!-- 3 Lists (Board Members, Executive Team, and Who We Work With) side-by-side on large screens -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 pl-2">
            <!-- Who We Work With -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Who We Work With:</h3>
              <ul class="list-disc space-y-1 pl-4">
                <li>Kiwanis of New Richmond</li>
                <li>Dick's Fresh Market, Walmart, Kwik-Trip, & Aldi</li>
                <li>Knights of Columbus</li>
                <li>New Richmond Ministerial Association</li>
                <li>St. Luke's Lutheran Church Men's Group</li>
                <li>St. Croix Valley Food Bank</li>
                <li>WestCAP</li>
                <li>Rotary Club of New Richmond</li>
                <li>Salvation Army/Grace Place</li>
                <li>AmpleHarvest</li>
                <li>The Food Group & CIS</li>
                <li>Lakeside Foods</li>
                <li>UW Extension</li>
              </ul>
            </div>

            <!-- Board Members -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Board Members:</h3>
              <ul class="list-disc space-y-1 pl-4">
                <li>Darian Blattner, <strong>President</strong></li>
                <li>Matt Tuinstra, <strong>Vice President</strong></li>
                <li>Mark Casey, <strong>Secretary/Treasurer</strong></li>
                <li>Rachel Savoula, <strong>Member</strong></li>
                <li>David Schnitzler, <strong>Member</strong></li>
                <li>Linda Stefonek, <strong>Member</strong></li>
                <li>Gina Moe-Knutson, <strong>Member</strong></li>
                <li>Pastor Jeremy Deaner, <strong>Member</strong></li>
                <li>Marie Gremore, <strong>Member</strong></li>
                <li>Larry Gee, <strong>Member</strong></li>
                <li>Dennis Mitchell, <strong>Member</strong></li>
              </ul>
            </div>

            <!-- Executive Team -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Executive Team:</h3>
              <ul class="list-disc space-y-1 pl-4">
                <li>
                  <strong>Executive Director:</strong><br />
                  Jean Needham
                </li>
                <li>
                  <strong>Food Shelf Manager:</strong><br />
                  Jennifer Hanson
                </li>
                <li>
                  <strong>Thrift Store Manager:</strong><br />
                  Michelle Green
                </li>
                <li>
                  <strong>COME Coordinator:</strong><br />
                  Jean Needham / Karen Nerby
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section>
      <h2 class="text-4xl font-bold text-mainColor underline mb-6 pl-4">
        Locations
      </h2>
      <div class="space-y-8 space-x-4 lg:space-y-0 lg:flex lg:justify-between">
        <!-- Food Shelf -->
        <article
          class="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-6 lg:w-1/2"
        >
          <iframe
            id="foodShelfMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.3626163282409!2d-92.53859081736402!3d45.120055452270734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2a60e5fb82cf7%3A0xa69fa1227f7ba1a3!2sFive%20Loaves%20Food%20Shelf!5e0!3m2!1sen!2sau!4v1728942661803!5m2!1sen!2sau"
            class="w-full lg:w-1/2 h-48 lg:h-64 rounded-lg shadow-lg mb-4 lg:mb-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="lg:w-1/2 lg:ml-6">
            <h3 class="text-2xl font-bold text-mainColor mb-4 underline">
              Five Loaves Food Shelf
            </h3>
            <p>
              <i class="fa-solid fa-location-dot"></i>
              <span id="foodShelfLocation">144 West 3rd Street, Suite D</span>
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <a
                href="mailto:jennifer5loaves@gmail.com"
                class="text-blue-800 font-semibold"
                >jennifer5loaves@gmail.com</a
              >
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>
              <span id="FoodShelfPhone">(715)-246-5255</span>
            </p>
            <ul
              class="list-disc mt-4 list-none text-secondaryColor font-semibold"
            >
              <li><i class="far fa-clock"></i> Monday: 5:30 pm - 7:00 pm</li>
              <li><i class="far fa-clock"></i> Tuesday: 10:00 am - 12:00 pm</li>
              <li><i class="far fa-clock"></i> Wednesday: 2:00 pm - 4:00 pm</li>
              <li><i class="far fa-clock"></i> Thursday: 5:30 pm - 7:00 pm</li>
              <li><i class="far fa-clock"></i> Friday: CLOSED</li>
            </ul>
          </div>
        </article>

        <!-- Thrift Store -->
        <article
          class="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-6 lg:w-1/2"
        >
          <iframe
            id="thriftStoreMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.1622388762744!2d-92.5386619496247!3d45.120077932664344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2a8bc81bed8f7%3A0xfbcd9d943a4ab1e9!2sTwo%20Fish%20Thrift%20Store!5e0!3m2!1sen!2sau!4v1728942720772!5m2!1sen!2sau"
            class="w-full lg:w-1/2 h-48 lg:h-64 rounded-lg shadow-lg mb-4 lg:mb-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="lg:w-1/2 lg:ml-6">
            <h3 class="text-2xl font-bold text-mainColor mb-4 underline">
              Two Fish Thrift Store
            </h3>
            <p>
              <i class="fa-solid fa-location-dot"></i>
              <span id="thriftStoreLocation">144 West Third Street </span>
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <a
                href="mailto:jennifer5loaves@gmail.com"
                class="text-blue-800 font-semibold"
                >2fishcontacts@gmail.com</a
              >
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>
              <span id="ThriftStorePhone">(715)-246-0066</span>
            </p>
            <ul
              class="list-disc mt-4 list-none text-secondaryColor font-semibold"
            >
              <li><i class="far fa-clock"></i> Monday: 10:00 am - 4:30 pm</li>
              <li><i class="far fa-clock"></i> Tuesday: 10:00 am - 1:00 pm</li>
              <li>
                <i class="far fa-clock"></i> Wednesday: 10:00 am - 6:00 pm
              </li>
              <li><i class="far fa-clock"></i> Thursday: 10:00 am - 4:30 pm</li>
              <li><i class="far fa-clock"></i> Friday: 10:00 am - 4:30 pm</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.hover\:bg-secondaryHover:hover {
  background-color: #63463b;
}
</style>
