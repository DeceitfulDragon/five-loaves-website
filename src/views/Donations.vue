<template>
  <main class="mx-auto p-4 font-roboto">
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Sidebar Content -->
      <article class="lg:col-span-1">
        <section class="outline-dashed rounded-xl text-center p-6">
          <p>
            You may drop off your clothing or food donations at our site, or send your tax-deductible monetary donations to:
            <br>
            <strong>
              <span id="poBox" class="block my-2   text-xl">
                Five Loaves<br>
                P.O. Box 222<br>
                New Richmond WI 54017
              </span>
            </strong>
          </p>
          <a target="_blank" href="https://www.zeffy.com/donation-form/648d7641-d6f5-4c1c-a9b0-9b4f34568973" class="bg-secondaryColor hover:bg-amber-900 text-white p-2 rounded-md w-full mt-4 hover:bg-secondaryHover transition transform hover:-translate-y-1 shadow-lg">
            Donate Money Online (No Fees!)
          </a>
          <p class="mt-4 text-center"><i>100%</i> of your financial contributions stay within our community.</p>
        </section>
        <section class="mt-2 p-6">
          <p>Five Loaves is so grateful to its donors for assisting us in our mission.</p>
          <h3 class="mt-3 text-2xl font-semibold underline">Important Food Donation Notes:</h3>
          <p class="mt-2 text-lg">
            We are continually looking to increase the nutrition of the foods we provide, so please think of that when contributing to a food drive.
            <br><br>
            Please check the expiration dates on items you donate, as we cannot re-distribute canned items older than 12 months or dry goods more than 6 months past their expiration.
            <br><br>
            We cannot accept home-canned goods or food items without ingredient labels.
            <br><br>
            You may also donate money directly to the food shelf. We generally order basic staples from local food banks, filling gaps at a significantly lower cost.
          </p>
          <p class="mt-4 text-red-600">
            <i class="fa-solid fa-utensils text-lg"></i>
            <strong> Please do not leave food donations outside as this is not safe and attracts wildlife.</strong>
          </p>
        </section>
      </article>

      <!-- Donation Cards Section -->
      <article class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Five Loaves Food Shelf Card -->
        <section class="bg-white shadow-lg rounded-3xl p-6">
          <figure>
            <img src="@/assets/images/fs_1_3.webp" class="w-full rounded-xl" alt="Five Loaves Food Shelf">
          </figure>
          <article class="mt-4">
            <h3 class="text-2xl font-bold text-green-800 underline">Five Loaves Food Shelf</h3>
            <p class="mt-4 font-semibold">We are in need of:</p>
            <ul class="list-disc pl-5 space-y-1 text-lg">
              <li>Spaghetti Sauce & Salsa</li>
              <li>SPAM</li>
              <li>Almond & Sun Butter</li>
              <li>Dried Fruit</li>
              <li>French Style Green Beans & Baked Beans</li>
              <li>Brown & Powdered Sugar</li>
              <li>Soups (any type)</li>
              <li>Instant Coffee & K-Cups</li>
              <li>Cereal (Kid Friendly)</li>
              <li>Brown, Basmati, & Jasmine Rice</li>
              <li>Canned Potatoes</li>
              <li>Salad Dressing</li>
              <li>Baking or Pancake Mix</li>
              <li>Pasta & Rice Side Dishes</li>
              <li>Baking Soda & Powder</li>
              <li>Mayo & Miracle Whip</li>
              <li>Flavored Instant Oatmeal</li>
              <li>Chocolate & Baking Chips</li>
              <li>Brownie, Pudding, & Cake Mixes</li>
              <li>Tampons & Pads</li>
              <li>Dog & Cat Food</li>
              <li>Cat Litter</li>
            </ul>
          </article>
        </section>

        <!-- Two Fish Thrift Store Card -->
        <section class="bg-white shadow-lg rounded-3xl p-6">
          <figure>
            <img src="@/assets/images/ts_1_2.webp" class="w-full rounded-xl" alt="Two Fish Thrift Store">
          </figure>
          <article class="mt-4">
            <h3 class="text-2xl font-bold text-green-800 underline">Two Fish Thrift Store</h3>
            <p class="mt-4 font-semibold">Donation Wish List:</p>
            <ul class="list-disc pl-5 space-y-1 text-lg">
              <li>Clothing (all sizes, new or gently used)</li>
              <li>Shoes</li>
              <li>Games, Toys, & Puzzles</li>
              <li>Books, Movies, Music CDs</li>
              <li>Household items & decor</li>
              <li>Dishes & Tupperware</li>
              <li>Purses & Jewelry</li>
              <li>Backpacks, Duffel Bags, Luggage</li>
            </ul>
            <p class="mt-4 font-semibold">We cannot accept:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Appliances</li>
              <li>TVs, Computers, Printers</li>
              <li>Medical/Exercise Equipment</li>
              <li>Large Furniture</li>
              <li>Cribs, Playpens, Car Seats</li>
              <li>Mattresses</li>
            </ul>
          </article>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "Donations",
};
</script>