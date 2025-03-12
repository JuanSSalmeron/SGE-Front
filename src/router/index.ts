import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'examplenotfound',
      component: () => import("@/views/ExampleTailwind.vue"),
      meta: {
        requiresAuth: false, // requiresAuth is a property obligatory.
      }
    },
    {
      path: '/ExamplePrimeVue',
      name: 'example',
      component: () => import("@/views/ExamplePrimeVue.vue"),
      meta: {
        requiresAuth: false, // requiresAuth is a property obligatory.
      }
    },
    // Example: Use Correctly routes protected
    {
      path: '/protected',
      name: 'protected',
      component: () => import("@/views/ExampleProtected.vue"),
      meta: {
        requiresAuth: false, // requiresAuth is a property obligatory.
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const verifyAuth = true; // Check if user is authenticated
  const publicRoutes = ['/login', '/register', '/NotFound'];
  const requiresAuth = !publicRoutes.includes(to.path);
  const isFirstLoad = from.name === null; // More reliable way to detect first load

  // Handle first page load scenario
  if (isFirstLoad && to.path === '/') {
    return next(verifyAuth ? '/dashboard' : '/login');
  }

  // Redirect unauthorized users trying to access protected routes
  if (requiresAuth && !verifyAuth) {
    return next('/login'); // Is a Example of the Login.
  }

  // Prevent authenticated users from accessing login/register pages
  if (verifyAuth && (to.name === 'login' || to.name === 'register')) {
    return next('/dashboard'); // Is a Example of the Dashboard
  }

  // Allow normal navigation if none of the above conditions were met
  next();
});


export default router
