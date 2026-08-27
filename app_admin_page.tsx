'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { AdminStats } from '@/components/AdminStats'
import { UserActivityChart } from '@/components/UserActivityChart'
import { SystemHealth } from '@/components/SystemHealth'
import { RecentUserActivity } from '@/components/RecentUserActivity'

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-50">Admin Dashboard</h1>
          <p className="text-slate-400 mt-2">System overview and management controls</p>
        </div>

        {/* Stats Grid */}
        <AdminStats />

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserActivityChart />
          <SystemHealth />
        </div>

        {/* Recent Activity */}
        <RecentUserActivity />
      </div>
    </AdminLayout>
  )
}
