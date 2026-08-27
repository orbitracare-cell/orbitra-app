# Orbitra Admin System Documentation

## Overview

The Orbitra Admin System provides comprehensive management tools for administrators and moderators to oversee the platform, manage users, monitor system health, and control assets.

## Role-Based Access Control (RBAC)

### User Roles

#### 1. **Admin** (Full Access)
- View dashboard and analytics
- Manage all users (create, edit, delete, suspend)
- Manage assets and listings
- View all transactions
- Manage system settings
- Manage other admins
- Access security logs

**Permissions:**
```
- view_dashboard
- manage_users
- manage_assets
- view_transactions
- manage_system
- view_analytics
- manage_admins
```

#### 2. **Moderator** (Limited Access)
- View dashboard
- View user profiles (read-only)
- View assets and transactions
- Monitor content
- View analytics reports
- Cannot manage users or system settings

**Permissions:**
```
- view_dashboard
- view_users
- view_assets
- view_transactions
- view_analytics
- moderate_content
```

#### 3. **User** (Minimal Access)
- Access personal dashboard
- View own portfolio
- Execute trades
- Cannot access admin features

**Permissions:**
```
- view_dashboard
- view_portfolio
- trade_assets
```

## Authentication & Authorization

### Current Implementation

The auth system uses Zustand for state management (`lib/auth.ts`):

```typescript
import { useAuthStore } from '@/lib/auth'

// Check if user is admin
const { isAdmin } = useAuthStore()
if (!isAdmin()) {
  router.push('/')
}

// Check specific permission
const { hasPermission } = useAuthStore()
if (hasPermission('manage_users')) {
  // Show user management
}

// Get current user
const { user } = useAuthStore()
console.log(user.role) // 'admin' | 'moderator' | 'user'
```

### Testing Roles

To test different roles, modify the `mockAdmin` in `lib/auth.ts`:

```typescript
// Test as Admin
const mockAdmin: User = {
  id: 'admin-001',
  name: 'John Admin',
  email: 'admin@orbitra.com',
  role: 'admin', // Change this
  isActive: true,
  createdAt: '2024-01-01',
}

// Test as Moderator
const mockModerator: User = {
  id: 'mod-001',
  name: 'Jane Moderator',
  email: 'mod@orbitra.com',
  role: 'moderator',
  isActive: true,
  createdAt: '2024-01-01',
}
```

## Admin Pages

### 1. **Admin Dashboard** (`/admin`)
- System overview with key metrics
- User activity charts
- System health monitoring
- Recent user activity feed
- Quick access to management tools

**Components:**
- AdminStats - KPI cards
- UserActivityChart - User activity graph
- SystemHealth - System status monitoring
- RecentUserActivity - Activity log

### 2. **User Management** (`/admin/users`)
- List all users with filters
- Search by name, email, or ID
- Filter by status, role, join date
- Bulk actions (suspend, delete)
- View user details
- Change user roles

**Features:**
- Multi-select users
- Context menu actions
- Role assignment
- Account suspension
- Activity history

### 3. **Asset Management** (`/admin/assets`)
- Manage tradeable assets
- Add/remove coins and stocks
- Configure asset parameters
- Monitor asset performance

### 4. **Transaction Monitoring** (`/admin/transactions`)
- View all user transactions
- Filter by type, status, date
- Detect suspicious activity
- Audit trail

### 5. **Analytics** (`/admin/analytics`)
- User growth charts
- Trading volume trends
- Revenue metrics
- User retention data

### 6. **Reports** (`/admin/reports`)
- Generate system reports
- Export data
- Scheduled reports
- Compliance reports

### 7. **Security** (`/admin/security`)
- Monitor failed logins
- View security logs
- Manage IP whitelists
- Two-factor authentication settings

### 8. **Settings** (`/admin/settings`)
- System configuration
- Email templates
- Platform policies
- Integration settings

## Protected Routes

### AdminLayout Component

The `AdminLayout` component wraps admin pages and enforces access control:

```typescript
'use client'

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAdmin()) {
      router.push('/') // Redirect non-admins
    }
  }, [isAdmin, router])

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavigation />
        <main>{children}</main>
      </div>
    </div>
  )
}
```

### Usage in Admin Pages

```typescript
// app/admin/users/page.tsx
'use client'

import { AdminLayout } from '@/components/AdminLayout'

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      {/* Page content - only accessible to admins */}
    </AdminLayout>
  )
}
```

## File Structure

```
orbitra/
├── app/
│   ├── admin/
│   │   ├── page.tsx              # Dashboard
│   │   ├── users/
│   │   │   └── page.tsx          # User management
│   │   ├── assets/
│   │   │   └── page.tsx          # Asset management
│   │   ├── transactions/
│   │   │   └── page.tsx          # Transaction monitoring
│   │   ├── analytics/
│   │   │   └── page.tsx          # Analytics dashboard
│   │   ├── reports/
│   │   │   └── page.tsx          # Reports
│   │   ├── security/
│   │   │   └── page.tsx          # Security settings
│   │   └── settings/
│   │       └── page.tsx          # System settings
├── components/
│   ├── AdminLayout.tsx           # Layout wrapper
│   ├── AdminSidebar.tsx          # Navigation sidebar
│   ├── AdminNavigation.tsx       # Top bar
│   ├── AdminStats.tsx            # Dashboard stats
│   ├── UserActivityChart.tsx     # Activity chart
│   ├── SystemHealth.tsx          # Health monitoring
│   ├── RecentUserActivity.tsx    # Activity log
│   ├── UserFilters.tsx           # Filter UI
│   └── UserManagementTable.tsx   # Users table
├── lib/
│   └── auth.ts                   # Auth store (Zustand)
```

