<template>
  <div id="ebazar-layout" class="theme-blue">
    <!-- main body area -->
    <div class="main p-2 py-3 p-xl-5">
      <!-- Body: Body -->
      <div class="body d-flex p-0 p-xl-5">
        <div class="container-xxl">
          <div class="row g-0 d-flex justify-content-center">
            <div class="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
              <div class="w-100 p-3 p-md-5 card border-0 shadow-sm" style="max-width: 32rem">
                <!-- Form -->
                <form class="row g-1 p-3 p-md-4">
                  <div class="col-12 text-center mb-5">
                    <h1>Sign in</h1>
                    <span>Free access to our dashboard.</span>
                  </div>
                  <div class="col-12">
                    <div class="mb-2">
                      <label class="form-label">Email address</label>
                      <input type="email" class="form-control form-control-lg" placeholder="name@example.com" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-2">
                      <div class="form-label">
                        <span class="d-flex justify-content-between align-items-center"> Password </span>
                      </div>
                      <input type="password" class="form-control form-control-lg" placeholder="***************" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault"> Remember me </label>
                    </div>
                  </div>
                  <div class="col-12 text-center mt-4">
                    <router-link to="/dashboard" class="btn btn-lg btn-block btn-light lift text-uppercase" atl="signin"
                      >SIGN IN</router-link
                    >
                  </div>
                </form>
                <!-- End Form -->
              </div>
            </div>
          </div>
          <!-- End Row -->
        </div>
      </div>
    </div>
  </div>
</template>
