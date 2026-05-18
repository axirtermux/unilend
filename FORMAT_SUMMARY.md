# UniLend Portal - HTML Format Standardization Summary

## Overview
All HTML files in the UniLend Portal are **standardized** to follow the `indexx.html` format and structure. This document provides a comprehensive inventory of the current state.

---

## ✅ Format Compliance Checklist

### Required Components in ALL Pages:

1. **Sidebar Navigation**
   - Logo area with UC icon
   - User area with avatar
   - Search menu input
   - Navigation items using `<a>` tags with href links
   - Navigation organized by sections (Main, Reports, Setup)
   - Active nav item marked with `class="ni active"`

2. **Top Bar**
   - Page title
   - Branch selector with notification for coming soon
   - Notification bell with pending badge
   - Search button
   - Settings button
   - Logout button

3. **Page Header (`<div class="ph">`)**
   - Page title
   - Page subtitle/status (Loading... or record count)
   - Right section with action buttons (Export, Create, etc.)

4. **Filter/Search Bar (`<div class="fbar">`)**
   - Filter tabs (`<div class="ftabs">`) - varies by page
   - Search input with placeholder text

5. **Data Table Structure**
   - `<table class="dt">` with thead and tbody
   - Sortable columns with `onclick="sortT(tablename, index)"`
   - Pagination `<div class="pgn">` with:
     - Page info display
     - Page navigation buttons
     - Page size selector

6. **Modal Dialogs**
   - Outer wrapper: `<div class="overlay" id="m-{name}">`
   - Modal container: `<div class="modal {size}">` (sm, lg, xl)
   - Header: `<div class="mhd">` with icon, title, subtitle, close button
   - Body: `<div class="mbody">` with form sections
   - Footer: `<div class="mft">` with Cancel and Save buttons

7. **Form Sections (`<div class="msec">`)**
   - Section title
   - Form groups with label and input
   - Layout using `<div class="fr">` (1-column) or `<div class="fr3">` (3-column)
   - Required field indicators with `<span class="req">*</span>`
   - Error messages with `<div class="errmsg">`

8. **Utility UI Components**
   - Toast wrapper: `<div class="toast-wrap" id="toast-wrap"></div>`
   - Confirm dialog: `<div class="overlay" id="m-confirm">`

9. **JavaScript Initialization**
   - DOMContentLoaded event listener
   - Date inputs defaulting to today()
   - Table rendering with renderT()
   - Badge updates (e.g., updatePendingBadge())

---

## 📋 HTML Files Status

### Main/Transaction Pages (7 files)
| File | Status | Page Type | Modal | Features |
|------|--------|-----------|-------|----------|
| **index.html** | ✅ COMPLIANT | Dashboard | N/A | Stats grid, charts, activity feed |
| **account.html** | ✅ COMPLIANT | Account List | m-account | Customer info creation/edit |
| **loanproc.html** | ✅ COMPLIANT | Loan List | m-loan | Loan processing with calculations |
| **loanapproval.html** | ✅ COMPLIANT | Approval List | m-process-loan | Loan approval workflow |
| **vouchers.html** | ✅ COMPLIANT | Voucher List | m-voucher | Voucher creation/edit |
| **collections.html** | ✅ COMPLIANT | Collection List | m-collection | Collection recording |
| **changefunds.html** | ✅ COMPLIANT | Change Fund List | m-changefund | Change fund tracking |

### Report Pages (6 files)
| File | Status | Report Type |
|------|--------|-------------|
| **rep_cf.html** | ✅ COMPLIANT | Change Fund Register |
| **rep_check.html** | ✅ COMPLIANT | Check Register |
| **rep_target.html** | ✅ COMPLIANT | Target Collection & CF |
| **rep_col.html** | ✅ COMPLIANT | Collection Sheet |
| **rep_trans.html** | ✅ COMPLIANT | Transaction Report |
| **rep_udi.html** | ✅ COMPLIANT | UDI Report |

### Setup/Configuration Pages (6 files)
| File | Status | Setup Type | Modal |
|------|--------|-----------|-------|
| **banks.html** | ✅ COMPLIANT | Bank Management | m-bank |
| **bankaccounts.html** | ✅ COMPLIANT | Bank Account Management | m-bankaccount |
| **products.html** | ✅ COMPLIANT | Product Management | m-product |
| **agents.html** | ✅ COMPLIANT | Agent Management | m-agent |
| **addresses.html** | ✅ COMPLIANT | Address Management | m-address |
| **lookups.html** | ✅ COMPLIANT | Lookup Management | m-lookup |

---

## 📐 Key Features Implemented Across All Pages

### Sidebar Features
- ✅ Search menu functionality
- ✅ Active state indicators
- ✅ Badges for pending items (e.g., "28k", "34")
- ✅ Section grouping (Main, Reports, Setup)
- ✅ Navigation search with `searchNav()`

### Data Table Features
- ✅ Sortable columns
- ✅ Search/filter functionality
- ✅ Status-based filtering
- ✅ Pagination with page info
- ✅ Page size selection
- ✅ Row actions (Edit, View, Delete, Print)

### Modal Features
- ✅ Icon with colored background
- ✅ Title and subtitle
- ✅ Close button (✕)
- ✅ Form validation with error messages
- ✅ Required field indicators
- ✅ Save/Cancel buttons
- ✅ Proper styling (small, large, extra-large sizes)

### Form Features
- ✅ Structured form groups
- ✅ Date inputs with default to today()
- ✅ Number inputs with step values
- ✅ Dropdown/select inputs
- ✅ Textarea fields
- ✅ Read-only fields (readonly class)
- ✅ Text validation
- ✅ Error message display

