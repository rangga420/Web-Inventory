import ProductFilter from './ProductFilter.vue';
<template>
  <!-- ALERT NOTIFICATION ADD CART -->
  <div role="alert" :class="[alertSuccess ? 'alert alert-success' : 'alert alert-success d-none']">
    A simple success alert—check it out!
  </div>
  <div role="alert" :class="[alertDanger ? 'alert alert-danger' : 'alert alert-danger d-none']">
    A simple Danger alert—check it out!
  </div>
  <div class="row g-3 mb-3">
    <!-- PRODUCT FILTER HERE -->
    <ProductFilter />
    <div class="col-md-12 col-lg-8 col-xl-8 col-xxl-9">
      <div class="card mb-3 bg-transparent p-2">
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input
              @click="handleAlert"
              class="form-check-input"
              type="checkbox"
              id="Eaten-switch1"
              :checked="statusAddCart"
            />
            <label class="form-check-label" for="Eaten-switch1">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-1.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Oculus VR <span class="text-muted small fw-light d-block">Reference 1204</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$149</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(145)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button @click="handleAlert" type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch2" />
            <label class="form-check-label" for="Eaten-switch2">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-2.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Wall Clock <span class="text-muted small fw-light d-block">Reference 1004</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$399</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>3.5 <span class="text-muted">(77)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch3" />
            <label class="form-check-label" for="Eaten-switch3">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-3.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Note Diaries <span class="text-muted small fw-light d-block">Reference 1224</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$49</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>3.5 <span class="text-muted">(98)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch4" />
            <label class="form-check-label" for="Eaten-switch4">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-4.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Flower Port <span class="text-muted small fw-light d-block">Reference 1414</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>18h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$199</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(1455)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch5" />
            <label class="form-check-label" for="Eaten-switch5">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-5.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  School Bag <span class="text-muted small fw-light d-block">Reference 1000</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>03h:30m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$99</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(145)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch6" />
            <label class="form-check-label" for="Eaten-switch6">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-6.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Rado Watch <span class="text-muted small fw-light d-block">Reference 9204</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$594</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(1245)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch7" />
            <label class="form-check-label" for="Eaten-switch7">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-7.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Traveling Bag <span class="text-muted small fw-light d-block">Reference 1155</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$49</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(1045)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch8" />
            <label class="form-check-label" for="Eaten-switch8">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-4.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Flower Port <span class="text-muted small fw-light d-block">Reference 1414</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>18h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$109</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(1455)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch9" />
            <label class="form-check-label" for="Eaten-switch9">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-2.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Wall Clock <span class="text-muted small fw-light d-block">Reference 1004</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$144</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(77)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch10" />
            <label class="form-check-label" for="Eaten-switch10">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-1.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Oculus VR <span class="text-muted small fw-light d-block">Reference 1204</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$149</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(145)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch11" />
            <label class="form-check-label" for="Eaten-switch11">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-2.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Wall Clock <span class="text-muted small fw-light d-block">Reference 1004</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$149</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(77)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-1">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch12" />
            <label class="form-check-label" for="Eaten-switch12">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-3.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Note Diaries <span class="text-muted small fw-light d-block">Reference 1224</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>20h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$149</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(98)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0">
          <div class="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            <input class="form-check-input" type="checkbox" id="Eaten-switch13" />
            <label class="form-check-label" for="Eaten-switch13">Add to Cart</label>
          </div>
          <div class="card-body d-flex align-items-center flex-column flex-md-row">
            <a href="product-detail.html">
              <img class="w120 rounded img-fluid" src="assets/images/product/product-4.jpg" alt="" />
            </a>
            <div class="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
              <a href="product-detail.html"
                ><h6 class="mb-3 fw-bold">
                  Flower Port <span class="text-muted small fw-light d-block">Reference 1414</span>
                </h6></a
              >
              <div class="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Special priceends</div>
                  <strong>18h:46m:30s</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Offer</div>
                  <strong>Bank Offer</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Price</div>
                  <strong>$149</strong>
                </div>
                <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  <div class="text-muted small">Ratings</div>
                  <strong><i class="icofont-star text-warning"></i>4.5 <span class="text-muted">(1455)</span></strong>
                </div>
              </div>
              <div class="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                <button type="button" class="btn btn-primary">Add Cart</button>
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
import { mapActions, mapState } from 'pinia';
export default {
  name: 'ProductListView',
  components: {
    ProductFilter,
  },

  data() {
    return {
      alertSuccess: false,
      alertDanger: false,
      statusChecked: '',
    };
  },

  computed: {
    ...mapState(useProductsStore, ['statusAddCart']),
  },

  methods: {
    ...mapActions(useProductsStore, ['handleStatusAddCart']),

    handleAlert() {
      if (!this.statusAddCart) {
        this.handleStatusAddCart(true);
        this.alertSuccess = true;
        setTimeout(() => {
          this.alertSuccess = false;
        }, 1000);
      } else {
        this.handleStatusAddCart(false);
        this.alertDanger = true;
        setTimeout(() => {
          this.alertDanger = false;
        }, 1000);
      }
    },
  },
};
</script>
