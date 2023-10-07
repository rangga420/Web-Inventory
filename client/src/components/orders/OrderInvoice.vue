<template>
  <div class="row align-items-center">
    <div class="border-0 mb-4">
      <div
        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
      >
        <h3 class="fw-bold mb-0">Order Invoices</h3>
      </div>
    </div>
  </div>
  <!-- Row end  -->
  <div class="row mb-3">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <table id="patient-table" class="table table-hover align-middle mb-0" style="width: 100%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Item</th>
                <th>Billing Date</th>
                <th>Total Amount</th>
                <th>User Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>#Order-78414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-1.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span> Oculus VR </span>
                </td>
                <td>May 16, 2021</td>
                <td>$212</td>
                <td>Alexander007</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-58414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-2.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Wall Clock</span>
                </td>
                <td>May 22, 2021</td>
                <td>$612</td>
                <td>Joan123</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-48414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-3.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Note Diaries</span>
                </td>
                <td>May 16, 2021</td>
                <td>$612</td>
                <td>Peterjio</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-38414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-4.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Flower Port</span>
                </td>
                <td>May 23, 2021</td>
                <td>$112</td>
                <td>Zoesmart</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-28414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-5.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Bag</span>
                </td>
                <td>May 18, 2021</td>
                <td>$300</td>
                <td>Grace786</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-18414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-6.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Rado Watch</span>
                </td>
                <td>May 22, 2021</td>
                <td>$330</td>
                <td>Dianalove</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-88414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-7.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Traveling bag</span>
                </td>
                <td>May 16, 2021</td>
                <td>$370</td>
                <td>Sarahone</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
              <tr>
                <td><strong>#Order-98414</strong></td>
                <td>
                  <img
                    src="../../assets/images/product/product-8.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Chair</span>
                </td>
                <td>May 16, 2021</td>
                <td>$170</td>
                <td>Julia42</td>
                <td>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-print fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-download fs-5"></i></a>
                  <a class="btn btn-sm btn-white" href="invoices.html"><i class="icofont-send-mail fs-4"></i></a>
                  <RouterLink to="/orders/invoices/details" class="btn btn-sm btn-white" href="invoices.html"
                    ><i class="icofont-ui-note"></i
                  ></RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
