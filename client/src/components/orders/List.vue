<template>
  <div class="row align-items-center">
    <div class="border-0 mb-4">
      <div
        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
      >
        <h3 class="fw-bold mb-0">Orders List</h3>
      </div>
    </div>
  </div>
  <!-- Row end  -->
  <div class="row g-3 mb-3">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <table id="myDataTable" class="table table-hover align-middle mb-0" style="width: 100%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Item</th>
                <th>Customer Name</th>
                <th>Payment Info</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-78414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-1.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span> Oculus VR </span>
                </td>
                <td>Molly</td>
                <td>Credit Card</td>
                <td>$420</td>
                <td><span class="badge bg-warning">Progress</span></td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-58414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-2.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Wall Clock</span>
                </td>
                <td>Brian</td>
                <td>Debit Card</td>
                <td>$220</td>
                <td><span class="badge bg-success">Complited</span></td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-48414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-3.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Note Diaries</span>
                </td>
                <td>Julia</td>
                <td>Debit Card</td>
                <td>$250</td>
                <td><span class="badge bg-success">Complited</span></td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-38414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-4.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Flower Port</span>
                </td>
                <td>Sonia</td>
                <td>Credit Card</td>
                <td>$320</td>
                <td><span class="badge bg-warning">Progress</span></td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-28414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-1.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Oculus VR</span>
                </td>
                <td>Adam H</td>
                <td>Debit Card</td>
                <td>$20</td>
                <td><span class="badge bg-warning">Progress</span></td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-18414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-2.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Wall Clock</span>
                </td>
                <td>Alexander</td>
                <td>Debit Card</td>
                <td>$820</td>
                <td><span class="badge bg-success">Complited</span></td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-11414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-3.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Note Diaries</span>
                </td>
                <td>Gabrielle</td>
                <td>Bank Emi</td>
                <td>$620</td>
                <td><span class="badge bg-success">Complited</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Row end  -->
</template>
