<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script>
import Layout from '../components/layout/navigationLayout/Layout.vue';

export default {
  name: 'Orders',
  components: {
    Layout,
  },
};
</script>
