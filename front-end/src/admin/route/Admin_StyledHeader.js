// Admin_StyledHeader.js
import styled from 'styled-components';

const Admin_StyledHeader = styled.div`  

  .fixed-top, .sb_nav_fixed #layoutSidenav #layoutSidenav_nav, .sb_nav_fixed .sb-topnav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  
  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }
  
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  
  .sticky-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
  
  @media (min-width: 576px) {
    .sticky-sm-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
    .sticky-sm-bottom {
      position: sticky;
      bottom: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 768px) {
    .sticky-md-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
    .sticky-md-bottom {
      position: sticky;
      bottom: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 992px) {
    .sticky-lg-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
    .sticky-lg-bottom {
      position: sticky;
      bottom: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 1200px) {
    .sticky-xl-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
    .sticky-xl-bottom {
      position: sticky;
      bottom: 0;
      z-index: 1020;
    }
  }
  @media (min-width: 1400px) {
    .sticky-xxl-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
    .sticky-xxl-bottom {
      position: sticky;
      bottom: 0;
      z-index: 1020;
    }
  }
  .hstack {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
  }
  
  .vstack {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-self: stretch;
  }
  
  .visually-hidden,
  .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
  
  .stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
  
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  

  
  .d-flex {
    display: flex !important;
  }
  
  
  .position-static {
    position: static !important;
  }
  
  .position-relative {
    position: relative !important;
  }
  
  .position-absolute {
    position: absolute !important;
  }
  
  .position-fixed {
    position: fixed !important;
  }
  
  .position-sticky {
    position: sticky !important;
  }
  
  .top-0 {
    top: 0 !important;
  }
  
  .top-50 {
    top: 50% !important;
  }
  
  .top-100 {
    top: 100% !important;
  }
  
  .bottom-0 {
    bottom: 0 !important;
  }
  
  .bottom-50 {
    bottom: 50% !important;
  }
  
  .bottom-100 {
    bottom: 100% !important;
  }
  
  .start-0 {
    left: 0 !important;
  }
  
  .start-50 {
    left: 50% !important;
  }
  
  .start-100 {
    left: 100% !important;
  }
  
  .end-0 {
    right: 0 !important;
  }
  
  .end-50 {
    right: 50% !important;
  }
  
  .end-100 {
    right: 100% !important;
  }
  
  .translate-middle {
    transform: translate(-50%, -50%) !important;
  }
  
  .translate-middle-x {
    transform: translateX(-50%) !important;
  }
  
  .translate-middle-y {
    transform: translateY(-50%) !important;
  }
  
  .border {
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  }
  
  .border-0 {
    border: 0 !important;
  }
  
  .border-top {
    border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  }
  
  .border-top-0 {
    border-top: 0 !important;
  }
  
  .border-end {
    border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  }
  
  .border-end-0 {
    border-right: 0 !important;
  }
  
  .border-bottom {
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  }
  
  .border-bottom-0 {
    border-bottom: 0 !important;
  }
  
  .border-start {
    border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  }
  
  .border-start-0 {
    border-left: 0 !important;
  }
  
  .border-primary {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-secondary {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-success {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-info {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-warning {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-danger {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-light {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-dark {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-white {
    --bs-border-opacity: 1;
    border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
  }
  
  .border-1 {
    --bs-border-width: 1px;
  }
  
  .border-2 {
    --bs-border-width: 2px;
  }
  
  .border-3 {
    --bs-border-width: 3px;
  }
  
  .border-4 {
    --bs-border-width: 4px;
  }
  
  .border-5 {
    --bs-border-width: 5px;
  }
  
  .border-opacity-10 {
    --bs-border-opacity: 0.1;
  }
  
  .border-opacity-25 {
    --bs-border-opacity: 0.25;
  }
  
  .border-opacity-50 {
    --bs-border-opacity: 0.5;
  }
  
  .border-opacity-75 {
    --bs-border-opacity: 0.75;
  }
  
  .border-opacity-100 {
    --bs-border-opacity: 1;
  }
  
  .w-25 {
    width: 25% !important;
  }
  
  .w-50 {
    width: 50% !important;
  }
  
  .w-75 {
    width: 75% !important;
  }
  
  .w-100 {
    width: 100% !important;
  }
  
  .w-auto {
    width: auto !important;
  }
  
  .mw-100 {
    max-width: 100% !important;
  }
  
  .vw-100 {
    width: 100vw !important;
  }
  
  .min-vw-100 {
    min-width: 100vw !important;
  }
  
  .h-25 {
    height: 25% !important;
  }
  
  .h-50 {
    height: 50% !important;
  }
  
  .h-75 {
    height: 75% !important;
  }
  
  .h-100 {
    height: 100% !important;
  }
  
  .h-auto {
    height: auto !important;
  }
  
  .mh-100 {
    max-height: 100% !important;
  }
  
  .vh-100 {
    height: 100vh !important;
  }
  
  .min-vh-100 {
    min-height: 100vh !important;
  }
  
  .flex-fill {
    flex: 1 1 auto !important;
  }
  
  .flex-row {
    flex-direction: row !important;
  }
  
  .flex-column {
    flex-direction: column !important;
  }
  
  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }
  
  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }
  
  .flex-grow-0 {
    flex-grow: 0 !important;
  }
  
  .flex-grow-1 {
    flex-grow: 1 !important;
  }
  
  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }
  
  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }
  
  .flex-wrap {
    flex-wrap: wrap !important;
  }
  
  .flex-nowrap {
    flex-wrap: nowrap !important;
  }
  
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  
  .justify-content-start {
    justify-content: flex-start !important;
  }
  
  .justify-content-end {
    justify-content: flex-end !important;
  }
  
  .justify-content-center {
    justify-content: center !important;
  }
  
  .justify-content-between {
    justify-content: space-between !important;
  }
  
  .justify-content-around {
    justify-content: space-around !important;
  }
  
  .justify-content-evenly {
    justify-content: space-evenly !important;
  }
  
  .align-items-start {
    align-items: flex-start !important;
  }
  
  .align-items-end {
    align-items: flex-end !important;
  }
  
  .align-items-center {
    align-items: center !important;
  }
  
  .align-items-baseline {
    align-items: baseline !important;
  }
  
  .align-items-stretch {
    align-items: stretch !important;
  }
  
  .align-content-start {
    align-content: flex-start !important;
  }
  
  .align-content-end {
    align-content: flex-end !important;
  }
  
  .align-content-center {
    align-content: center !important;
  }
  
  .align-content-between {
    align-content: space-between !important;
  }
  
  .align-content-around {
    align-content: space-around !important;
  }
  
  .align-content-stretch {
    align-content: stretch !important;
  }
  
  .align-self-auto {
    align-self: auto !important;
  }
  
  .align-self-start {
    align-self: flex-start !important;
  }
  
  .align-self-end {
    align-self: flex-end !important;
  }
  
  .align-self-center {
    align-self: center !important;
  }
  
  .align-self-baseline {
    align-self: baseline !important;
  }
  
  .align-self-stretch {
    align-self: stretch !important;
  }
  
  .order-first {
    order: -1 !important;
  }
  
  .order-0 {
    order: 0 !important;
  }
  
  .order-1 {
    order: 1 !important;
  }
  
  .order-2 {
    order: 2 !important;
  }
  
  .order-3 {
    order: 3 !important;
  }
  
  .order-4 {
    order: 4 !important;
  }
  
  .order-5 {
    order: 5 !important;
  }
  
  .order-last {
    order: 6 !important;
  }
  
  .m-0 {
    margin: 0 !important;
  }
  
  .m-1 {
    margin: 0.25rem !important;
  }
  
  .m-2 {
    margin: 0.5rem !important;
  }
  
  .m-3 {
    margin: 1rem !important;
  }
  
  .m-4 {
    margin: 1.5rem !important;
  }
  
  .m-5 {
    margin: 3rem !important;
  }
  
  .m-auto {
    margin: auto !important;
  }
  
  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  
  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  
  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  
  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  
  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  
  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  
  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  
  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  
  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  
  .mt-0 {
    margin-top: 0 !important;
  }
  
  .mt-1 {
    margin-top: 0.25rem !important;
  }
  
  .mt-2 {
    margin-top: 0.5rem !important;
  }
  
  .mt-3 {
    margin-top: 1rem !important;
  }
  
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  
  .mt-5 {
    margin-top: 3rem !important;
  }
  
  .mt-auto {
    margin-top: auto !important;
  }
  
  .me-0 {
    margin-right: 0 !important;
  }
  
  .me-1 {
    margin-right: 0.25rem !important;
  }
  
  .me-2 {
    margin-right: 0.5rem !important;
  }
  
  .me-3 {
    margin-right: 1rem !important;
  }
  
  .me-4 {
    margin-right: 1.5rem !important;
  }
  
  .me-5 {
    margin-right: 3rem !important;
  }
  
  .me-auto {
    margin-right: auto !important;
  }
  
  .mb-0 {
    margin-bottom: 0 !important;
  }
  
  .mb-1 {
    margin-bottom: 0.25rem !important;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem !important;
  }
  
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  
  .mb-5 {
    margin-bottom: 3rem !important;
  }
  
  .mb-auto {
    margin-bottom: auto !important;
  }
  
  .ms-0 {
    margin-left: 0 !important;
  }
  
  .ms-1 {
    margin-left: 0.25rem !important;
  }
  
  .ms-2 {
    margin-left: 0.5rem !important;
  }
  
  .ms-3 {
    margin-left: 1rem !important;
  }
  
  .ms-4 {
    margin-left: 1.5rem !important;
  }
  
  .ms-5 {
    margin-left: 3rem !important;
  }
  
  .ms-auto {
    margin-left: auto !important;
  }
  
  .p-0 {
    padding: 0 !important;
  }
  
  .p-1 {
    padding: 0.25rem !important;
  }
  
  .p-2 {
    padding: 0.5rem !important;
  }
  
  .p-3 {
    padding: 1rem !important;
  }
  
  .p-4 {
    padding: 1.5rem !important;
  }
  
  .p-5 {
    padding: 3rem !important;
  }
  
  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  
  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  
  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  
  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  
  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  
  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  
  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  
  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  
  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  
  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  
  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  
  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  
  .pt-0 {
    padding-top: 0 !important;
  }
  
  .pt-1 {
    padding-top: 0.25rem !important;
  }
  
  .pt-2 {
    padding-top: 0.5rem !important;
  }
  
  .pt-3 {
    padding-top: 1rem !important;
  }
  
  .pt-4 {
    padding-top: 1.5rem !important;
  }
  
  .pt-5 {
    padding-top: 3rem !important;
  }
  
  .pe-0 {
    padding-right: 0 !important;
  }
  
  .pe-1 {
    padding-right: 0.25rem !important;
  }
  
  .pe-2 {
    padding-right: 0.5rem !important;
  }
  
  .pe-3 {
    padding-right: 1rem !important;
  }
  
  .pe-4 {
    padding-right: 1.5rem !important;
  }
  
  .pe-5 {
    padding-right: 3rem !important;
  }
  
  .pb-0 {
    padding-bottom: 0 !important;
  }
  
  .pb-1 {
    padding-bottom: 0.25rem !important;
  }
  
  .pb-2 {
    padding-bottom: 0.5rem !important;
  }
  
  .pb-3 {
    padding-bottom: 1rem !important;
  }
  
  .pb-4 {
    padding-bottom: 1.5rem !important;
  }
  
  .pb-5 {
    padding-bottom: 3rem !important;
  }
  
  .ps-0 {
    padding-left: 0 !important;
  }
  
  .ps-1 {
    padding-left: 0.25rem !important;
  }
  
  .ps-2 {
    padding-left: 0.5rem !important;
  }
  
  .ps-3 {
    padding-left: 1rem !important;
  }
  
  .ps-4 {
    padding-left: 1.5rem !important;
  }
  
  .ps-5 {
    padding-left: 3rem !important;
  }
  
  .gap-0 {
    gap: 0 !important;
  }
  
  .gap-1 {
    gap: 0.25rem !important;
  }
  
  .gap-2 {
    gap: 0.5rem !important;
  }
  
  .gap-3 {
    gap: 1rem !important;
  }
  
  .gap-4 {
    gap: 1.5rem !important;
  }
  
  .gap-5 {
    gap: 3rem !important;
  }
  
  .font-monospace {
    font-family: var(--bs-font-monospace) !important;
  }
  
  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }
  
  .fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }
  
  .fs-3 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }
  
  .fs-4 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }
  
  .fs-5 {
    font-size: 1.25rem !important;
  }
  
  .fs-6 {
    font-size: 1rem !important;
  }
  
  .fst-italic {
    font-style: italic !important;
  }
  
  .fst-normal {
    font-style: normal !important;
  }
  
  .fw-light {
    font-weight: 300 !important;
  }
  
  .fw-lighter {
    font-weight: lighter !important;
  }
  
  .fw-normal {
    font-weight: 400 !important;
  }
  
  .fw-bold {
    font-weight: 700 !important;
  }
  
  .fw-semibold {
    font-weight: 600 !important;
  }
  
  .fw-bolder {
    font-weight: bolder !important;
  }
  
  .lh-1 {
    line-height: 1 !important;
  }
  
  .lh-sm {
    line-height: 1.25 !important;
  }
  
  .lh-base {
    line-height: 1.5 !important;
  }
  
  .lh-lg {
    line-height: 2 !important;
  }
  
  .text-start {
    text-align: left !important;
  }
  
  .text-end {
    text-align: right !important;
  }
  
  .text-center {
    text-align: center !important;
  }
  
  .text-decoration-none {
    text-decoration: none !important;
  }
  
  .text-decoration-underline {
    text-decoration: underline !important;
  }
  
  .text-decoration-line-through {
    text-decoration: line-through !important;
  }
  
  .text-lowercase {
    text-transform: lowercase !important;
  }
  
  .text-uppercase {
    text-transform: uppercase !important;
  }
  
  .text-capitalize {
    text-transform: capitalize !important;
  }
  
  .text-wrap {
    white-space: normal !important;
  }
  
  .text-nowrap {
    white-space: nowrap !important;
  }
  
  /* rtl:begin:remove */
  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
  
  /* rtl:end:remove */
  .text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
  }
  
  .text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important;
  }
  
  .text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, 0.5) !important;
  }
  
  .text-white-50 {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, 0.5) !important;
  }
  
  .text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
  }
  
  .text-opacity-25 {
    --bs-text-opacity: 0.25;
  }
  
  .text-opacity-50 {
    --bs-text-opacity: 0.5;
  }
  
  .text-opacity-75 {
    --bs-text-opacity: 0.75;
  }
  
  .text-opacity-100 {
    --bs-text-opacity: 1;
  }
  
  .bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
  }
  
  .bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
  }
  
  .bg-opacity-10 {
    --bs-bg-opacity: 0.1;
  }
  
  .bg-opacity-25 {
    --bs-bg-opacity: 0.25;
  }
  
  .bg-opacity-50 {
    --bs-bg-opacity: 0.5;
  }
  
  .bg-opacity-75 {
    --bs-bg-opacity: 0.75;
  }
  
  .bg-opacity-100 {
    --bs-bg-opacity: 1;
  }
  
  .bg-gradient {
    background-image: var(--bs-gradient) !important;
  }
  
  .user-select-all {
    -webkit-user-select: all !important;
       -moz-user-select: all !important;
            user-select: all !important;
  }
  
  .user-select-auto {
    -webkit-user-select: auto !important;
       -moz-user-select: auto !important;
            user-select: auto !important;
  }
  
  .user-select-none {
    -webkit-user-select: none !important;
       -moz-user-select: none !important;
            user-select: none !important;
  }
  
  .pe-none {
    pointer-events: none !important;
  }
  
  .pe-auto {
    pointer-events: auto !important;
  }
  
  .rounded {
    border-radius: var(--bs-border-radius) !important;
  }
  
  .rounded-0 {
    border-radius: 0 !important;
  }
  
  .rounded-1 {
    border-radius: var(--bs-border-radius-sm) !important;
  }
  
  .rounded-2 {
    border-radius: var(--bs-border-radius) !important;
  }
  
  .rounded-3 {
    border-radius: var(--bs-border-radius-lg) !important;
  }
  
  .rounded-4 {
    border-radius: var(--bs-border-radius-xl) !important;
  }
  
  .rounded-5 {
    border-radius: var(--bs-border-radius-2xl) !important;
  }
  
  .rounded-circle {
    border-radius: 50% !important;
  }
  
  .rounded-pill {
    border-radius: var(--bs-border-radius-pill) !important;
  }
  
  .rounded-top {
    border-top-left-radius: var(--bs-border-radius) !important;
    border-top-right-radius: var(--bs-border-radius) !important;
  }
  
  .rounded-end {
    border-top-right-radius: var(--bs-border-radius) !important;
    border-bottom-right-radius: var(--bs-border-radius) !important;
  }
  
  .rounded-bottom {
    border-bottom-right-radius: var(--bs-border-radius) !important;
    border-bottom-left-radius: var(--bs-border-radius) !important;
  }
  
  .rounded-start {
    border-bottom-left-radius: var(--bs-border-radius) !important;
    border-top-left-radius: var(--bs-border-radius) !important;
  }
  
  .visible {
    visibility: visible !important;
  }
  
  .invisible {
    visibility: hidden !important;
  }
  
  @media (min-width: 576px) {
    .float-sm-start {
      float: left !important;
    }
    .float-sm-end {
      float: right !important;
    }
    .float-sm-none {
      float: none !important;
    }
    .d-sm-inline {
      display: inline !important;
    }
    .d-sm-inline-block {
      display: inline-block !important;
    }
    .d-sm-block {
      display: block !important;
    }
    .d-sm-grid {
      display: grid !important;
    }
    .d-sm-table {
      display: table !important;
    }
    .d-sm-table-row {
      display: table-row !important;
    }
    .d-sm-table-cell {
      display: table-cell !important;
    }
    .d-sm-flex {
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: inline-flex !important;
    }
    .d-sm-none {
      display: none !important;
    }
    .flex-sm-fill {
      flex: 1 1 auto !important;
    }
    .flex-sm-row {
      flex-direction: row !important;
    }
    .flex-sm-column {
      flex-direction: column !important;
    }
    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }
    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      justify-content: center !important;
    }
    .justify-content-sm-between {
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      justify-content: space-around !important;
    }
    .justify-content-sm-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-sm-start {
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      align-items: center !important;
    }
    .align-items-sm-baseline {
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      align-items: stretch !important;
    }
    .align-content-sm-start {
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      align-content: center !important;
    }
    .align-content-sm-between {
      align-content: space-between !important;
    }
    .align-content-sm-around {
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      align-self: auto !important;
    }
    .align-self-sm-start {
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      align-self: center !important;
    }
    .align-self-sm-baseline {
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      align-self: stretch !important;
    }
    .order-sm-first {
      order: -1 !important;
    }
    .order-sm-0 {
      order: 0 !important;
    }
    .order-sm-1 {
      order: 1 !important;
    }
    .order-sm-2 {
      order: 2 !important;
    }
    .order-sm-3 {
      order: 3 !important;
    }
    .order-sm-4 {
      order: 4 !important;
    }
    .order-sm-5 {
      order: 5 !important;
    }
    .order-sm-last {
      order: 6 !important;
    }
    .m-sm-0 {
      margin: 0 !important;
    }
    .m-sm-1 {
      margin: 0.25rem !important;
    }
    .m-sm-2 {
      margin: 0.5rem !important;
    }
    .m-sm-3 {
      margin: 1rem !important;
    }
    .m-sm-4 {
      margin: 1.5rem !important;
    }
    .m-sm-5 {
      margin: 3rem !important;
    }
    .m-sm-auto {
      margin: auto !important;
    }
    .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-sm-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-sm-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-sm-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-sm-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-sm-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-sm-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-sm-0 {
      margin-top: 0 !important;
    }
    .mt-sm-1 {
      margin-top: 0.25rem !important;
    }
    .mt-sm-2 {
      margin-top: 0.5rem !important;
    }
    .mt-sm-3 {
      margin-top: 1rem !important;
    }
    .mt-sm-4 {
      margin-top: 1.5rem !important;
    }
    .mt-sm-5 {
      margin-top: 3rem !important;
    }
    .mt-sm-auto {
      margin-top: auto !important;
    }
    .me-sm-0 {
      margin-right: 0 !important;
    }
    .me-sm-1 {
      margin-right: 0.25rem !important;
    }
    .me-sm-2 {
      margin-right: 0.5rem !important;
    }
    .me-sm-3 {
      margin-right: 1rem !important;
    }
    .me-sm-4 {
      margin-right: 1.5rem !important;
    }
    .me-sm-5 {
      margin-right: 3rem !important;
    }
    .me-sm-auto {
      margin-right: auto !important;
    }
    .mb-sm-0 {
      margin-bottom: 0 !important;
    }
    .mb-sm-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-sm-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-sm-3 {
      margin-bottom: 1rem !important;
    }
    .mb-sm-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-sm-5 {
      margin-bottom: 3rem !important;
    }
    .mb-sm-auto {
      margin-bottom: auto !important;
    }
    .ms-sm-0 {
      margin-left: 0 !important;
    }
    .ms-sm-1 {
      margin-left: 0.25rem !important;
    }
    .ms-sm-2 {
      margin-left: 0.5rem !important;
    }
    .ms-sm-3 {
      margin-left: 1rem !important;
    }
    .ms-sm-4 {
      margin-left: 1.5rem !important;
    }
    .ms-sm-5 {
      margin-left: 3rem !important;
    }
    .ms-sm-auto {
      margin-left: auto !important;
    }
    .p-sm-0 {
      padding: 0 !important;
    }
    .p-sm-1 {
      padding: 0.25rem !important;
    }
    .p-sm-2 {
      padding: 0.5rem !important;
    }
    .p-sm-3 {
      padding: 1rem !important;
    }
    .p-sm-4 {
      padding: 1.5rem !important;
    }
    .p-sm-5 {
      padding: 3rem !important;
    }
    .px-sm-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-sm-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-sm-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-sm-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-sm-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-sm-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-sm-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-sm-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-sm-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-sm-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-sm-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-sm-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-sm-0 {
      padding-top: 0 !important;
    }
    .pt-sm-1 {
      padding-top: 0.25rem !important;
    }
    .pt-sm-2 {
      padding-top: 0.5rem !important;
    }
    .pt-sm-3 {
      padding-top: 1rem !important;
    }
    .pt-sm-4 {
      padding-top: 1.5rem !important;
    }
    .pt-sm-5 {
      padding-top: 3rem !important;
    }
    .pe-sm-0 {
      padding-right: 0 !important;
    }
    .pe-sm-1 {
      padding-right: 0.25rem !important;
    }
    .pe-sm-2 {
      padding-right: 0.5rem !important;
    }
    .pe-sm-3 {
      padding-right: 1rem !important;
    }
    .pe-sm-4 {
      padding-right: 1.5rem !important;
    }
    .pe-sm-5 {
      padding-right: 3rem !important;
    }
    .pb-sm-0 {
      padding-bottom: 0 !important;
    }
    .pb-sm-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-sm-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-sm-3 {
      padding-bottom: 1rem !important;
    }
    .pb-sm-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-sm-5 {
      padding-bottom: 3rem !important;
    }
    .ps-sm-0 {
      padding-left: 0 !important;
    }
    .ps-sm-1 {
      padding-left: 0.25rem !important;
    }
    .ps-sm-2 {
      padding-left: 0.5rem !important;
    }
    .ps-sm-3 {
      padding-left: 1rem !important;
    }
    .ps-sm-4 {
      padding-left: 1.5rem !important;
    }
    .ps-sm-5 {
      padding-left: 3rem !important;
    }
    .gap-sm-0 {
      gap: 0 !important;
    }
    .gap-sm-1 {
      gap: 0.25rem !important;
    }
    .gap-sm-2 {
      gap: 0.5rem !important;
    }
    .gap-sm-3 {
      gap: 1rem !important;
    }
    .gap-sm-4 {
      gap: 1.5rem !important;
    }
    .gap-sm-5 {
      gap: 3rem !important;
    }
    .text-sm-start {
      text-align: left !important;
    }
    .text-sm-end {
      text-align: right !important;
    }
    .text-sm-center {
      text-align: center !important;
    }
  }
  @media (min-width: 768px) {
    .float-md-start {
      float: left !important;
    }
    .float-md-end {
      float: right !important;
    }
    .float-md-none {
      float: none !important;
    }
    .d-md-inline {
      display: inline !important;
    }
    .d-md-inline-block {
      display: inline-block !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-grid {
      display: grid !important;
    }
    .d-md-table {
      display: table !important;
    }
    .d-md-table-row {
      display: table-row !important;
    }
    .d-md-table-cell {
      display: table-cell !important;
    }
    .d-md-flex {
      display: flex !important;
    }
    .d-md-inline-flex {
      display: inline-flex !important;
    }
    .d-md-none {
      display: none !important;
    }
    .flex-md-fill {
      flex: 1 1 auto !important;
    }
    .flex-md-row {
      flex-direction: row !important;
    }
    .flex-md-column {
      flex-direction: column !important;
    }
    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }
    .flex-md-wrap {
      flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .justify-content-md-start {
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      justify-content: center !important;
    }
    .justify-content-md-between {
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      justify-content: space-around !important;
    }
    .justify-content-md-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-md-start {
      align-items: flex-start !important;
    }
    .align-items-md-end {
      align-items: flex-end !important;
    }
    .align-items-md-center {
      align-items: center !important;
    }
    .align-items-md-baseline {
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      align-items: stretch !important;
    }
    .align-content-md-start {
      align-content: flex-start !important;
    }
    .align-content-md-end {
      align-content: flex-end !important;
    }
    .align-content-md-center {
      align-content: center !important;
    }
    .align-content-md-between {
      align-content: space-between !important;
    }
    .align-content-md-around {
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      align-content: stretch !important;
    }
    .align-self-md-auto {
      align-self: auto !important;
    }
    .align-self-md-start {
      align-self: flex-start !important;
    }
    .align-self-md-end {
      align-self: flex-end !important;
    }
    .align-self-md-center {
      align-self: center !important;
    }
    .align-self-md-baseline {
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      align-self: stretch !important;
    }
    .order-md-first {
      order: -1 !important;
    }
    .order-md-0 {
      order: 0 !important;
    }
    .order-md-1 {
      order: 1 !important;
    }
    .order-md-2 {
      order: 2 !important;
    }
    .order-md-3 {
      order: 3 !important;
    }
    .order-md-4 {
      order: 4 !important;
    }
    .order-md-5 {
      order: 5 !important;
    }
    .order-md-last {
      order: 6 !important;
    }
    .m-md-0 {
      margin: 0 !important;
    }
    .m-md-1 {
      margin: 0.25rem !important;
    }
    .m-md-2 {
      margin: 0.5rem !important;
    }
    .m-md-3 {
      margin: 1rem !important;
    }
    .m-md-4 {
      margin: 1.5rem !important;
    }
    .m-md-5 {
      margin: 3rem !important;
    }
    .m-md-auto {
      margin: auto !important;
    }
    .mx-md-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-md-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-md-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-md-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-md-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-md-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-md-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-md-0 {
      margin-top: 0 !important;
    }
    .mt-md-1 {
      margin-top: 0.25rem !important;
    }
    .mt-md-2 {
      margin-top: 0.5rem !important;
    }
    .mt-md-3 {
      margin-top: 1rem !important;
    }
    .mt-md-4 {
      margin-top: 1.5rem !important;
    }
    .mt-md-5 {
      margin-top: 3rem !important;
    }
    .mt-md-auto {
      margin-top: auto !important;
    }
    .me-md-0 {
      margin-right: 0 !important;
    }
    .me-md-1 {
      margin-right: 0.25rem !important;
    }
    .me-md-2 {
      margin-right: 0.5rem !important;
    }
    .me-md-3 {
      margin-right: 1rem !important;
    }
    .me-md-4 {
      margin-right: 1.5rem !important;
    }
    .me-md-5 {
      margin-right: 3rem !important;
    }
    .me-md-auto {
      margin-right: auto !important;
    }
    .mb-md-0 {
      margin-bottom: 0 !important;
    }
    .mb-md-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-md-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-md-3 {
      margin-bottom: 1rem !important;
    }
    .mb-md-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-md-5 {
      margin-bottom: 3rem !important;
    }
    .mb-md-auto {
      margin-bottom: auto !important;
    }
    .ms-md-0 {
      margin-left: 0 !important;
    }
    .ms-md-1 {
      margin-left: 0.25rem !important;
    }
    .ms-md-2 {
      margin-left: 0.5rem !important;
    }
    .ms-md-3 {
      margin-left: 1rem !important;
    }
    .ms-md-4 {
      margin-left: 1.5rem !important;
    }
    .ms-md-5 {
      margin-left: 3rem !important;
    }
    .ms-md-auto {
      margin-left: auto !important;
    }
    .p-md-0 {
      padding: 0 !important;
    }
    .p-md-1 {
      padding: 0.25rem !important;
    }
    .p-md-2 {
      padding: 0.5rem !important;
    }
    .p-md-3 {
      padding: 1rem !important;
    }
    .p-md-4 {
      padding: 1.5rem !important;
    }
    .p-md-5 {
      padding: 3rem !important;
    }
    .px-md-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-md-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-md-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-md-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-md-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-md-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-md-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-md-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-md-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-md-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-md-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-md-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-md-0 {
      padding-top: 0 !important;
    }
    .pt-md-1 {
      padding-top: 0.25rem !important;
    }
    .pt-md-2 {
      padding-top: 0.5rem !important;
    }
    .pt-md-3 {
      padding-top: 1rem !important;
    }
    .pt-md-4 {
      padding-top: 1.5rem !important;
    }
    .pt-md-5 {
      padding-top: 3rem !important;
    }
    .pe-md-0 {
      padding-right: 0 !important;
    }
    .pe-md-1 {
      padding-right: 0.25rem !important;
    }
    .pe-md-2 {
      padding-right: 0.5rem !important;
    }
    .pe-md-3 {
      padding-right: 1rem !important;
    }
    .pe-md-4 {
      padding-right: 1.5rem !important;
    }
    .pe-md-5 {
      padding-right: 3rem !important;
    }
    .pb-md-0 {
      padding-bottom: 0 !important;
    }
    .pb-md-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-md-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-md-3 {
      padding-bottom: 1rem !important;
    }
    .pb-md-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-md-5 {
      padding-bottom: 3rem !important;
    }
    .ps-md-0 {
      padding-left: 0 !important;
    }
    .ps-md-1 {
      padding-left: 0.25rem !important;
    }
    .ps-md-2 {
      padding-left: 0.5rem !important;
    }
    .ps-md-3 {
      padding-left: 1rem !important;
    }
    .ps-md-4 {
      padding-left: 1.5rem !important;
    }
    .ps-md-5 {
      padding-left: 3rem !important;
    }
    .gap-md-0 {
      gap: 0 !important;
    }
    .gap-md-1 {
      gap: 0.25rem !important;
    }
    .gap-md-2 {
      gap: 0.5rem !important;
    }
    .gap-md-3 {
      gap: 1rem !important;
    }
    .gap-md-4 {
      gap: 1.5rem !important;
    }
    .gap-md-5 {
      gap: 3rem !important;
    }
    .text-md-start {
      text-align: left !important;
    }
    .text-md-end {
      text-align: right !important;
    }
    .text-md-center {
      text-align: center !important;
    }
  }
  @media (min-width: 992px) {
    .float-lg-start {
      float: left !important;
    }
    .float-lg-end {
      float: right !important;
    }
    .float-lg-none {
      float: none !important;
    }
    .d-lg-inline {
      display: inline !important;
    }
    .d-lg-inline-block {
      display: inline-block !important;
    }
    .d-lg-block {
      display: block !important;
    }
    .d-lg-grid {
      display: grid !important;
    }
    .d-lg-table {
      display: table !important;
    }
    .d-lg-table-row {
      display: table-row !important;
    }
    .d-lg-table-cell {
      display: table-cell !important;
    }
    .d-lg-flex {
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: inline-flex !important;
    }
    .d-lg-none {
      display: none !important;
    }
    .flex-lg-fill {
      flex: 1 1 auto !important;
    }
    .flex-lg-row {
      flex-direction: row !important;
    }
    .flex-lg-column {
      flex-direction: column !important;
    }
    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }
    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .justify-content-lg-start {
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      justify-content: center !important;
    }
    .justify-content-lg-between {
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      justify-content: space-around !important;
    }
    .justify-content-lg-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-lg-start {
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      align-items: center !important;
    }
    .align-items-lg-baseline {
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      align-items: stretch !important;
    }
    .align-content-lg-start {
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      align-content: center !important;
    }
    .align-content-lg-between {
      align-content: space-between !important;
    }
    .align-content-lg-around {
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      align-self: auto !important;
    }
    .align-self-lg-start {
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      align-self: center !important;
    }
    .align-self-lg-baseline {
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      align-self: stretch !important;
    }
    .order-lg-first {
      order: -1 !important;
    }
    .order-lg-0 {
      order: 0 !important;
    }
    .order-lg-1 {
      order: 1 !important;
    }
    .order-lg-2 {
      order: 2 !important;
    }
    .order-lg-3 {
      order: 3 !important;
    }
    .order-lg-4 {
      order: 4 !important;
    }
    .order-lg-5 {
      order: 5 !important;
    }
    .order-lg-last {
      order: 6 !important;
    }
    .m-lg-0 {
      margin: 0 !important;
    }
    .m-lg-1 {
      margin: 0.25rem !important;
    }
    .m-lg-2 {
      margin: 0.5rem !important;
    }
    .m-lg-3 {
      margin: 1rem !important;
    }
    .m-lg-4 {
      margin: 1.5rem !important;
    }
    .m-lg-5 {
      margin: 3rem !important;
    }
    .m-lg-auto {
      margin: auto !important;
    }
    .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-lg-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-lg-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-lg-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-lg-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-lg-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-lg-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-lg-0 {
      margin-top: 0 !important;
    }
    .mt-lg-1 {
      margin-top: 0.25rem !important;
    }
    .mt-lg-2 {
      margin-top: 0.5rem !important;
    }
    .mt-lg-3 {
      margin-top: 1rem !important;
    }
    .mt-lg-4 {
      margin-top: 1.5rem !important;
    }
    .mt-lg-5 {
      margin-top: 3rem !important;
    }
    .mt-lg-auto {
      margin-top: auto !important;
    }
    .me-lg-0 {
      margin-right: 0 !important;
    }
    .me-lg-1 {
      margin-right: 0.25rem !important;
    }
    .me-lg-2 {
      margin-right: 0.5rem !important;
    }
    .me-lg-3 {
      margin-right: 1rem !important;
    }
    .me-lg-4 {
      margin-right: 1.5rem !important;
    }
    .me-lg-5 {
      margin-right: 3rem !important;
    }
    .me-lg-auto {
      margin-right: auto !important;
    }
    .mb-lg-0 {
      margin-bottom: 0 !important;
    }
    .mb-lg-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-lg-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-lg-3 {
      margin-bottom: 1rem !important;
    }
    .mb-lg-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-lg-5 {
      margin-bottom: 3rem !important;
    }
    .mb-lg-auto {
      margin-bottom: auto !important;
    }
    .ms-lg-0 {
      margin-left: 0 !important;
    }
    .ms-lg-1 {
      margin-left: 0.25rem !important;
    }
    .ms-lg-2 {
      margin-left: 0.5rem !important;
    }
    .ms-lg-3 {
      margin-left: 1rem !important;
    }
    .ms-lg-4 {
      margin-left: 1.5rem !important;
    }
    .ms-lg-5 {
      margin-left: 3rem !important;
    }
    .ms-lg-auto {
      margin-left: auto !important;
    }
    .p-lg-0 {
      padding: 0 !important;
    }
    .p-lg-1 {
      padding: 0.25rem !important;
    }
    .p-lg-2 {
      padding: 0.5rem !important;
    }
    .p-lg-3 {
      padding: 1rem !important;
    }
    .p-lg-4 {
      padding: 1.5rem !important;
    }
    .p-lg-5 {
      padding: 3rem !important;
    }
    .px-lg-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-lg-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-lg-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-lg-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-lg-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-lg-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-lg-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-lg-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-lg-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-lg-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-lg-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-lg-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-lg-0 {
      padding-top: 0 !important;
    }
    .pt-lg-1 {
      padding-top: 0.25rem !important;
    }
    .pt-lg-2 {
      padding-top: 0.5rem !important;
    }
    .pt-lg-3 {
      padding-top: 1rem !important;
    }
    .pt-lg-4 {
      padding-top: 1.5rem !important;
    }
    .pt-lg-5 {
      padding-top: 3rem !important;
    }
    .pe-lg-0 {
      padding-right: 0 !important;
    }
    .pe-lg-1 {
      padding-right: 0.25rem !important;
    }
    .pe-lg-2 {
      padding-right: 0.5rem !important;
    }
    .pe-lg-3 {
      padding-right: 1rem !important;
    }
    .pe-lg-4 {
      padding-right: 1.5rem !important;
    }
    .pe-lg-5 {
      padding-right: 3rem !important;
    }
    .pb-lg-0 {
      padding-bottom: 0 !important;
    }
    .pb-lg-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-lg-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-lg-3 {
      padding-bottom: 1rem !important;
    }
    .pb-lg-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-lg-5 {
      padding-bottom: 3rem !important;
    }
    .ps-lg-0 {
      padding-left: 0 !important;
    }
    .ps-lg-1 {
      padding-left: 0.25rem !important;
    }
    .ps-lg-2 {
      padding-left: 0.5rem !important;
    }
    .ps-lg-3 {
      padding-left: 1rem !important;
    }
    .ps-lg-4 {
      padding-left: 1.5rem !important;
    }
    .ps-lg-5 {
      padding-left: 3rem !important;
    }
    .gap-lg-0 {
      gap: 0 !important;
    }
    .gap-lg-1 {
      gap: 0.25rem !important;
    }
    .gap-lg-2 {
      gap: 0.5rem !important;
    }
    .gap-lg-3 {
      gap: 1rem !important;
    }
    .gap-lg-4 {
      gap: 1.5rem !important;
    }
    .gap-lg-5 {
      gap: 3rem !important;
    }
    .text-lg-start {
      text-align: left !important;
    }
    .text-lg-end {
      text-align: right !important;
    }
    .text-lg-center {
      text-align: center !important;
    }
  }
  @media (min-width: 1200px) {
    .float-xl-start {
      float: left !important;
    }
    .float-xl-end {
      float: right !important;
    }
    .float-xl-none {
      float: none !important;
    }
    .d-xl-inline {
      display: inline !important;
    }
    .d-xl-inline-block {
      display: inline-block !important;
    }
    .d-xl-block {
      display: block !important;
    }
    .d-xl-grid {
      display: grid !important;
    }
    .d-xl-table {
      display: table !important;
    }
    .d-xl-table-row {
      display: table-row !important;
    }
    .d-xl-table-cell {
      display: table-cell !important;
    }
    .d-xl-flex {
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: inline-flex !important;
    }
    .d-xl-none {
      display: none !important;
    }
    .flex-xl-fill {
      flex: 1 1 auto !important;
    }
    .flex-xl-row {
      flex-direction: row !important;
    }
    .flex-xl-column {
      flex-direction: column !important;
    }
    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }
    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .justify-content-xl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      justify-content: center !important;
    }
    .justify-content-xl-between {
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      justify-content: space-around !important;
    }
    .justify-content-xl-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-xl-start {
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      align-items: center !important;
    }
    .align-items-xl-baseline {
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      align-items: stretch !important;
    }
    .align-content-xl-start {
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      align-content: center !important;
    }
    .align-content-xl-between {
      align-content: space-between !important;
    }
    .align-content-xl-around {
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      align-self: auto !important;
    }
    .align-self-xl-start {
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      align-self: center !important;
    }
    .align-self-xl-baseline {
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      align-self: stretch !important;
    }
    .order-xl-first {
      order: -1 !important;
    }
    .order-xl-0 {
      order: 0 !important;
    }
    .order-xl-1 {
      order: 1 !important;
    }
    .order-xl-2 {
      order: 2 !important;
    }
    .order-xl-3 {
      order: 3 !important;
    }
    .order-xl-4 {
      order: 4 !important;
    }
    .order-xl-5 {
      order: 5 !important;
    }
    .order-xl-last {
      order: 6 !important;
    }
    .m-xl-0 {
      margin: 0 !important;
    }
    .m-xl-1 {
      margin: 0.25rem !important;
    }
    .m-xl-2 {
      margin: 0.5rem !important;
    }
    .m-xl-3 {
      margin: 1rem !important;
    }
    .m-xl-4 {
      margin: 1.5rem !important;
    }
    .m-xl-5 {
      margin: 3rem !important;
    }
    .m-xl-auto {
      margin: auto !important;
    }
    .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-xl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-xl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-xl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-xl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-xl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-xl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-xl-0 {
      margin-top: 0 !important;
    }
    .mt-xl-1 {
      margin-top: 0.25rem !important;
    }
    .mt-xl-2 {
      margin-top: 0.5rem !important;
    }
    .mt-xl-3 {
      margin-top: 1rem !important;
    }
    .mt-xl-4 {
      margin-top: 1.5rem !important;
    }
    .mt-xl-5 {
      margin-top: 3rem !important;
    }
    .mt-xl-auto {
      margin-top: auto !important;
    }
    .me-xl-0 {
      margin-right: 0 !important;
    }
    .me-xl-1 {
      margin-right: 0.25rem !important;
    }
    .me-xl-2 {
      margin-right: 0.5rem !important;
    }
    .me-xl-3 {
      margin-right: 1rem !important;
    }
    .me-xl-4 {
      margin-right: 1.5rem !important;
    }
    .me-xl-5 {
      margin-right: 3rem !important;
    }
    .me-xl-auto {
      margin-right: auto !important;
    }
    .mb-xl-0 {
      margin-bottom: 0 !important;
    }
    .mb-xl-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-xl-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-xl-3 {
      margin-bottom: 1rem !important;
    }
    .mb-xl-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-xl-5 {
      margin-bottom: 3rem !important;
    }
    .mb-xl-auto {
      margin-bottom: auto !important;
    }
    .ms-xl-0 {
      margin-left: 0 !important;
    }
    .ms-xl-1 {
      margin-left: 0.25rem !important;
    }
    .ms-xl-2 {
      margin-left: 0.5rem !important;
    }
    .ms-xl-3 {
      margin-left: 1rem !important;
    }
    .ms-xl-4 {
      margin-left: 1.5rem !important;
    }
    .ms-xl-5 {
      margin-left: 3rem !important;
    }
    .ms-xl-auto {
      margin-left: auto !important;
    }
    .p-xl-0 {
      padding: 0 !important;
    }
    .p-xl-1 {
      padding: 0.25rem !important;
    }
    .p-xl-2 {
      padding: 0.5rem !important;
    }
    .p-xl-3 {
      padding: 1rem !important;
    }
    .p-xl-4 {
      padding: 1.5rem !important;
    }
    .p-xl-5 {
      padding: 3rem !important;
    }
    .px-xl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-xl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-xl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-xl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-xl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-xl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-xl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-xl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-xl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-xl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-xl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-xl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-xl-0 {
      padding-top: 0 !important;
    }
    .pt-xl-1 {
      padding-top: 0.25rem !important;
    }
    .pt-xl-2 {
      padding-top: 0.5rem !important;
    }
    .pt-xl-3 {
      padding-top: 1rem !important;
    }
    .pt-xl-4 {
      padding-top: 1.5rem !important;
    }
    .pt-xl-5 {
      padding-top: 3rem !important;
    }
    .pe-xl-0 {
      padding-right: 0 !important;
    }
    .pe-xl-1 {
      padding-right: 0.25rem !important;
    }
    .pe-xl-2 {
      padding-right: 0.5rem !important;
    }
    .pe-xl-3 {
      padding-right: 1rem !important;
    }
    .pe-xl-4 {
      padding-right: 1.5rem !important;
    }
    .pe-xl-5 {
      padding-right: 3rem !important;
    }
    .pb-xl-0 {
      padding-bottom: 0 !important;
    }
    .pb-xl-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-xl-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-xl-3 {
      padding-bottom: 1rem !important;
    }
    .pb-xl-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-xl-5 {
      padding-bottom: 3rem !important;
    }
    .ps-xl-0 {
      padding-left: 0 !important;
    }
    .ps-xl-1 {
      padding-left: 0.25rem !important;
    }
    .ps-xl-2 {
      padding-left: 0.5rem !important;
    }
    .ps-xl-3 {
      padding-left: 1rem !important;
    }
    .ps-xl-4 {
      padding-left: 1.5rem !important;
    }
    .ps-xl-5 {
      padding-left: 3rem !important;
    }
    .gap-xl-0 {
      gap: 0 !important;
    }
    .gap-xl-1 {
      gap: 0.25rem !important;
    }
    .gap-xl-2 {
      gap: 0.5rem !important;
    }
    .gap-xl-3 {
      gap: 1rem !important;
    }
    .gap-xl-4 {
      gap: 1.5rem !important;
    }
    .gap-xl-5 {
      gap: 3rem !important;
    }
    .text-xl-start {
      text-align: left !important;
    }
    .text-xl-end {
      text-align: right !important;
    }
    .text-xl-center {
      text-align: center !important;
    }
  }
  @media (min-width: 1400px) {
    .float-xxl-start {
      float: left !important;
    }
    .float-xxl-end {
      float: right !important;
    }
    .float-xxl-none {
      float: none !important;
    }
    .d-xxl-inline {
      display: inline !important;
    }
    .d-xxl-inline-block {
      display: inline-block !important;
    }
    .d-xxl-block {
      display: block !important;
    }
    .d-xxl-grid {
      display: grid !important;
    }
    .d-xxl-table {
      display: table !important;
    }
    .d-xxl-table-row {
      display: table-row !important;
    }
    .d-xxl-table-cell {
      display: table-cell !important;
    }
    .d-xxl-flex {
      display: flex !important;
    }
    .d-xxl-inline-flex {
      display: inline-flex !important;
    }
    .d-xxl-none {
      display: none !important;
    }
    .flex-xxl-fill {
      flex: 1 1 auto !important;
    }
    .flex-xxl-row {
      flex-direction: row !important;
    }
    .flex-xxl-column {
      flex-direction: column !important;
    }
    .flex-xxl-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-xxl-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-xxl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xxl-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-xxl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xxl-shrink-1 {
      flex-shrink: 1 !important;
    }
    .flex-xxl-wrap {
      flex-wrap: wrap !important;
    }
    .flex-xxl-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .justify-content-xxl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xxl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xxl-center {
      justify-content: center !important;
    }
    .justify-content-xxl-between {
      justify-content: space-between !important;
    }
    .justify-content-xxl-around {
      justify-content: space-around !important;
    }
    .justify-content-xxl-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-xxl-start {
      align-items: flex-start !important;
    }
    .align-items-xxl-end {
      align-items: flex-end !important;
    }
    .align-items-xxl-center {
      align-items: center !important;
    }
    .align-items-xxl-baseline {
      align-items: baseline !important;
    }
    .align-items-xxl-stretch {
      align-items: stretch !important;
    }
    .align-content-xxl-start {
      align-content: flex-start !important;
    }
    .align-content-xxl-end {
      align-content: flex-end !important;
    }
    .align-content-xxl-center {
      align-content: center !important;
    }
    .align-content-xxl-between {
      align-content: space-between !important;
    }
    .align-content-xxl-around {
      align-content: space-around !important;
    }
    .align-content-xxl-stretch {
      align-content: stretch !important;
    }
    .align-self-xxl-auto {
      align-self: auto !important;
    }
    .align-self-xxl-start {
      align-self: flex-start !important;
    }
    .align-self-xxl-end {
      align-self: flex-end !important;
    }
    .align-self-xxl-center {
      align-self: center !important;
    }
    .align-self-xxl-baseline {
      align-self: baseline !important;
    }
    .align-self-xxl-stretch {
      align-self: stretch !important;
    }
    .order-xxl-first {
      order: -1 !important;
    }
    .order-xxl-0 {
      order: 0 !important;
    }
    .order-xxl-1 {
      order: 1 !important;
    }
    .order-xxl-2 {
      order: 2 !important;
    }
    .order-xxl-3 {
      order: 3 !important;
    }
    .order-xxl-4 {
      order: 4 !important;
    }
    .order-xxl-5 {
      order: 5 !important;
    }
    .order-xxl-last {
      order: 6 !important;
    }
    .m-xxl-0 {
      margin: 0 !important;
    }
    .m-xxl-1 {
      margin: 0.25rem !important;
    }
    .m-xxl-2 {
      margin: 0.5rem !important;
    }
    .m-xxl-3 {
      margin: 1rem !important;
    }
    .m-xxl-4 {
      margin: 1.5rem !important;
    }
    .m-xxl-5 {
      margin: 3rem !important;
    }
    .m-xxl-auto {
      margin: auto !important;
    }
    .mx-xxl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-xxl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-xxl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-xxl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-xxl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-xxl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-xxl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-xxl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-xxl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-xxl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-xxl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-xxl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-xxl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-xxl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-xxl-0 {
      margin-top: 0 !important;
    }
    .mt-xxl-1 {
      margin-top: 0.25rem !important;
    }
    .mt-xxl-2 {
      margin-top: 0.5rem !important;
    }
    .mt-xxl-3 {
      margin-top: 1rem !important;
    }
    .mt-xxl-4 {
      margin-top: 1.5rem !important;
    }
    .mt-xxl-5 {
      margin-top: 3rem !important;
    }
    .mt-xxl-auto {
      margin-top: auto !important;
    }
    .me-xxl-0 {
      margin-right: 0 !important;
    }
    .me-xxl-1 {
      margin-right: 0.25rem !important;
    }
    .me-xxl-2 {
      margin-right: 0.5rem !important;
    }
    .me-xxl-3 {
      margin-right: 1rem !important;
    }
    .me-xxl-4 {
      margin-right: 1.5rem !important;
    }
    .me-xxl-5 {
      margin-right: 3rem !important;
    }
    .me-xxl-auto {
      margin-right: auto !important;
    }
    .mb-xxl-0 {
      margin-bottom: 0 !important;
    }
    .mb-xxl-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-xxl-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-xxl-3 {
      margin-bottom: 1rem !important;
    }
    .mb-xxl-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-xxl-5 {
      margin-bottom: 3rem !important;
    }
    .mb-xxl-auto {
      margin-bottom: auto !important;
    }
    .ms-xxl-0 {
      margin-left: 0 !important;
    }
    .ms-xxl-1 {
      margin-left: 0.25rem !important;
    }
    .ms-xxl-2 {
      margin-left: 0.5rem !important;
    }
    .ms-xxl-3 {
      margin-left: 1rem !important;
    }
    .ms-xxl-4 {
      margin-left: 1.5rem !important;
    }
    .ms-xxl-5 {
      margin-left: 3rem !important;
    }
    .ms-xxl-auto {
      margin-left: auto !important;
    }
    .p-xxl-0 {
      padding: 0 !important;
    }
    .p-xxl-1 {
      padding: 0.25rem !important;
    }
    .p-xxl-2 {
      padding: 0.5rem !important;
    }
    .p-xxl-3 {
      padding: 1rem !important;
    }
    .p-xxl-4 {
      padding: 1.5rem !important;
    }
    .p-xxl-5 {
      padding: 3rem !important;
    }
    .px-xxl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-xxl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-xxl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-xxl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-xxl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-xxl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-xxl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-xxl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-xxl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-xxl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-xxl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-xxl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-xxl-0 {
      padding-top: 0 !important;
    }
    .pt-xxl-1 {
      padding-top: 0.25rem !important;
    }
    .pt-xxl-2 {
      padding-top: 0.5rem !important;
    }
    .pt-xxl-3 {
      padding-top: 1rem !important;
    }
    .pt-xxl-4 {
      padding-top: 1.5rem !important;
    }
    .pt-xxl-5 {
      padding-top: 3rem !important;
    }
    .pe-xxl-0 {
      padding-right: 0 !important;
    }
    .pe-xxl-1 {
      padding-right: 0.25rem !important;
    }
    .pe-xxl-2 {
      padding-right: 0.5rem !important;
    }
    .pe-xxl-3 {
      padding-right: 1rem !important;
    }
    .pe-xxl-4 {
      padding-right: 1.5rem !important;
    }
    .pe-xxl-5 {
      padding-right: 3rem !important;
    }
    .pb-xxl-0 {
      padding-bottom: 0 !important;
    }
    .pb-xxl-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-xxl-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-xxl-3 {
      padding-bottom: 1rem !important;
    }
    .pb-xxl-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-xxl-5 {
      padding-bottom: 3rem !important;
    }
    .ps-xxl-0 {
      padding-left: 0 !important;
    }
    .ps-xxl-1 {
      padding-left: 0.25rem !important;
    }
    .ps-xxl-2 {
      padding-left: 0.5rem !important;
    }
    .ps-xxl-3 {
      padding-left: 1rem !important;
    }
    .ps-xxl-4 {
      padding-left: 1.5rem !important;
    }
    .ps-xxl-5 {
      padding-left: 3rem !important;
    }
    .gap-xxl-0 {
      gap: 0 !important;
    }
    .gap-xxl-1 {
      gap: 0.25rem !important;
    }
    .gap-xxl-2 {
      gap: 0.5rem !important;
    }
    .gap-xxl-3 {
      gap: 1rem !important;
    }
    .gap-xxl-4 {
      gap: 1.5rem !important;
    }
    .gap-xxl-5 {
      gap: 3rem !important;
    }
    .text-xxl-start {
      text-align: left !important;
    }
    .text-xxl-end {
      text-align: right !important;
    }
    .text-xxl-center {
      text-align: center !important;
    }
  }
  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 2.5rem !important;
    }
    .fs-2 {
      font-size: 2rem !important;
    }
    .fs-3 {
      font-size: 1.75rem !important;
    }
    .fs-4 {
      font-size: 1.5rem !important;
    }
  }
  @media print {
    .d-print-inline {
      display: inline !important;
    }
    .d-print-inline-block {
      display: inline-block !important;
    }
    .d-print-block {
      display: block !important;
    }
    .d-print-grid {
      display: grid !important;
    }
    .d-print-table {
      display: table !important;
    }
    .d-print-table-row {
      display: table-row !important;
    }
    .d-print-table-cell {
      display: table-cell !important;
    }
    .d-print-flex {
      display: flex !important;
    }
    .d-print-inline-flex {
      display: inline-flex !important;
    }
    .d-print-none {
      display: none !important;
    }
  }
  html,
  body {
    height: 100%;
  }
  
  #layoutAuthentication {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #layoutAuthentication #layoutAuthentication_content {
    min-width: 0;
    flex-grow: 1;
  }
  #layoutAuthentication #layoutAuthentication_footer {
    min-width: 0;
  }
  
  #layoutSidenav {
    display: flex;
  }
  #layoutSidenav #layoutSidenav_nav {
    flex-basis: 225px;
    flex-shrink: 0;
    transition: transform 0.15s ease-in-out;
    z-index: 1038;
    transform: translateX(-225px);
  }
  #layoutSidenav #layoutSidenav_content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    flex-grow: 1;
    min-height: calc(100vh - 56px);
    margin-left: -225px;
  }
  
  .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
    transform: translateX(0);
  }
  .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 1037;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
  
  @media (min-width: 992px) {
    #layoutSidenav #layoutSidenav_nav {
      transform: translateX(0);
    }
    #layoutSidenav #layoutSidenav_content {
      margin-left: 0;
      transition: margin 0.15s ease-in-out;
    }
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
      transform: translateX(-225px);
    }
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content {
      margin-left: -225px;
    }
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
      display: none;
    }
  }
  .sb_nav_fixed .sb-topnav {
    z-index: 1039;
  }
  .sb_nav_fixed #layoutSidenav #layoutSidenav_nav {
    width: 225px;
    height: 100vh;
    z-index: 1038;
  }
  .sb_nav_fixed #layoutSidenav #layoutSidenav_nav .sb-sidenav {
    padding-top: 56px;
  }
  .sb_nav_fixed #layoutSidenav #layoutSidenav_nav .sb-sidenav .sb_sidenav_menu {
    overflow-y: auto;
  }
  .sb_nav_fixed #layoutSidenav #layoutSidenav_content {
    padding-left: 225px;
    top: 56px;
  }
  
  #layoutError {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #layoutError #layoutError_content {
    min-width: 0;
    flex-grow: 1;
  }
  #layoutError #layoutError_footer {
    min-width: 0;
  }
  
  .img-error {
    max-width: 20rem;
  }
  
  .nav .nav-link .sb-nav-link-icon,
  .sb_sidenav_menu .nav-link .sb-nav-link-icon {
    margin-right: 0.5rem;
  }
  
  .sb-topnav {
    padding-left: 0;
    height: 56px;
    z-index: 1039;
  }
  .sb-topnav .navbar-brand {
    width: 225px;
    margin: 0;
  }
  .sb-topnav.navbar-dark #sidebarToggle {
    color: rgba(255, 255, 255, 0.5);
  }
  .sb-topnav.navbar-light #sidebarToggle {
    color: #212529;
  }
  
  .sb-sidenav {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-wrap: nowrap;
  }
  .sb-sidenav .sb_sidenav_menu {
    flex-grow: 1;
  }
  .sb-sidenav .sb_sidenav_menu .nav {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .sb-sidenav .sb_sidenav_menu .nav .sb_sidenav_menu-heading {
    padding: 1.75rem 1rem 0.75rem;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .sb-sidenav .sb_sidenav_menu .nav .nav-link {
    display: flex;
    align-items: center;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    position: relative;
  }
  .sb-sidenav .sb_sidenav_menu .nav .nav-link .sb-nav-link-icon {
    font-size: 0.9rem;
  }
  .sb-sidenav .sb_sidenav_menu .nav .nav-link .sb-sidenav-collapse-arrow {
    display: inline-block;
    margin-left: auto;
    transition: transform 0.15s ease;
  }
  .sb-sidenav .sb_sidenav_menu .nav .nav-link.collapsed .sb-sidenav-collapse-arrow {
    transform: rotate(-90deg);
  }
  .sb-sidenav .sb_sidenav_menu .nav .sb_sidenav_menu-nested {
    margin-left: 1.5rem;
    flex-direction: column;
  }
  .sb-sidenav .sb-sidenav-footer {
    padding: 0.75rem;
    flex-shrink: 0;
  }
  
  .sb-sidenav-dark {
    background-color: #212529;
    color: rgba(255, 255, 255, 0.5);
  }
  .sb-sidenav-dark .sb_sidenav_menu .sb_sidenav_menu-heading {
    color: rgba(255, 255, 255, 0.25);
  }
  .sb-sidenav-dark .sb_sidenav_menu .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  .sb-sidenav-dark .sb_sidenav_menu .nav-link .sb-nav-link-icon {
    color: rgba(255, 255, 255, 0.25);
  }
  .sb-sidenav-dark .sb_sidenav_menu .nav-link .sb-sidenav-collapse-arrow {
    color: rgba(255, 255, 255, 0.25);
  }
  .sb-sidenav-dark .sb_sidenav_menu .nav-link:hover {
    color: #fff;
  }
  .sb-sidenav-dark .sb_sidenav_menu .nav-link.active {
    color: #fff;
  }
  .sb-sidenav-dark .sb_sidenav_menu .nav-link.active .sb-nav-link-icon {
    color: #fff;
  }
  .sb-sidenav-dark .sb-sidenav-footer {
    background-color: #343a40;
  }
  
  .sb-sidenav-light {
    background-color: #f8f9fa;
    color: #212529;
  }
  .sb-sidenav-light .sb_sidenav_menu .sb_sidenav_menu-heading {
    color: #adb5bd;
  }
  .sb-sidenav-light .sb_sidenav_menu .nav-link {
    color: #212529;
  }
  .sb-sidenav-light .sb_sidenav_menu .nav-link .sb-nav-link-icon {
    color: #adb5bd;
  }
  .sb-sidenav-light .sb_sidenav_menu .nav-link .sb-sidenav-collapse-arrow {
    color: #adb5bd;
  }
  .sb-sidenav-light .sb_sidenav_menu .nav-link:hover {
    color: #0d6efd;
  }
  .sb-sidenav-light .sb_sidenav_menu .nav-link.active {
    color: #0d6efd;
  }
  .sb-sidenav-light .sb_sidenav_menu .nav-link.active .sb-nav-link-icon {
    color: #0d6efd;
  }
  .sb-sidenav-light .sb-sidenav-footer {
    background-color: #e9ecef;
  }
  
  .datatable-wrapper .datatable-container {
    font-size: 0.875rem;
  }
  
  .datatable-wrapper.no-header .datatable-container {
    border-top: none;
  }
  
  .datatable-wrapper.no-footer .datatable-container {
    border-bottom: none;
  }
  
  .datatable-top {
    padding: 0 0 1rem;
  }
  
  .datatable-bottom {
    padding: 0;
  }
  
  .datatable-top > nav:first-child,
  .datatable-top > div:first-child,
  .datatable-bottom > nav:first-child,
  .datatable-bottom > div:first-child {
    float: left;
  }
  
  .datatable-top > nav:last-child,
  .datatable-top > div:last-child,
  .datatable-bottom > nav:last-child,
  .datatable-bottom > div:last-child {
    float: right;
  }
  
  .datatable-selector {
    width: auto;
    display: inline-block;
    padding-left: 1.125rem;
    padding-right: 2.125rem;
    margin-right: 0.25rem;
  }
  
  .datatable-info {
    margin: 7px 0;
  }
  
  /* PAGER */
  .datatable-pagination a:hover {
    background-color: #e9ecef;
  }
  
  .datatable-pagination .active a,
  .datatable-pagination .active a:focus,
  .datatable-pagination .active a:hover {
    background-color: #0d6efd;
  }
  
  .datatable-pagination .ellipsis a,
  .datatable-pagination .disabled a,
  .datatable-pagination .disabled a:focus,
  .datatable-pagination .disabled a:hover {
    cursor: not-allowed;
  }
  
  .datatable-pagination .disabled a,
  .datatable-pagination .disabled a:focus,
  .datatable-pagination .disabled a:hover {
    cursor: not-allowed;
    opacity: 0.4;
  }
  
  .datatable-pagination .pager a {
    font-weight: bold;
  }
  
  /* TABLE */
  .datatable-table {
    border-collapse: collapse;
  }
  
  .datatable-table > tbody > tr > td,
  .datatable-table > tbody > tr > th,
  .datatable-table > tfoot > tr > td,
  .datatable-table > tfoot > tr > th,
  .datatable-table > thead > tr > td,
  .datatable-table > thead > tr > th {
    vertical-align: top;
    padding: 0.5rem 0.5rem;
  }
  
  .datatable-table > thead > tr > th {
    vertical-align: bottom;
    text-align: left;
    border-bottom: none;
  }
  
  .datatable-table > tfoot > tr > th {
    vertical-align: bottom;
    text-align: left;
  }
  
  .datatable-table th {
    vertical-align: bottom;
    text-align: left;
  }
  
  .datatable-table th a {
    text-decoration: none;
    color: inherit;
  }
  
  .datatable-sorter {
    display: inline-block;
    height: 100%;
    position: relative;
    width: 100%;
    padding-right: 1rem;
  }
  
  .datatable-sorter::before,
  .datatable-sorter::after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    right: 4px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    opacity: 0.2;
  }
  
  .datatable-sorter::before {
    bottom: 4px;
  }
  
  .datatable-sorter::after {
    top: 0px;
  }
  
  .asc .datatable-sorter::after,
  .desc .datatable-sorter::before {
    opacity: 0.6;
  }
  
  .datatables-empty {
    text-align: center;
  }
  
  .datatable-top::after,
  .datatable-bottom::after {
    clear: both;
    content: " ";
    display: table;
  }
  
  .datatable-pagination li.datatable-hidden {
    visibility: visible;
  }
  
  .btn-datatable {
    height: 20px !important;
    width: 20px !important;
    font-size: 0.75rem;
    border-radius: 0.375rem !important;
  }
  
`;

export default Admin_StyledHeader;
