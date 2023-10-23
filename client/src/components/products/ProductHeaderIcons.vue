<template>
  <div class="row align-items-center">
    <div class="border-0 mb-4">
      <div
        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
      >
        <h3 class="fw-bold mb-0">Products</h3>
        <div class="btn-group group-link btn-set-task w-sm-100">
          <a
            @click="view = 'Grid'"
            class="btn d-inline-flex align-items-center"
            :class="{ active: view === 'Grid' }"
            aria-current="page"
            ><i class="icofont-wall px-2 fs-5"></i>Grid View</a
          >
          <a @click="view = 'List'" class="btn d-inline-flex align-items-center" :class="{ active: view === 'List' }"
            ><i class="icofont-listing-box px-2 fs-5"></i> List View</a
          >
        </div>
      </div>
    </div>
  </div>
  <ProductGridView v-if="view === 'Grid'" />
  <ProductListView v-if="view === 'List'" />
</template>

<script>
import ProductGridView from './ProductGridView.vue';
import ProductListView from './ProductListView.vue';
export default {
  name: 'ProductHeaderIcons',
  components: {
    ProductGridView,
    ProductListView,
  },
  data() {
    return {
      view: 'Grid',
    };
  },
};
</script>
