<template>
  <div class="sidebar px-4 py-4 py-md-4 me-0">
    <div class="d-flex flex-column h-100">
      <a href="index.html" class="mb-0 brand-icon">
        <span class="logo-icon">
          <i class="bi bi-bag-check-fill fs-4"></i>
        </span>
        <span class="logo-text">eBazar</span>
      </a>
      <!-- Menu: main ul -->
      <ul class="menu-list flex-grow-1 mt-3">
        <li>
          <RouterLink to="/dashboard" class="m-link active" href="index.html"
            ><i class="icofont-home fs-5"></i> <span>Dashboard</span></RouterLink
          >
        </li>
        <li class="collapsed">
          <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu-product" href="#">
            <i class="icofont-truck-loaded fs-5"></i> <span>Products</span>
            <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span
          ></a>
          <!-- Menu: Sub menu ul -->
          <ul class="sub-menu collapse" id="menu-product">
            <li><a class="ms-link" href="product-grid.html">Product Grid</a></li>
          </ul>
        </li>
        <li class="collapsed">
          <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu-order" href="#">
            <i class="icofont-notepad fs-5"></i> <span>Orders</span>
            <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span
          ></a>
          <!-- Menu: Sub menu ul -->
          <ul class="sub-menu collapse show" id="menu-order">
            <li>
              <RouterLink to="/orders/invoices" class="ms-link" href="order-invoices.html">Order Invoices</RouterLink>
            </li>
            <li>
              <RouterLink to="/orders/invoices/details" class="ms-link">Order Details</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Menu: menu collepce btn -->
      <button type="button" class="btn btn-link sidebar-mini-btn text-light">
        <span class="ms-2"><i class="icofont-bubble-right"></i></span>
      </button>
    </div>
  </div>
</template>
