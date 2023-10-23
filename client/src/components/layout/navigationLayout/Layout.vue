<template>
  <div id="ebazar-layout" class="theme-blue">
    <Sidebar />
    <div class="main px-lg-4 px-md-4">
      <div class="header">
        <Navbar />
      </div>
      <div class="body d-flex py-3">
        <div class="container-xxl">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../Navbar.vue';
import Sidebar from '../../SideBar.vue';
export default {
  name: 'LayoutNavigation',
  components: { Navbar, Sidebar },
};
</script>
