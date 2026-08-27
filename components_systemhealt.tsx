'use client'

import { Server, Database, Wifi, Cpu, HardDrive, AlertCircle, CheckCircle } from 'lucide-react'

const systemMetrics = [
  {
    name: 'API Server',
    status: 'healthy',
    uptime: '99.99%',
    latency: '45ms',
    icon: Server,
  },
  {
    name: 'Database',
    status: 'healthy',
    uptime: '99.98%',
    latency: '23ms',
    icon: Database,
  },
  {
    name: 'Network',
    status: 'healthy',
    uptime: '99.95%',
    latency: '12ms',
    icon: Wifi,
  },
  {
    name: 'CPU Usage',
    status: 'warning',
    uptime: '62%',
    latency: 'Normal',
    icon: Cpu,
  },
  {
    name: 'Storage',
    status: 'healthy',
    uptime: '78%',
    latency: 'Optimal',
    icon: HardDrive,
  },
]

export function SystemHealth() {
  const healthyCount = systemMetrics.filter(m => m.status === 'healthy').length
  
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-50">System Health</h3>
        <div className="text-sm font-medium text-emerald-400">
          {healthyCount}/{systemMetrics.length} Systems Healthy
        </div>
      </div>

      {/* Overall Health Bar */}
      <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-300">Overall Status</span>
          <span className="text-xl font-bold text-emerald-400">98.7%</span>
        </div>
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 w-[98.7%] rounded-full" />
        </div>
      </div>

      {/* System Metrics */}
      <div className="space-y-3">
        {systemMetrics.map((metric) => (
          <div 
            key={metric.name}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              metric.status === 'healthy'
                ? 'bg-slate-800/50 hover:bg-slate-800'
                : 'bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30'
            }`}
          >
            <div className="flex items-center gap-3 flex-1">
              <metric.icon 
                size={18} 
                className={metric.status === 'healthy' ? 'text-slate-400' : 'text-amber-400'}
              />
              <div>
                <p className="text-sm font-medium text-slate-100">{metric.name}</p>
                <p className="text-xs text-slate-500">{metric.latency}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-200">{metric.uptime}</span>
              {metric.status === 'healthy' ? (
                <CheckCircle size={16} className="text-emerald-400" />
              ) : (
                <AlertCircle size={16} className="text-amber-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
