'use client'

import { useState } from 'react'
import { MoreVertical, Eye, Shield, Trash2, CheckCircle, AlertCircle } from 'lucide-react'

const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'user',
    status: 'active',
    joined: '2024-01-05',
    trades: 245,
    volume: '$234,500',
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike@example.com',
    role: 'moderator',
    status: 'active',
    joined: '2023-12-15',
    trades: 1024,
    volume: '$1.2M',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma@example.com',
    role: 'user',
    status: 'active',
    joined: '2024-01-10',
    trades: 456,
    volume: '$567,200',
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'john@example.com',
    role: 'user',
    status: 'inactive',
    joined: '2023-11-20',
    trades: 89,
    volume: '$45,300',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa@example.com',
    role: 'admin',
    status: 'active',
    joined: '2023-10-01',
    trades: 2341,
    volume: '$3.5M',
  },
]

export function UserManagementTable() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)

  const toggleUserSelect = (id: number) => {
    setSelectedUsers(prev => 
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    )
  }

  const toggleAllSelect = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map(u => u.id))
    }
  }

  return (
    <div className="card">
      {/* Selection Actions */}
      {selectedUsers.length > 0 && (
        <div className="mb-4 p-4 bg-orbitra-500/10 border border-orbitra-500/30 rounded-lg flex items-center justify-between">
          <span className="text-sm font-medium text-orbitra-400">
            {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
          </span>
          <div className="flex items-center gap-2">
            <button className="text-sm px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors">
              Suspend
            </button>
            <button 
              onClick={() => setSelectedUsers([])}
              className="text-sm px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-left">
                <input 
                  type="checkbox"
                  checked={selectedUsers.length === users.length && users.length > 0}
                  onChange={toggleAllSelect}
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 cursor-pointer"
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">User</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Role</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400">Joined</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400">Trades</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-400">Volume</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr 
                key={user.id} 
                className={`border-b border-slate-800 hover:bg-slate-800/50 transition-colors ${
                  selectedUsers.includes(user.id) ? 'bg-slate-800/30' : ''
                }`}
              >
                <td className="px-4 py-4">
                  <input 
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleUserSelect(user.id)}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 cursor-pointer"
                  />
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-100">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                    user.role === 'moderator' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    {user.role === 'admin' && <Shield size={14} />}
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {user.status === 'active' ? (
                      <CheckCircle size={14} />
                    ) : (
                      <AlertCircle size={14} />
                    )}
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-slate-300">{user.joined}</td>
                <td className="px-4 py-4 text-right text-sm font-medium text-slate-100">{user.trades}</td>
                <td className="px-4 py-4 text-right text-sm font-medium text-slate-100">{user.volume}</td>
                <td className="px-4 py-4">
                  <div className="relative flex justify-center">
                    <button 
                      onClick={() => setOpenMenuId(openMenuId === user.id ? null : user.id)}
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <MoreVertical size={18} className="text-slate-400" />
                    </button>

                    {openMenuId === user.id && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden z-50">
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                          <Eye size={16} />
                          View Profile
                        </button>
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                          <Shield size={16} />
                          Change Role
                        </button>
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                          <Trash2 size={16} />
                          Suspend User
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-3">
        {users.map((user) => (
          <div 
            key={user.id}
            className={`p-4 bg-slate-800/50 rounded-lg border border-slate-700 ${
              selectedUsers.includes(user.id) ? 'bg-slate-800' : ''
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <input 
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => toggleUserSelect(user.id)}
                className="w-4 h-4 mt-1 rounded border-slate-600 bg-slate-800"
              />
              <div className="flex-1">
                <p className="font-semibold text-slate-100">{user.name}</p>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                user.role === 'moderator' ? 'bg-amber-500/20 text-amber-400' :
                'bg-slate-700 text-slate-300'
              }`}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                user.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-slate-700 text-slate-400'
              }`}>
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
