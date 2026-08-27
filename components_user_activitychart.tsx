'use client'

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const activityData = [
  { day: 'Mon', newUsers: 240, activeUsers: 2400, trades: 1240 },
  { day: 'Tue', newUsers: 340, activeUsers: 2210, trades: 1221 },
  { day: 'Wed', newUsers: 200, activeUsers: 2290, trades: 1229 },
  { day: 'Thu', newUsers: 500, activeUsers: 2000, trades: 1200 },
  { day: 'Fri', newUsers: 430, activeUsers: 2181, trades: 1250 },
  { day: 'Sat', newUsers: 620, activeUsers: 2500, trades: 1340 },
  { day: 'Sun', newUsers: 320, activeUsers: 2100, trades: 1380 },
]

export function UserActivityChart() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-slate-50 mb-6">User Activity</h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="day" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Legend />
            <Bar dataKey="newUsers" fill="#0ea5e9" name="New Users" />
            <Bar dataKey="trades" fill="#10b981" name="Trades" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
        <div>
          <p className="text-sm text-slate-400">Avg Daily Users</p>
          <p className="text-2xl font-bold text-slate-100">2,268</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">Avg Daily Trades</p>
          <p className="text-2xl font-bold text-slate-100">1,266</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">New This Week</p>
          <p className="text-2xl font-bold text-slate-100">2,650</p>
        </div>
      </div>
    </div>
  )
}
