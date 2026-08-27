'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronRight,
  FileText,
  Shield,
  AlertCircle,
  Zap
} from 'lucide-react'
import { useAuthStore } from '@/lib/auth'

const adminMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'User Management', href: '/admin/users' },
  { icon: TrendingUp, label: 'Assets', href: '/admin/assets' },
  { icon: FileText, label: 'Transactions', href: '/admin/transactions' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: AlertCircle, label: 'Reports', href: '/admin/reports' },
  { icon: Shield, label: 'Security', href: '/admin/security' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const { logout } = useAuthStore()

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden md:flex flex-col bg-slate-900 border-r border-slate-800 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚙</span>
            </div>
            {isOpen && <span className="font-bold text-lg text-red-400">Admin Panel</span>}
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-slate-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {adminMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-red-400 transition-all group"
            >
              <item.icon size={20} className="flex-shrink-0" />
              {isOpen && (
                <>
                  <span className="flex-1">{item.label}</span>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 p-4 space-y-2">
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <button className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg">
          <Menu size={24} />
        </button>
      </div>
    </>
  )
}