## Database Schema (Future Implementation)

### Users Table
```sql
CREATE TABLE users (
  id STRING PRIMARY KEY,
  name STRING NOT NULL,
  email STRING UNIQUE NOT NULL,
  password_hash STRING,
  role ENUM('admin', 'moderator', 'user'),
  status ENUM('active', 'inactive', 'suspended'),
  avatar_url STRING,
  created_at TIMESTAMP,
  last_login TIMESTAMP,
  is_active BOOLEAN
);
```

### Admin Logs Table
```sql
CREATE TABLE admin_logs (
  id STRING PRIMARY KEY,
  admin_id STRING REFERENCES users(id),
  action STRING,
  target_user_id STRING,
  details JSON,
  created_at TIMESTAMP,
  ip_address STRING
);
```

## Security Best Practices

### 1. **Frontend Validation**
```typescript
// Always check role before showing admin UI
const { isAdmin } = useAuthStore()

if (!isAdmin()) {
  return <AccessDenied />
}
```

### 2. **Backend Validation** (When connecting to backend)
```typescript
// Every API call should verify user role on server
app.get('/api/admin/users', (req, res) => {
  // Verify JWT token
  // Check user role
  // If not admin, return 403
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' })
  }
  
  // Process request
})
```

### 3. **Audit Logging**
- Log all admin actions
- Track who changed what and when
- Store change history
- Monitor suspicious activities

### 4. **Rate Limiting**
- Limit failed login attempts
- Rate limit admin API calls
- Prevent brute force attacks

## Implementation Steps

### Step 1: Set Up Authentication
1. Replace mock user with real auth (Firebase, NextAuth, Supabase)
2. Generate JWT tokens
3. Store tokens securely (HTTP-only cookies)

### Step 2: Connect Backend
1. Create API routes for admin endpoints
2. Add role verification middleware
3. Implement database queries

### Step 3: Create Admin Pages
1. Fill in stub pages (assets, transactions, etc.)
2. Connect to API endpoints
3. Add real data loading

### Step 4: Add Monitoring
1. Set up logging
2. Create alerts for suspicious activity
3. Build audit trail

## API Routes (To Implement)

```typescript
// Get all users
GET /api/admin/users
GET /api/admin/users/:id
POST /api/admin/users
PUT /api/admin/users/:id
DELETE /api/admin/users/:id

// Asset management
GET /api/admin/assets
POST /api/admin/assets
PUT /api/admin/assets/:id
DELETE /api/admin/assets/:id

// Transaction monitoring
GET /api/admin/transactions
GET /api/admin/transactions/:id

// Analytics
GET /api/admin/analytics/users
GET /api/admin/analytics/trades
GET /api/admin/analytics/revenue

// Security
GET /api/admin/security/logs
POST /api/admin/security/alerts
GET /api/admin/security/ip-whitelist
```

## Styling

Admin panel uses red accent colors (`text-red-400`, `bg-red-500/20`) to distinguish from user dashboard which uses blue (`text-orbitra-400`).

### Admin Color Scheme
- Primary: Red (`#ef4444`)
- Background: Dark slate (`#0f172a`)
- Cards: Darker slate (`#1e293b`)
- Text: Light slate (`#f1f5f9`)

## Testing Admin Features

### Test Scenarios

1. **Admin Accessing Dashboard**
   - Set role to 'admin'
   - Navigate to /admin
   - Should see all features

2. **Moderator Accessing Dashboard**
   - Set role to 'moderator'
   - Navigate to /admin
   - Should see view-only features

3. **User Accessing Admin**
   - Set role to 'user'
   - Navigate to /admin
   - Should redirect to home page

4. **Managing Users**
   - Create test user
   - Update user role
   - Suspend user
   - Verify changes reflected in table

## Troubleshooting

### Access Denied Error
- Check user role in auth store
- Verify user has required permission
- Check browser console for errors

### Admin Features Not Loading
- Verify AdminLayout is wrapping page
- Check internet console for API errors
- Ensure components are imported correctly

### Role Changes Not Reflected
- Check if user store is updating
- Verify role change in database
- Clear browser cache

## Future Enhancements

- [ ] Two-factor authentication for admins
- [ ] Advanced permission system with granular controls
- [ ] API key management for integrations
- [ ] Webhook configurations
- [ ] Advanced reporting and analytics
- [ ] Automated alert system
- [ ] User impersonation (for support)
- [ ] Bulk import/export tools

---

**Last Updated:** January 2024
**Version:** 1.0
