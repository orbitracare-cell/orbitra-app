'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const allocationData = [
  { name: 'Bitcoin', value: 45, color: '#f7931a' },
  { name: 'Ethereum', value: 30, color: '#627eea' },
  { name: 'Stablecoins', value: 18, color: '#26a17b' },
  { name: 'Others', value: 7, color: '#0ea5e9' },
]

const COLORS = allocationData.map(item => item.color)

export function AssetAllocation() {
  return (
    <div className="space-y-6">
      {/* Allocation Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold text-slate-50 mb-6">Portfolio Allocation</h3>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${value}%`}
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#e2e8f0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-700">
          {allocationData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <div className="flex-1">
                <p className="text-xs text-slate-400">{item.name}</p>
                <p className="text-sm font-semibold text-slate-100">{item.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Profile */}
      <div className="card">
        <h3 className="text-lg font-semibold text-slate-50 mb-4">Risk Profile</h3>
        
        <div className="space-y-4">
          {[
            { label: 'Volatility', value: 65, color: 'from-amber-400 to-red-500' },
            { label: 'Diversification', value: 72, color: 'from-emerald-400 to-orbitra-500' },
            { label: 'Stability', value: 45, color: 'from-orbitra-400 to-blue-500' },
          ].map((metric) => (
            <div key={metric.label}>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">{metric.label}</label>
                <span className="text-sm font-semibold text-slate-100">{metric.value}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
