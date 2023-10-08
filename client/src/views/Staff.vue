<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script>
import Layout from '../components/layout/navigationLayout/Layout.vue';

export default {
  name: 'Staff',
  components: {
    Layout,
  },
};
</script>
