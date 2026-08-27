'use client'

import { useState } from 'react'
import { Bell, Search, User, Settings, LogOut } from 'lucide-react'

export function Navigation() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

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
                placeholder="Search assets, transactions..."
                className="input pl-10"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-all"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-4 space-y-3">
                  <h3 className="font-semibold text-slate-100">Notifications</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {[
                      { title: 'Price Alert', desc: 'Bitcoin reached $45,000', time: '5 min ago' },
                      { title: 'Portfolio Update', desc: 'Your portfolio is up 12.5%', time: '1 hour ago' },
                      { title: 'Trade Executed', desc: 'Your limit order was filled', time: '2 hours ago' },
                    ].map((notif, i) => (
                      <div key={i} className="p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                        <p className="font-medium text-sm text-slate-100">{notif.title}</p>
                        <p className="text-xs text-slate-400 mt-1">{notif.desc}</p>
                        <p className="text-xs text-slate-500 mt-2">{notif.time}</p>
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
                <div className="w-8 h-8 bg-gradient-to-br from-orbitra-400 to-orbitra-600 rounded-full" />
                <span className="hidden sm:block text-sm font-medium text-slate-200">John Doe</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-slate-700">
                    <p className="font-medium text-slate-100">John Doe</p>
                    <p className="text-xs text-slate-400">john@example.com</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                      <User size={16} />
                      Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors">
                      <Settings size={16} />
                      Settings
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
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
