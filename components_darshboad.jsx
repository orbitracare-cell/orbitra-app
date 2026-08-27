'use client'

import { ArrowUp, ArrowDown, Star, MoreVertical } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'
import { useState } from 'react'

const assets = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    amount: 0.5234,
    value: 21345.60,
    price: 40789.50,
    change: 8.5,
    chart: [
      { x: 0, y: 38000 },
      { x: 1, y: 39500 },
      { x: 2, y: 38900 },
      { x: 3, y: 40200 },
      { x: 4, y: 40789 },
    ],
    icon: '₿',
    isFavorite: true,
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    amount: 3.2145,
    value: 5678.90,
    price: 1765.50,
    change: 12.3,
    chart: [
      { x: 0, y: 1500 },
      { x: 1, y: 1650 },
      { x: 2, y: 1700 },
      { x: 3, y: 1740 },
      { x: 4, y: 1765 },
    ],
    icon: 'Ξ',
    isFavorite: true,
  },
  {
    id: 3,
    symbol: 'USDC',
    name: 'USD Coin',
    amount: 10000,
    value: 10000.00,
    price: 1.00,
    change: 0.0,
    chart: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
    ],
    icon: '$',
    isFavorite: false,
  },
  {
    id: 4,
    symbol: 'SOL',
    name: 'Solana',
    amount: 25.5,
    value: 6410.50,
    price: 251.18,
    change: -3.2,
    chart: [
      { x: 0, y: 270 },
      { x: 1, y: 265 },
      { x: 2, y: 260 },
      { x: 3, y: 255 },
      { x: 4, y: 251 },
    ],
    icon: '◎',
    isFavorite: false,
  },
]

export function Dashboard() {
  const [favorites, setFavorites] = useState(assets.map(a => a.isFavorite))

  const toggleFavorite = (id: number) => {
    const index = assets.findIndex(a => a.id === id)
    const newFavorites = [...favorites]
    newFavorites[index] = !newFavorites[index]
    setFavorites(newFavorites)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-50">Your Assets</h2>
          <p className="text-slate-400 mt-1">4 assets • 4 gainers • 1 losers</p>
        </div>
        <button className="btn btn-secondary">+ Add Asset</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset, index) => (
          <div 
            key={asset.id} 
            className="card-interactive group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orbitra-500/20 rounded-lg flex items-center justify-center text-lg font-bold text-orbitra-400">
                  {asset.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{asset.symbol}</p>
                  <p className="text-sm text-slate-400">{asset.name}</p>
                </div>
              </div>
              <button 
                onClick={() => toggleFavorite(asset.id)}
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Star 
                  size={20} 
                  className={favorites[index] ? 'fill-amber-400 text-amber-400' : ''}
                />
              </button>
            </div>

            {/* Chart */}
            <div className="mb-4 h-14">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={asset.chart}>
                  <Tooltip 
                    contentStyle={{ background: 'transparent', border: 'none' }}
                    formatter={(value) => [`$${value.toFixed(2)}`, asset.symbol]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="y" 
                    stroke={asset.change >= 0 ? '#10b981' : '#ef4444'}
                    strokeWidth={2}
                    isAnimationActive={false}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Stats */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-slate-50">
                  ${asset.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {asset.amount.toLocaleString('en-US', { maximumFractionDigits: 4 })} {asset.symbol}
                </p>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-1 font-semibold ${asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {asset.change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {Math.abs(asset.change).toFixed(2)}%
                </div>
                <p className="text-sm text-slate-400 mt-1">
                  ${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-slate-800/50 backdrop-blur opacity-0 group-hover:opacity-100 rounded-2xl flex items-center justify-center gap-3 transition-opacity">
              <button className="btn btn-primary px-6">Trade</button>
              <button className="btn btn-ghost px-6">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
