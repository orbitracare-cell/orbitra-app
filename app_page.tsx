'use client'

import { Dashboard } from '@/components/Dashboard'
import { PortfolioOverview } from '@/components/PortfolioOverview'
import { MarketOverview } from '@/components/MarketOverview'
import { RecentTransactions } from '@/components/RecentTransactions'
import { AssetAllocation } from '@/components/AssetAllocation'

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Portfolio Section */}
      <PortfolioOverview />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Dashboard and Market */}
        <div className="lg:col-span-2 space-y-6">
          <Dashboard />
          <MarketOverview />
        </div>

        {/* Right Column - Allocation */}
        <div className="space-y-6">
          <AssetAllocation />
        </div>
      </div>

      {/* Recent Transactions */}
      <RecentTransactions />
    </div>
  )
}
