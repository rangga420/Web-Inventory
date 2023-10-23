import { createRouter, createWebHistory } from 'vue-router';
import Orders from '../views/Orders.vue';
import Staff from '../views/Staff.vue';
import OrderInvoices from '../components/orders/OrderInvoice.vue';
import OrderDetails from '../components/orders/OrderDetail.vue';
import Invoices from '../components/orders/Invoice.vue';
import OrderList from '../components/orders/List.vue';
import StaffList from '../components/staff/List.vue';
import StaffDetail from '../components/Staff/Detail.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ProductGridView from '../components/products/ProductGridView.vue';
import ProductListView from '../components/products/ProductListView.vue';
import ProductHeaderIcons from '../components/products/ProductHeaderIcons.vue';
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
      path: '/orders',
      name: 'orders',
      component: Orders,
      children: [
        {
          path: 'list',
          component: OrderList,
        },
        {
          path: 'invoices',
          component: OrderInvoices,
        },
        {
          path: 'invoices/params',
          component: Invoices,
        },
        {
          path: 'details/params',
          component: OrderDetails,
        },
      ],
    },

    {
      path: '/staff',
      name: 'staff',
      component: Staff,
      children: [
        {
          path: 'list',
          component: StaffList,
        },
        {
          path: 'detail/params',
          component: StaffDetail,
        },
      ],
    },

    {
      path: '/products',
      name: 'products',
      component: ProductsPage,
      children: [
        {
          path: 'list',
          // component: ProductGridView,
          component: ProductHeaderIcons,
        },
      ],
    },
  ],
});

export default router;
