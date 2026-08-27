'use client'

import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const marketData = [
  { time: '00:00', value: 42000 },
  { time: '06:00', value: 43500 },
  { time: '12:00', value: 41200 },
  { time: '18:00', value: 44100 },
  { time: '24:00', value: 40789 },
]

const trendingAssets = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 40789.50,
    change: 8.5,
    volume: '$28.3B',
    icon: '₿',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 1765.50,
    change: 12.3,
    volume: '$12.1B',
    icon: 'Ξ',
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    price: 2.45,
    change: -5.2,
    volume: '$4.2B',
    icon: 'X',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: 1.08,
    change: 3.7,
    volume: '$1.8B',
    icon: 'Ⓒ',
  },
]

export function MarketOverview() {
  return (
    <div className="space-y-6">
      {/* Market Chart */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-50">Market Overview</h3>
            <p className="text-sm text-slate-400 mt-1">Bitcoin 24h price movement</p>
          </div>
          <div className="flex gap-2">
            {['1H', '24H', '1W', '1M', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  period === '24H'
                    ? 'bg-orbitra-600 text-white'
                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={marketData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Price']}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#0ea5e9" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trending Assets */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-orbitra-400" size={20} />
            <h3 className="text-lg font-semibold text-slate-50">Trending Now</h3>
          </div>
          <a href="#" className="text-orbitra-400 hover:text-orbitra-300 text-sm font-medium">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingAssets.map((asset) => (
            <button
              key={asset.symbol}
              className="p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all group text-left"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-orbitra-500/20 rounded-lg flex items-center justify-center text-lg font-bold text-orbitra-400">
                  {asset.icon}
                </div>
                <div className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                  asset.change >= 0
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {asset.change >= 0 ? '+' : ''}{asset.change}%
                </div>
              </div>
              <p className="font-semibold text-slate-100 text-sm">{asset.symbol}</p>
              <p className="text-xs text-slate-400 mb-3">{asset.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-100">
                  ${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Vol: {asset.volume}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
                  }
