'use client'

import { useState } from 'react'
import { Bell, Search, User, Settings, LogOut, AlertCircle } from 'lucide-react'
import { useAuthStore } from '@/lib/auth'

export function AdminNavigation() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { user, logout } = useAuthStore()

  const adminAlerts = [
    { title: 'High Volume Alert', desc: 'Unusual trading volume detected', severity: 'warning', time: '5 min ago' },
    { title: 'Failed Login Attempt', desc: '10 failed login attempts from IP 192.168.x.x', severity: 'danger', time: '15 min ago' },
    { title: 'System Update', desc: 'Database backup completed successfully', severity: 'success', time: '1 hour ago' },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Search */}
          <div className="flex-1 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search users, assets, transactions..."
                className="input pl-10"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Alerts */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-all"
              >
                <AlertCircle size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-4 space-y-3">
                  <h3 className="font-semibold text-slate-100 flex items-center gap-2">
                    <AlertCircle size={18} className="text-red-400" />
                    Admin Alerts
                  </h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {adminAlerts.map((alert, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors border-l-4 ${
                          alert.severity === 'danger' ? 'border-red-500 bg-red-500/5' :
                          alert.severity === 'warning' ? 'border-amber-500 bg-amber-500/5' :
                          'border-emerald-500 bg-emerald-500/5'
                        }`}
                      >
                        <p className="font-medium text-sm text-slate-100">{alert.title}</p>
                        <p className="text-xs text-slate-400 mt-1">{alert.desc}</p>
                        <p className="text-xs text-slate-500 mt-2">{alert.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user?.name.charAt(0)}
                </div>
                <span className="hidden sm:block text-sm font-medium text-slate-200">{user?.name}</span>
                <span className="hidden sm:block text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400 font-medium">
                  {user?.role.toUpperCase()}
                </span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-slate-700 bg-slate-800/50">
                    <p className="font-medium text-slate-100">{user?.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{user?.email}</p>
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                        {user?.role === 'admin' ? 'Administrator' : 'Moderator'}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                      <User size={16} />
                      Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                      <Settings size={16} />
                      Admin Settings
                    </button>
                    <button 
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
