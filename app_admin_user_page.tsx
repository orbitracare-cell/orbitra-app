'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { UserManagementTable } from '@/components/UserManagementTable'
import { UserFilters } from '@/components/UserFilters'

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-50">User Management</h1>
            <p className="text-slate-400 mt-2">Manage user accounts and permissions</p>
          </div>
          <button className="btn btn-primary">+ Add User</button>
        </div>

        {/* Filters */}
        <UserFilters />

        {/* Users Table */}
        <UserManagementTable />
      </div>
    </AdminLayout>
  )
}
