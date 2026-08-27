'use client'

import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'

export function UserFilters() {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    status: 'all',
    role: 'all',
    joinDate: 'all',
  })

  const resetFilters = () => {
    setFilters({ status: 'all', role: 'all', joinDate: 'all' })
  }

  return (
    <div className="card">
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search users by name, email, or ID..."
            className="input pl-10"
          />
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="btn btn-secondary flex items-center gap-2"
        >
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Status Filter */}
            <div>
              <label className="label">Account Status</label>
              <select 
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="input"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            {/* Role Filter */}
            <div>
              <label className="label">Role</label>
              <select 
                value={filters.role}
                onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                className="input"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* Join Date Filter */}
            <div>
              <label className="label">Join Date</label>
              <select 
                value={filters.joinDate}
                onChange={(e) => setFilters({ ...filters, joinDate: e.target.value })}
                className="input"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <button 
              onClick={resetFilters}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X size={16} />
              Reset Filters
            </button>
            <button 
              onClick={() => setShowFilters(false)}
              className="btn btn-primary"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
