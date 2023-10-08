<template>
  <div class="row align-items-center">
    <div class="border-0 mb-4">
      <div
        class="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
      >
        <h3 class="fw-bold mb-0 py-3 pb-2">Invoices</h3>
        <div class="col-auto py-2 w-sm-100"></div>
      </div>
    </div>
  </div>
  <!-- Row end  -->
  <div class="tab-pane fade show active" id="Invoice-Simple">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-12">
        <div class="card p-xl-5 p-lg-4 p-0">
          <div class="card-body">
            <div class="mb-3 pb-3 border-bottom">
              Invoice
              <strong>May 22, 2021</strong>
              <span class="float-end"> <strong>transection id:</strong> #18414</span>
            </div>

            <div class="row mb-4">
              <div class="col-sm-6">
                <h6 class="mb-3">From:</h6>
                <div><strong>eBazar Shop</strong></div>
                <div>111 Berkeley Rd</div>
                <div>STREET ON THE FOSSE, Poland</div>
                <div>Email: info@ebazar.com</div>
                <div>Phone: +44 888 666 3333</div>
              </div>

              <div class="col-sm-6">
                <h6 class="mb-3">To:</h6>
                <div><strong>Dianalove</strong></div>
                <div>45 Larissa Court</div>
                <div>Victoria, BIRDWOODTON</div>
                <div>Email: Dianalove@gmail.com</div>
                <div>Phone: +66 243 456 789</div>
              </div>
            </div>
            <!-- Row end  -->

            <div class="table-responsive-sm">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th class="text-end">Item Cost</th>
                    <th class="text-center">Products Item</th>
                    <th class="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">1</td>
                    <td>Rado Watch</td>
                    <td>Men Watch for Gold Color</td>
                    <td class="text-end">$330.00</td>
                    <td class="text-center">1</td>
                    <td class="text-end">$330.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-5"></div>

              <div class="col-lg-4 col-sm-5 ms-auto">
                <table class="table table-clear">
                  <tbody>
                    <tr>
                      <td><strong>Subtotal</strong></td>
                      <td class="text-end">$330.00</td>
                    </tr>
                    <tr>
                      <td><strong>Tax(18%)</strong></td>
                      <td class="text-end">$59.4</td>
                    </tr>
                    <tr>
                      <td><strong>Total</strong></td>
                      <td class="text-end"><strong>$389.00</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Row end  -->

            <div class="row">
              <div class="col-lg-12">
                <h6>Terms &amp; Condition</h6>
                <p class="text-muted">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over
                </p>
              </div>
              <div class="col-lg-12 text-end">
                <button type="button" class="btn btn-outline-secondary btn-lg my-1">
                  <i class="fa fa-print"></i> Print
                </button>
                <button type="button" class="btn btn-primary btn-lg my-1">
                  <i class="fa fa-paper-plane-o"></i> Send Invoice
                </button>
              </div>
            </div>
            <!-- Row end  -->
          </div>
        </div>
      </div>
    </div>
    <!-- Row end  -->
  </div>
  <!-- tab end  -->
</template>
