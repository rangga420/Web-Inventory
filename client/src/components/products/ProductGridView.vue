<template>
  <!-- ALERT NOTIFICATION ADD CART -->
  <div role="alert" class="alert alert-success" v-if="alertSuccess">A simple success alert—check it out!</div>

  <div class="row g-3 mb-3">
    <ProductFilter />
    <div class="col-md-12 col-lg-8 col-xl-8 col-xxl-9">
      <div class="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3">
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-1.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart-fill text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (145)</span>
                <a href="product-detail.html" class="fw-bold">Oculus VR </a>
                <p class="text-muted">Reference 1204</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 149</span>
                <a @click="handleAlert" class="btn btn-primary mt-3">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-2.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 3.5 (77)</span>
                <a href="product-detail.html" class="fw-bold">Wall Clock </a>
                <p class="text-muted">Reference 1004</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 399</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-3.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 3.5 (98)</span>
                <a href="product-detail.html" class="fw-bold">Note Diaries </a>
                <p class="text-muted">Reference 1224</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 149</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-4.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart-fill text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (1455)</span>
                <a href="product-detail.html" class="fw-bold">Flower Port </a>
                <p class="text-muted">Reference 1414</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 399</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-5.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (145)</span>
                <a href="product-detail.html" class="fw-bold">School Bag </a>
                <p class="text-muted">Reference 1000</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 149</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-6.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (1245)</span>
                <a href="product-detail.html" class="fw-bold">Rado Watch </a>
                <p class="text-muted">Reference 9204</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 399</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-7.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart-fill text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (1045)</span>
                <a href="product-detail.html" class="fw-bold">Traveling Bag </a>
                <p class="text-muted">Reference 1155</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 399</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-2.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (77)</span>
                <a href="product-detail.html" class="fw-bold">Wall Clock </a>
                <p class="text-muted">Reference 1004</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 399</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="product">
              <div class="product-image">
                <div class="product-item active">
                  <img src="../../assets/images/product/product-3.jpg" alt="product" class="img-fluid w-100" />
                </div>
                <a class="add-wishlist" href="#">
                  <i class="bi bi-heart text-danger"></i>
                </a>
              </div>
              <div class="product-content p-3">
                <span class="rating mb-2 d-block"><i class="icofont-star text-warning"></i> 4.5 (98)</span>
                <a href="product-detail.html" class="fw-bold">Note Diaries </a>
                <p class="text-muted">Reference 1224</p>
                <span class="d-block fw-bold fs-5 text-secondary">$ 149</span>
                <a href="product-cart.html" class="btn btn-primary mt-3"> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3 mb-3">
        <div class="col-md-12">
          <nav class="justify-content-end d-flex">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- Row end  -->
</template>

<script>
import ProductFilter from './ProductFilter.vue';
import { useProductsStore } from '../../stores/Products.js';
import { mapActions } from 'pinia';
export default {
  name: 'ProductGridView',
  data() {
    return {
      alertSuccess: false,
    };
  },
  components: {
    ProductFilter,
  },
  methods: {
    ...mapActions(useProductsStore, ['handleStatusAddCart']),

    handleAlert() {
      this.alertSuccess = true;
      setTimeout(() => {
        this.alertSuccess = false;
        this.handleStatusAddCart(true);
      }, 1000);
    },
  },
};
</script>
