'use client'

import { UserPlus, LogIn, AlertCircle, TrendingUp, Trash2 } from 'lucide-react'
import Link from 'next/link'

const recentActivities = [
  {
    id: 1,
    type: 'signup',
    user: 'Sarah Johnson',
    email: 'sarah@example.com',
    action: 'Created new account',
    timestamp: '2 minutes ago',
    status: 'success',
    icon: UserPlus,
  },
  {
    id: 2,
    type: 'login',
    user: 'Mike Chen',
    email: 'mike@example.com',
    action: 'Logged in from new device',
    timestamp: '15 minutes ago',
    status: 'warning',
    icon: AlertCircle,
  },
  {
    id: 3,
    type: 'trade',
    user: 'Emma Wilson',
    email: 'emma@example.com',
    action: 'Executed large trade: 5 BTC',
    timestamp: '32 minutes ago',
    status: 'success',
    icon: TrendingUp,
  },
  {
    id: 4,
    type: 'login',
    user: 'John Smith',
    email: 'john@example.com',
    action: 'Logged in successfully',
    timestamp: '1 hour ago',
    status: 'success',
    icon: LogIn,
  },
  {
    id: 5,
    type: 'suspicious',
    user: 'Unknown User',
    email: 'suspicious@example.com',
    action: 'Failed login attempts (5x)',
    timestamp: '1 hour ago',
    status: 'danger',
    icon: AlertCircle,
  },
]

export function RecentUserActivity() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-50">Recent User Activity</h2>
          <p className="text-slate-400 mt-1">Real-time activity monitoring</p>
        </div>
        <Link href="/admin/users" className="text-orbitra-400 hover:text-orbitra-300 text-sm font-medium">
          View All →
        </Link>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Action</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">User</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Details</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Time</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity) => (
              <tr 
                key={activity.id} 
                className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.status === 'success' ? 'bg-emerald-500/20' :
                    activity.status === 'warning' ? 'bg-amber-500/20' :
                    'bg-red-500/20'
                  }`}>
                    <activity.icon 
                      size={20} 
                      className={
                        activity.status === 'success' ? 'text-emerald-400' :
                        activity.status === 'warning' ? 'text-amber-400' :
                        'text-red-400'
                      } 
                    />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-100">{activity.user}</p>
                    <p className="text-xs text-slate-400">{activity.email}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-slate-300">{activity.action}</p>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    activity.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                    activity.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {activity.status === 'success' ? 'Success' :
                     activity.status === 'warning' ? 'Warning' :
                     'Flagged'}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-400 text-sm">{activity.timestamp}</td>
                <td className="px-4 py-4">
                  <button className="text-slate-400 hover:text-slate-200 transition-colors">
                    {activity.status === 'danger' ? (
                      <Trash2 size={16} className="text-red-500" />
                    ) : (
                      '...'
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-3">
        {recentActivities.map((activity) => (
          <div 
            key={activity.id}
            className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors border-l-4"
            style={{
              borderColor: 
                activity.status === 'success' ? '#10b981' :
                activity.status === 'warning' ? '#f59e0b' :
                '#ef4444'
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-slate-100">{activity.user}</p>
                <p className="text-xs text-slate-400">{activity.email}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                activity.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                activity.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {activity.status === 'success' ? 'Success' :
                 activity.status === 'warning' ? 'Warning' :
                 'Flagged'}
              </span>
            </div>
            <p className="text-sm text-slate-300 mb-2">{activity.action}</p>
            <p className="text-xs text-slate-500">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
