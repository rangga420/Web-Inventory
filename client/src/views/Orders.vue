<template>
  <Layout>
    <OrderInvoice />
  </Layout>
</template>

<script>
import Layout from '../components/layout/navigationLayout/Layout.vue';
import OrderInvoice from '../components/orders/OrderInvoice.vue';

export default {
  name: 'Orders',
  components: {
    OrderInvoice,
    Layout,
  },
};
</script>
