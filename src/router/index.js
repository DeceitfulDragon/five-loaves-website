import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Distribution from '../views/Distribution.vue';
import Donations from '../views/Donations.vue';
import Organizations from '../views/Organizations.vue';
import Volunteering from '../views/Volunteering.vue';
import NotFound from '../views/NotFound.vue';
import CapitalCampaign from '../views/CapitalCampaign.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | Five Loaves',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About | Five Loaves',
    }
  },
  {
    path: '/distribution',
    name: 'Distribution',
    component: Distribution,
    meta: {
      title: 'Distribution | Five Loaves',
    }
  },
  {
    path: '/donations',
    name: 'Donations',
    component: Donations,
    meta: {
      title: 'Donate | Five Loaves',
    }
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations,
    meta: {
      title: 'Orgs | Five Loaves',
    }
  },
  {
    path: '/volunteering',
    name: 'Volunteering',
    component: Volunteering,
    meta: {
      title: 'Volunteer | Five Loaves',
    }
  },
  {
    path: '/campaign',
    name: 'CapitalCampaign',
    component: CapitalCampaign,
    meta: {
      title: 'Campaign | Five Loaves',
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Error | Five Loaves',
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update the document title
router.beforeEach((to, from, next) => {
  const title = to.meta.title || 'Five Loaves'; // Default title
  document.title = title;
  next();
});

export default router;