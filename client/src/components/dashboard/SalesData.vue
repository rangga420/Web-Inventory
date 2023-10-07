<template>
  <div class="row g-3">
    <div class="col-lg-12 col-md-12">
      <div class="tab-filter d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <ul class="nav nav-tabs tab-card tab-body-header rounded d-inline-flex w-sm-100">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#summery-today">Today</a>
          </li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#summery-week">Week</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#summery-month">Month</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#summery-year">Year</a></li>
        </ul>
        <div class="date-filter d-flex align-items-center mt-2 mt-sm-0 w-sm-100">
          <div class="input-group">
            <input type="date" class="form-control" />
            <button class="btn btn-primary" type="button"><i class="icofont-filter fs-5"></i></button>
          </div>
        </div>
      </div>
      <div class="tab-content mt-1">
        <div class="tab-pane fade show active" id="summery-today">
          <div class="row g-1 g-sm-3 mb-3 row-deck">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Customers</span>
                    <div><span class="fs-6 fw-bold me-2">14,208</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-student-alt fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Order</span>
                    <div><span class="fs-6 fw-bold me-2">2314</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-shopping-cart fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$1770</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-sale-discount fs-3 color-santa-fe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Item Sale</span>
                    <div><span class="fs-6 fw-bold me-2">185</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-2 fs-3 color-danger"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$35000</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-1 fs-3 color-lightblue"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Visitors</span>
                    <div><span class="fs-6 fw-bold me-2">11452</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-users-social fs-3 color-light-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Products</span>
                    <div><span class="fs-6 fw-bold me-2">184511</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-bag fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Top Selling Item</span>
                    <div><span class="fs-6 fw-bold me-2">122</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-star fs-3 color-lightyellow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Dealership</span>
                    <div><span class="fs-6 fw-bold me-2">32</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-handshake-deal fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- row end -->
        </div>
        <div class="tab-pane fade" id="summery-week">
          <div class="row g-3 mb-4 row-deck">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Customers</span>
                    <div><span class="fs-6 fw-bold me-2">54,208</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-student-alt fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Order</span>
                    <div><span class="fs-6 fw-bold me-2">12314</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-shopping-cart fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$11770</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-sale-discount fs-3 color-santa-fe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Item Sale</span>
                    <div><span class="fs-6 fw-bold me-2">1185</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-2 fs-3 color-danger"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$135000</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-1 fs-3 color-lightblue"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Visitors</span>
                    <div><span class="fs-6 fw-bold me-2">111452</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-users-social fs-3 color-light-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Products</span>
                    <div><span class="fs-6 fw-bold me-2">194511</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-bag fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Top Selling Item</span>
                    <div><span class="fs-6 fw-bold me-2">1122</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-star fs-3 color-lightyellow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Dealership</span>
                    <div><span class="fs-6 fw-bold me-2">132</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-handshake-deal fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- row end -->
        </div>
        <div class="tab-pane fade" id="summery-month">
          <div class="row g-3 mb-4 row-deck">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Customers</span>
                    <div><span class="fs-6 fw-bold me-2">74,208</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-student-alt fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Order</span>
                    <div><span class="fs-6 fw-bold me-2">22314</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-shopping-cart fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$21770</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-sale-discount fs-3 color-santa-fe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Item Sale</span>
                    <div><span class="fs-6 fw-bold me-2">2185</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-2 fs-3 color-danger"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$235000</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-1 fs-3 color-lightblue"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Visitors</span>
                    <div><span class="fs-6 fw-bold me-2">211452</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-users-social fs-3 color-light-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Products</span>
                    <div><span class="fs-6 fw-bold me-2">284511</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-bag fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Top Selling Item</span>
                    <div><span class="fs-6 fw-bold me-2">222</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-star fs-3 color-lightyellow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Dealership</span>
                    <div><span class="fs-6 fw-bold me-2">232</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-handshake-deal fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- row end -->
        </div>
        <div class="tab-pane fade" id="summery-year">
          <div class="row g-3 mb-4 row-deck">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Customers</span>
                    <div><span class="fs-6 fw-bold me-2">104,208</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-student-alt fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Order</span>
                    <div><span class="fs-6 fw-bold me-2">252314</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-shopping-cart fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$852770</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-sale-discount fs-3 color-santa-fe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Avg Item Sale</span>
                    <div><span class="fs-6 fw-bold me-2">75885</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-2 fs-3 color-danger"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Sale</span>
                    <div><span class="fs-6 fw-bold me-2">$350000</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-calculator-alt-1 fs-3 color-lightblue"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Visitors</span>
                    <div><span class="fs-6 fw-bold me-2">114521452</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-users-social fs-3 color-light-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Total Products</span>
                    <div><span class="fs-6 fw-bold me-2">884511</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-bag fs-3 color-light-orange"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Top Selling Item</span>
                    <div><span class="fs-6 fw-bold me-2">7522</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-star fs-3 color-lightyellow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body py-xl-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
                  <div class="left-info">
                    <span class="text-muted">Dealership</span>
                    <div><span class="fs-6 fw-bold me-2">1832</span></div>
                  </div>
                  <div class="right-icon">
                    <i class="icofont-handshake-deal fs-3 color-lavender-purple"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