### User Feedback
- ✅ Toast notifications (success, error, warning)
- ✅ Confirmation dialogs for destructive actions
- ✅ Loading states
- ✅ Status badges
- ✅ Notification dot on bell icon

---

## 🎨 CSS Classes Used Across All Files

### Layout & Structure
- `.sidebar`, `.topbar`, `.main` - Page structure
- `.page`, `.active` - Page management
- `.nav-body`, `.nav-lbl`, `.ni`, `.ni-ico` - Navigation items
- `.ni-badge` - Badge indicators

### Page Components
- `.ph`, `.ph-title`, `.ph-sub`, `.ph-right` - Page header
- `.fbar`, `.ftabs`, `.ftab` - Filter bar
- `.srch` - Search input wrapper
- `.tw` - Table wrapper
- `.dt` - Data table styling
- `.pgn`, `.pgn-info`, `.pgn-btns`, `.pgn-size` - Pagination

### Modal Components
- `.overlay`, `.modal` - Modal structure
- `.modal.sm`, `.modal.lg`, `.modal.xl` - Modal sizes
- `.mhd`, `.mhd-left`, `.mhd-icon`, `.mhd-title`, `.mhd-sub`, `.mc` - Modal header
- `.mbody` - Modal body
- `.mft` - Modal footer
- `.msec`, `.msec-title` - Form sections
- `.fr`, `.fr3` - Form rows
- `.fg` - Form group

### Buttons & Controls
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger` - Button styles
- `.btn-sm`, `.btn-xs` - Button sizes
- `.readonly` - Read-only styling
- `.req` - Required field indicator
- `.errmsg` - Error message

### Status & Colors
- `teal`, `gold`, `green`, `red` - Stat card colors
- `.active` - Active state
- Status values: `Active`, `Archived`, `Pending`, `Approved`, `Denied`, etc.

---

## 🔧 JavaScript Functions (All Pages Include access to `app.js`)

### Core Utilities
- `today()` - Get today's date
- `now()` - Get current datetime
- `gv(id)` - Get input value
- `sv(id, value)` - Set input value
- `fmtD(date)` - Format date
- `fmt(number)` - Format number

### UI Functions
- `openM(id)` - Open modal
- `closeM(id)` - Close modal
- `toast(msg, type)` - Show toast notification
- `confirmDlg(title, msg, callback)` - Confirmation dialog
- `searchNav(value)` - Search navigation menu

### Table Functions
- `renderT(table)` - Render table
- `search(table, value)` - Filter table
- `sortT(table, column)` - Sort table
- `fStatus(table, status)` - Filter by status
- `chgPS(table, pageSize)` - Change page size
- `editRow(table, index)` - Edit row
- `delRow(table, index)` - Delete row
- `printRow(table, index)` - Print row

### Save Functions (Per Page)
- `saveAccount()` - Account creation/update
- `saveLoan()` - Loan creation/update
- `saveVoucher()` - Voucher creation/update
- `saveCollection()` - Collection recording
- `saveChangeFund()` - Change fund creation
- `saveBank()` - Bank creation/update
- `saveBankAccount()` - Bank account creation
- `saveProduct()` - Product creation/update
- `saveAgent()` - Agent creation/update
- `saveAddress()` - Address creation/update
- `saveLookup()` - Lookup creation/update

### Calculation Functions
- `calcLoan()` - Loan amount calculations
- `calcVoucher()` - Voucher tax calculations
- `calcCollection()` - Collection calculations

---

## 🔐 Data Structure (From `app.js`)

### Database Object (DB)
```javascript
DB = {
  accounts: [...],      // Customer/Pensioner records
  loans: [...],         // Loan processing records
  approvals: [...],     // Loan approval queue
  vouchers: [...],      // Voucher records
  collections: [...],   // Collection records
  changefunds: [...],   // Change fund records
  banks: [...],         // Bank master data
  bankaccounts: [...],  // Bank account details
  products: [...],      // Loan product catalog
  agents: [...],        // Agent master data
  addresses: [...],     // Address master data
  lookups: [...]        // Lookup table entries
}
```

---

## ✨ Consistency Standards Across All Files

All HTML files in the UniLend Portal adhere to the following standards:

1. **HTML Structure**: Semantic HTML5 with proper DOCTYPE
2. **Meta Tags**: Charset, viewport, title declarations
3. **Font Loading**: Google Fonts (DM Sans + Syne)
4. **CSS**: Single stylesheet reference (style.css)
5. **Navigation**: Consistent sidebar with all menu items
6. **Topbar**: Identical across all pages with page-specific title
7. **Main Content**: Wrapped in `<main class="main">` with `<div class="page active">`
8. **Modals**: Consistent structure and styling
9. **Scripts**: All pages include `<script src="app.js"></script>`
10. **Data Binding**: JavaScript references with consistent ID naming

---

## 🚀 Ready for Development

**Status: ✅ ALL FILES STANDARDIZED**

The UniLend Portal is fully standardized and ready for:
- Data binding implementation
- Backend API integration
- Business logic development
- Feature expansion
- Testing and deployment

---

## 📝 Notes for Future Maintenance

- When adding new pages, use any existing page as a template
- Maintain the sidebar navigation structure
- Follow the modal size conventions (sm/lg/xl)
- Use consistent button classes and styling
- Keep form field naming conventions (e.g., `ai-` for account info, `ln-` for loan)
- Reference `indexx.html` and `app.js` as the source of truth for features and functions

---

**Last Updated**: 2026-05-17  
**Portal Version**: 3.7.10  
**Status**: STANDARDIZED ✅
