<template>
  <Layout>
    <Summarys />
    <SalesData />
    <RecentTransactions />
  </Layout>
</template>
<script>
import Layout from '../components/layout/navigationLayout/Layout.vue';
import RecentTransactions from '../components/dashboard/RecentTransactions.vue';
import Summarys from '../components/dashboard/Summary.vue';
import SalesData from '../components/dashboard/SalesData.vue';
export default {
  name: 'Dashboard',
  components: {
    Layout,
    RecentTransactions,
    Summarys,
    SalesData,
  },
};
</script>
