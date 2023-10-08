<template>
  <div class="row align-items-center">
    <div class="border-0 mb-4">
      <div
        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
      >
        <h3 class="fw-bold mb-0">Staff Detail</h3>
      </div>
    </div>
  </div>
  <!-- Row end  -->
  <div class="row g-3 mb-xl-3">
    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-1 row-deck g-3">
        <div class="col">
          <div class="card profile-card">
            <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
              <h6 class="mb-0 fw-bold">Profile</h6>
            </div>
            <div class="card-body d-flex profile-fulldeatil flex-column">
              <div class="profile-block text-center w220 mx-auto">
                <a href="#">
                  <img
                    src="../../assets/images/lg/avatar4.svg"
                    alt=""
                    class="avatar xl rounded img-thumbnail shadow-sm"
                  />
                </a>
                <div class="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                  <span class="text-muted small">ID : #CS-00002</span>
                </div>
              </div>
              <div class="profile-info w-100">
                <h6 class="mb-0 mt-2 fw-bold d-block fs-6 text-center">Joan Dyer</h6>
                <span class="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block"
                  >24 years, California</span
                >
                <p class="mt-2">
                  Duis felis ligula, pharetra at nisl sit amet, ullamcorper fringilla mi. Cras luctus metus non enim
                  porttitor sagittis. Sed tristique scelerisque arcu id dignissim.
                </p>
                <div class="row g-2 pt-2">
                  <div class="col-xl-12">
                    <div class="d-flex align-items-center">
                      <i class="icofont-ui-touch-phone"></i>
                      <span class="ms-2">202-555-0174 </span>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="d-flex align-items-center">
                      <i class="icofont-email"></i>
                      <span class="ms-2">adrianallan@gmail.com</span>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="d-flex align-items-center">
                      <i class="icofont-birthday-cake"></i>
                      <span class="ms-2">19/03/1980</span>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="d-flex align-items-center">
                      <i class="icofont-address-book"></i>
                      <span class="ms-2">2734 West Fork Street,EASTON 02334.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12">
      <div class="card">
        <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
          <h6 class="mb-0 fw-bold">Status Order</h6>
        </div>
        <div class="card-body">
          <table id="myProjectTable" class="table table-hover align-middle mb-0" style="width: 100%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Item</th>
                <th>Payment Info</th>
                <th>Order Date</th>
                <th>Price</th>
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
                <td>Credit Card</td>
                <td>June 16, 2021</td>
                <td>$420</td>
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
                <td>Debit Card</td>
                <td>June 16, 2021</td>
                <td>$220</td>
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
                <td>Debit Card</td>
                <td>June 16, 2021</td>
                <td>$250</td>
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
                <td>Credit Card</td>
                <td>June 16, 2021</td>
                <td>$320</td>
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
                <td>Debit Card</td>
                <td>June 17, 2021</td>
                <td>$20</td>
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
                <td>Debit Card</td>
                <td>June 18, 2021</td>
                <td>$820</td>
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
                <td>Bank Emi</td>
                <td>March 16, 2021</td>
                <td>$620</td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-27414</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-5.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Bag</span>
                </td>
                <td>Debit Card</td>
                <td>June 18, 2021</td>
                <td>$820</td>
              </tr>
              <tr>
                <td>
                  <a href="order-details.html"><strong>#Order-78514</strong></a>
                </td>
                <td>
                  <img
                    src="../../assets/images/product/product-6.jpg"
                    class="avatar lg rounded me-2"
                    alt="profile-image"
                  /><span>Rado Watch</span>
                </td>
                <td>Bank Emi</td>
                <td>March 16, 2021</td>
                <td>$620</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Row end  -->
</template>
