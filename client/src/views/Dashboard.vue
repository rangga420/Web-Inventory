<template>
  <div id="ebazar-layout" class="theme-blue">
    <!-- sidebar -->
    <Sidebar />
    <!-- main body area -->
    <div class="main px-lg-4 px-md-4">
      <!-- Body: Header -->
      <div class="header">
        <!-- Navbar Vue -->
        <Navbar />
      </div>

      <!-- Body: Body -->
      <div class="body d-flex py-3">
        <div class="container-xxl">
          <!-- Summarys -->
          <Summarys />

          <!-- SalesData -->
          <SalesData />

          <!-- RecentTransactions -->
          <RecentTransactions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import RecentTransactions from '../components/dashboard/RecentTransactions.vue';
import Summarys from '../components/dashboard/Summary.vue';
import SalesData from '../components/dashboard/SalesData.vue';
import Sidebar from '../components/SideBar.vue';
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    RecentTransactions,
    Summarys,
    SalesData,
    Sidebar,
  },
};
</script>
