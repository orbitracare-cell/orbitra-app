'use client'

import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, AlertCircle, Eye } from 'lucide-react'

const transactions = [
  {
    id: 1,
    type: 'buy',
    asset: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.25,
    value: 10197.38,
    price: 40789.50,
    date: '2024-01-15T14:30:00',
    status: 'completed',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    type: 'sell',
    asset: 'Ethereum',
    symbol: 'ETH',
    amount: 2,
    value: 3531.00,
    price: 1765.50,
    date: '2024-01-15T10:15:00',
    status: 'completed',
    timestamp: '6 hours ago',
  },
  {
    id: 3,
    type: 'buy',
    asset: 'Solana',
    symbol: 'SOL',
    amount: 25.5,
    value: 6410.50,
    price: 251.18,
    date: '2024-01-14T16:45:00',
    status: 'completed',
    timestamp: '1 day ago',
  },
  {
    id: 4,
    type: 'buy',
    asset: 'Cardano',
    symbol: 'ADA',
    amount: 1000,
    value: 1080.00,
    price: 1.08,
    date: '2024-01-14T09:20:00',
    status: 'pending',
    timestamp: '1 day ago',
  },
  {
    id: 5,
    type: 'sell',
    asset: 'Ripple',
    symbol: 'XRP',
    amount: 500,
    value: 1225.00,
    price: 2.45,
    date: '2024-01-13T13:10:00',
    status: 'completed',
    timestamp: '2 days ago',
  },
]

export function RecentTransactions() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-50">Recent Transactions</h2>
          <p className="text-slate-400 mt-1">Your latest trades and transfers</p>
        </div>
        <a href="/transactions" className="text-orbitra-400 hover:text-orbitra-300 text-sm font-medium">
          View All →
        </a>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Type</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Asset</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400">Amount</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400">Price</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400">Value</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr 
                key={tx.id} 
                className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    tx.type === 'buy' 
                      ? 'bg-emerald-500/20' 
                      : 'bg-orange-500/20'
                  }`}>
                    {tx.type === 'buy' 
                      ? <ArrowDownLeft className="text-emerald-400" size={20} />
                      : <ArrowUpRight className="text-orange-400" size={20} />
                    }
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-100">{tx.symbol}</p>
                    <p className="text-xs text-slate-400">{tx.asset}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <p className="font-semibold text-slate-100">
                    {tx.amount.toLocaleString('en-US', { maximumFractionDigits: 4 })}
                  </p>
                </td>
                <td className="px-4 py-4 text-right">
                  <p className="font-semibold text-slate-100">
                    ${tx.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </td>
                <td className="px-4 py-4 text-right">
                  <p className="font-semibold text-slate-100">
                    ${tx.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    tx.status === 'completed'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {tx.status === 'completed' 
                      ? <CheckCircle size={14} />
                      : <Clock size={14} />
                    }
                    {tx.status === 'completed' ? 'Completed' : 'Pending'}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-400 text-sm">{tx.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-3">
        {transactions.map((tx) => (
          <div 
            key={tx.id}
            className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                tx.type === 'buy' 
                  ? 'bg-emerald-500/20' 
                  : 'bg-orange-500/20'
              }`}>
                {tx.type === 'buy' 
                  ? <ArrowDownLeft className="text-emerald-400" size={20} />
                  : <ArrowUpRight className="text-orange-400" size={20} />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-100">{tx.symbol}</p>
                <p className="text-xs text-slate-400">{tx.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-slate-100">
                ${tx.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-emerald-400">
                {tx.amount.toLocaleString('en-US', { maximumFractionDigits: 2 })} {tx.symbol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
