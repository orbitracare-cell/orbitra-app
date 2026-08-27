'use client'

import { create } from 'zustand'

export type UserRole = 'admin' | 'moderator' | 'user'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  isActive: boolean
  createdAt: string
  lastLogin?: string
}

interface AuthStore {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
  isAdmin: () => boolean
  isModerator: () => boolean
  hasPermission: (permission: string) => boolean
}

// Mock current user - Replace with real auth later
const mockAdmin: User = {
  id: 'admin-001',
  name: 'John Admin',
  email: 'admin@orbitra.com',
  role: 'admin',
  isActive: true,
  createdAt: '2024-01-01',
  lastLogin: new Date().toISOString(),
}

const rolePermissions: Record<UserRole, string[]> = {
  admin: [
    'view_dashboard',
    'manage_users',
    'manage_assets',
    'view_transactions',
    'manage_system',
    'view_analytics',
    'manage_admins',
  ],
  moderator: [
    'view_dashboard',
    'view_users',
    'view_assets',
    'view_transactions',
    'view_analytics',
    'moderate_content',
  ],
  user: [
    'view_dashboard',
    'view_portfolio',
    'trade_assets',
  ],
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: mockAdmin, // Set to mockAdmin by default for testing
  
  setUser: (user) => set({ user }),
  
  logout: () => set({ user: null }),
  
  isAdmin: () => get().user?.role === 'admin',
  
  isModerator: () => {
    const role = get().user?.role
    return role === 'admin' || role === 'moderator'
  },
  
  hasPermission: (permission: string) => {
    const user = get().user
    if (!user) return false
    return rolePermissions[user.role]?.includes(permission) ?? false
  },
}))
