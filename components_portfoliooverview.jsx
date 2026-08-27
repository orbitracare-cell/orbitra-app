'use client'

import { ArrowUp, ArrowDown, TrendingUp, Copy, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export function PortfolioOverview() {
  const [showBalance, setShowBalance] = useState(true)
  const totalValue = 125434.56
  const dayChange = 2543.20
  const dayChangePercent = 2.07

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Main Portfolio Card */}
      <div className="card md:col-span-2 lg:col-span-1">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">Portfolio Value</p>
              <div className="flex items-center gap-2 mt-2">
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-slate-400 hover:text-slate-200"
                >
                  {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
                <h2 className="text-4xl font-bold text-gradient">
                  {showBalance ? `$${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '••••••'}
                </h2>
              </div>
            </div>
            <div className="w-12 h-12 bg-orbitra-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-orbitra-400" size={24} />
            </div>
          </div>

          {/* Performance */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-emerald-400 font-semibold text-lg">
                +${dayChange.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUp size={16} />
              {dayChangePercent.toFixed(2)}% today
            </span>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="btn btn-primary">Buy</button>
            <button className="btn btn-secondary">Sell</button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-4">
        {[
          { label: 'All-Time Gain', value: '+$18,234.50', percent: '+16.8%', color: 'emerald' },
          { label: 'Current Balance', value: '$125,434.56', percent: '100%', color: 'orbitra' },
        ].map((stat, i) => (
          <div key={i} className="card">
            <p className="text-slate-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-100 mt-2">{stat.value}</p>
            <p className={`text-sm font-medium mt-2 ${stat.color === 'emerald' ? 'text-emerald-400' : 'text-orbitra-400'}`}>
              {stat.percent}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
