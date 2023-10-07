import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.Vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
    },
    {
      path: '/orders/invoices',
      name: 'orders',
      component: () => import('../views/OrdersInvoices.vue'),
    },
    {
      path: '/orders/invoices/details',
      name: 'orders_invoices_details',
      component: () => import('../views/OrdersInvoicesDetails.vue'),
    },
  ],
});

export default router;
