'use client'

import { Users, TrendingUp, AlertTriangle, Zap, DollarSign, Activity } from 'lucide-react'

const stats = [
  {
    label: 'Total Users',
    value: '12,543',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'blue',
  },
  {
    label: 'Active Trading',
    value: '3,421',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'green',
  },
  {
    label: 'Total Volume',
    value: '$2.4B',
    change: '+24.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'purple',
  },
  {
    label: 'System Status',
    value: '99.8%',
    change: '+0.2%',
    trend: 'up',
    icon: Zap,
    color: 'yellow',
  },
  {
    label: 'Active Sessions',
    value: '8,234',
    change: '+5.3%',
    trend: 'up',
    icon: Activity,
    color: 'cyan',
  },
  {
    label: 'Issues Reported',
    value: '23',
    change: '-15%',
    trend: 'down',
    icon: AlertTriangle,
    color: 'red',
  },
]

const colorClasses = {
  blue: 'from-blue-400 to-blue-600 text-blue-400',
  green: 'from-emerald-400 to-emerald-600 text-emerald-400',
  purple: 'from-purple-400 to-purple-600 text-purple-400',
  yellow: 'from-amber-400 to-amber-600 text-amber-400',
  cyan: 'from-cyan-400 to-cyan-600 text-cyan-400',
  red: 'from-red-400 to-red-600 text-red-400',
}

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div 
          key={stat.label}
          className="card group"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-50 mt-2">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity`}>
              <stat.icon size={24} />
            </div>
          </div>

          <div className={`flex items-center gap-1 text-sm font-semibold ${
            stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
          }`}>
            <span>{stat.change}</span>
            <span className="text-slate-400">vs last week</span>
          </div>
        </div>
      ))}
    </div>
  )
}
