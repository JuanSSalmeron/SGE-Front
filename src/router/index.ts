import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import("@/views/landing/LandingView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/students',
      name: 'estudiantes',
      component: () => import("@/views/crud/StudentView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/courses',
      name: 'cursos',
      component: () => import("@/views/crud/CoursesView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/groups',
      name: 'grupos',
      component: () => import("@/views/crud/GroupsView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/periods',
      name: 'periodos',
      component: () => import("@/views/crud/PeriodsView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/subjects',
      name: 'materias',
      component: () => import("@/views/crud/SubjetcView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/auth/LoginView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/auth/RegisterView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/password',
      name: 'password',
      component: () => import("@/views/auth/PasswordView.vue"),
      meta: {
        requiresAuth: false,
        MenuOnly: false,
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/IndexView.vue'),
      meta: {
        requiresAuth: true,
        MenuOnly: true,
        icon: 'pi pi-chart-pie'
      }
    }
  ],
})

// router.beforeEach((to, from, next) => {
//   const verifyAuth = true; // Check if user is authenticated
//   const publicRoutes = ['/login', '/register', '/NotFound'];
//   const requiresAuth = !publicRoutes.includes(to.path);
//   const isFirstLoad = from.name === null; // More reliable way to detect first load

//   // Handle first page load scenario
//   if (isFirstLoad && to.path === '/') {
//     return next(verifyAuth ? '/dashboard' : '/login');
//   }

//   // Redirect unauthorized users trying to access protected routes
//   if (requiresAuth && !verifyAuth) {
//     return next('/login'); // Is a Example of the Login.
//   }

//   // Prevent authenticated users from accessing login/register pages
//   if (verifyAuth && (to.name === 'login' || to.name === 'register')) {
//     return next('/dashboard'); // Is a Example of the Dashboard
//   }

//   // Allow normal navigation if none of the above conditions were met
//   next();
// });


export default router
