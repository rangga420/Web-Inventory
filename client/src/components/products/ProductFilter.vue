<template>
  <div class="col-md-12 col-lg-4 col-xl-4 col-xxl-3">
    <div class="sticky-lg-top">
      <div class="card mb-3">
        <div class="reset-block">
          <div class="filter-title">
            <h4 class="title">Filter</h4>
          </div>
          <div class="filter-btn">
            <a class="btn btn-primary" href="#">Reset</a>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="categories">
          <div class="filter-title">
            <a class="title" data-bs-toggle="collapse" href="#category" role="button" aria-expanded="true"
              >Categories</a
            >
          </div>
          <div class="collapse show" id="category">
            <div class="filter-search">
              <form action="#">
                <input type="text" placeholder="Search" class="form-control" />
                <button><i class="lni lni-search-alt"></i></button>
              </form>
            </div>
            <div class="filter-category">
              <ul class="category-list">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    class="collapsed"
                    >Game accessories</a
                  >
                  <ul id="collapseOne" class="sub-category collapse" data-parent="#category">
                    <li><a href="#">PlayStation 4</a></li>
                    <li><a href="#">Oculus VR</a></li>
                    <li><a href="#">Remote</a></li>
                    <li><a href="#">Lighting Keyborad</a></li>
                  </ul>
                </li>
                <li>
                  <a class="collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Bags</a>
                  <ul id="collapseTwo" class="sub-category collapse" data-parent="#category">
                    <li><a href="#">School Bags</a></li>
                    <li><a href="#">Traveling Bags</a></li>
                  </ul>
                </li>
                <li>
                  <a class="collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    >Flower Port</a
                  >
                  <ul id="collapseThree" class="sub-category collapse" data-parent="#category">
                    <li><a href="#">Woodan Port</a></li>
                    <li><a href="#">Pattern Port</a></li>
                  </ul>
                </li>
                <li>
                  <a class="collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseFour">Watch</a>
                  <ul id="collapseFour" class="sub-category collapse" data-parent="#category">
                    <li><a href="#">Wall Clock</a></li>
                    <li><a href="#">Smart Watch</a></li>
                    <li><a href="#">Rado Watch</a></li>
                    <li><a href="#">Fasttrack Watch</a></li>
                    <li><a href="#">Noise Watch</a></li>
                  </ul>
                </li>
                <li>
                  <a class="collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseFive">Accessories</a>
                  <ul id="collapseFive" class="sub-category collapse" data-parent="#category">
                    <li><a href="#">Note Diaries</a></li>
                    <li><a href="#">Fold Diaries</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="size-block">
          <div class="filter-title">
            <a class="title" data-bs-toggle="collapse" href="#size" role="button" aria-expanded="true">Select Size</a>
          </div>
          <div class="collapse show" id="size">
            <div class="filter-size" id="filter-size-1">
              <ul>
                <li>XS</li>
                <li>S</li>
                <li class="">M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="color-block">
          <div class="filter-title">
            <a class="title" data-bs-toggle="collapse" href="#color" role="button" aria-expanded="false"
              >Select Color</a
            >
          </div>
          <div class="collapse show" id="color">
            <div class="filter-color">
              <ul>
                <li>
                  <div class="color-check">
                    <p><span style="background-color: #4114e4"></span> <strong>Blue</strong></p>

                    <input type="checkbox" id="color-1" />
                    <label for="color-1"><span></span></label>
                  </div>
                </li>
                <li>
                  <div class="color-check">
                    <p><span style="background-color: #e14c7b"></span> <strong>Red</strong></p>

                    <input type="checkbox" id="color-2" />
                    <label for="color-2"><span></span></label>
                  </div>
                </li>
                <li>
                  <div class="color-check">
                    <p><span style="background-color: #7cb637"></span> <strong>Green</strong></p>

                    <input type="checkbox" id="color-3" />
                    <label for="color-3"><span></span></label>
                  </div>
                </li>
                <li>
                  <div class="color-check">
                    <p><span style="background-color: #161359"></span> <strong>Dark</strong></p>

                    <input type="checkbox" id="color-4" />
                    <label for="color-4"><span></span></label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="price-range-block">
          <div class="filter-title">
            <a class="title" data-bs-toggle="collapse" href="#pricingTwo" role="button" aria-expanded="false"
              >Pricing Range</a
            >
          </div>
          <div class="collapse show" id="pricingTwo">
            <div class="price-range">
              <div class="price-amount flex-wrap">
                <div class="amount-input mt-1">
                  <label class="fw-bold">Minimum Price</label>
                  <input type="text" id="minAmount2" class="form-control" />
                </div>
                <div class="amount-input mt-1">
                  <label class="fw-bold">Maximum Price</label>
                  <input type="text" id="maxAmount2" class="form-control" />
                </div>
              </div>
              <div id="slider-range2" class="slider-range noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="rating-block">
          <div class="filter-title">
            <a class="title" data-bs-toggle="collapse" href="#rating" role="button" aria-expanded="false"
              >Select Rating</a
            >
          </div>
          <div class="collapse show" id="rating">
            <div class="filter-rating">
              <ul>
                <li>
                  <div class="rating-check">
                    <input type="checkbox" id="rating-5" />
                    <label for="rating-5"><span></span> </label>
                    <p>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="rating-check">
                    <input type="checkbox" id="rating-4" />
                    <label for="rating-4"><span></span></label>
                    <p>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="rating-check">
                    <input type="checkbox" id="rating-3" />
                    <label for="rating-3"><span></span></label>
                    <p>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="rating-check">
                    <input type="checkbox" id="rating-2" />
                    <label for="rating-2"><span></span></label>
                    <p>
                      <i class="icofont-star"></i>
                      <i class="icofont-star"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="rating-check">
                    <input type="checkbox" id="rating-1" />
                    <label for="rating-1"><span></span></label>
                    <p>
                      <i class="icofont-star"></i>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
