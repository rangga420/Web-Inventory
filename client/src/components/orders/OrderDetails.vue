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
          <div class="row align-items-center">
            <div class="border-0 mb-4">
              <div
                class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
              >
                <h3 class="fw-bold mb-0">Order Details: #Order-78414</h3>
              </div>
            </div>
          </div>
          <!-- Row end  -->
          <div class="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
            <div class="col">
              <div class="alert-success alert mb-0">
                <div class="d-flex align-items-center">
                  <div class="avatar rounded no-thumbnail bg-success text-light">
                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                  </div>
                  <div class="flex-fill ms-3 text-truncate">
                    <div class="h6 mb-0">Order Created at</div>
                    <span class="small">16/03/2021 at 04:23 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="alert-danger alert mb-0">
                <div class="d-flex align-items-center">
                  <div class="avatar rounded no-thumbnail bg-danger text-light">
                    <i class="fa fa-user fa-lg" aria-hidden="true"></i>
                  </div>
                  <div class="flex-fill ms-3 text-truncate">
                    <div class="h6 mb-0">Staff Name</div>
                    <span class="small">Gabrielle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Row end  -->
          <div class="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 row-deck">
            <div class="col">
              <div class="card">
                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 class="mb-0 fw-bold">Invoice Deatil</h6>
                  <a href="#" class="text-muted">Download</a>
                </div>
                <div class="card-body">
                  <div class="row g-3">
                    <div class="col-12">
                      <label class="form-label col-6 col-sm-5">Number:</label>
                      <span><strong>#78414</strong></span>
                    </div>
                    <div class="col-12">
                      <label class="form-label col-6 col-sm-5">Seller GST :</label>
                      <span><strong>AFQWEPX17390VJ</strong></span>
                    </div>
                    <div class="col-12">
                      <label class="form-label col-6 col-sm-5">Purchase GST :</label>
                      <span><strong>NVFQWEPX1730VJ</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Row end  -->
          <div class="row g-3 mb-3">
            <div class="col-xl-12 col-xxl-8">
              <div class="card">
                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 class="mb-0 fw-bold">Order Summary</h6>
                </div>
                <div class="card-body">
                  <div class="product-cart">
                    <div class="checkout-table table-responsive">
                      <table
                        id="myCartTable"
                        class="table display dataTable table-hover align-middle"
                        style="width: 100%"
                      >
                        <thead>
                          <tr>
                            <th class="product">Product Image</th>
                            <th>Product Name</th>
                            <th class="quantity">Quantity</th>
                            <th class="price">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-1.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Oculus VR <span class="d-block fs-6 text-primary">Pr-1204</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$149.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-2.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Wall Clock <span class="d-block fs-6 text-primary">Pr-1004</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-3.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Note Diaries <span class="d-block fs-6 text-primary">Pr-1224</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$149.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="../../assets/images/product/product-4.jpg"
                                class="avatar rounded lg"
                                alt="Product"
                              />
                            </td>
                            <td>
                              <h6 class="title">Flower Port <span class="d-block fs-6 text-primary">Pr-1414</span></h6>
                            </td>
                            <td>1</td>
                            <td>
                              <p class="price">$399.00</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap justify-content-end">
                      <div class="checkout-total">
                        <div class="single-total">
                          <p class="value">Subotal Price:</p>
                          <p class="price">$1096.00</p>
                        </div>
                        <div class="single-total">
                          <p class="value">Shipping Cost (+):</p>
                          <p class="price">$12.00</p>
                        </div>
                        <div class="single-total">
                          <p class="value">Discount (-):</p>
                          <p class="price">$10.00</p>
                        </div>
                        <div class="single-total">
                          <p class="value">Tax(18%):</p>
                          <p class="price">$198.00</p>
                        </div>
                        <div class="single-total total-payable">
                          <p class="value">Total Payable:</p>
                          <p class="price">$1296.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-xxl-4">
              <div class="card mb-3">
                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 class="mb-0 fw-bold">Status Orders</h6>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row g-3 align-items-center">
                      <div class="col-md-12">
                        <label class="form-label">Order ID</label>
                        <input type="text" class="form-control" value="78414" />
                      </div>
                      <div class="col-md-12">
                        <label class="form-label">Order Status</label>
                        <select class="form-select" aria-label="Default select example">
                          <option value="1">Progress</option>
                          <option value="2">Completed</option>
                          <option selected value="3">Pending</option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <label class="form-label">Quantity</label>
                        <input type="text" class="form-control" value="4" />
                      </div>
                      <div class="col-md-12">
                        <label class="form-label">Order Transection</label>
                        <select class="form-select" aria-label="Transection">
                          <option value="1">Completed</option>
                          <option value="2">Fail</option>
                        </select>
                      </div>
                    </div>
                    <button type="button" class="btn btn-primary mt-4 text-uppercase">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Row end  -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Sidebar from '../SideBar.vue';
export default {
  name: 'OrderInvoice',
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
