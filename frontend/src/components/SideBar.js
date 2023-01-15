import React from 'react'

export default function SideBar(){
   return(
   <div ClassName='SideBar'>
   <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ps" id="sidenav-main">
   <div className="sidenav-header">
   <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
   <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html">
   <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo"/>
   <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
   </a>
   </div>
   <hr className="horizontal dark mt-0"/>
   <div className="collapse navbar-collapse w-auto ps ps--active-y" id="sidenav-collapse-main">
   <ul className="navbar-nav">
   <li className="nav-item">
   <a className="nav-link active" href="../pages/dashboard.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">Dashboard</span>
   </a>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/tables.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/tables.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">Tables</span>
   </a>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/billing.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/billing.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
   </div>
    <span className="nav-link-text ms-1">Billing</span>
   </a>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/virtual-reality.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/virtual-reality.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-app text-info text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">Virtual Reality</span>
   </a>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/rtl.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/rtl.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-world-2 text-danger text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">RTL</span>
   </a>
   </li>
   <li className="nav-item mt-3">
   <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/profile.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/profile.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">Profile</span>
   </a>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/sign-in.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/sign-in.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">Sign In</span>
   </a>
   </li>
   <li className="nav-item">
   <a className="nav-link " href="../pages/sign-up.html" title="Link: https://demos.creative-tim.com/argon-dashboard/pages/sign-up.html">
   <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
   <i className="ni ni-collection text-info text-sm opacity-10"></i>
   </div>
   <span className="nav-link-text ms-1">Sign Up</span>
   </a>
   </li>
   </ul>
   <div className="ps__rail-x" style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" style="top: 0px; height: 394px; right: 0px;"><div className="ps__thumb-y" tabindex="0" style="top: 0px; height: 320px;"></div></div></div>
   <div className="sidenav-footer mx-3 ">
   <div className="card card-plain shadow-none" id="sidenavCard">
   <img className="w-50 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration"/>
   <div className="card-body text-center p-3 w-100 pt-0">
   <div className="docs-info">
   <h6 className="mb-0">Need help?</h6>
   <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
   </div>
   </div>
   </div>
   <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard" target="_blank" className="btn btn-dark btn-sm w-100 mb-3" title="Link: https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard">Documentation</a>
   <a className="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button" title="Link: https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree">Upgrade to pro</a>
   </div>
   <div className="ps__rail-x" style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></aside>
   
   </div>   
   );
};