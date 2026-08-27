'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/auth'
import { AdminSidebar } from '@/components/AdminSidebar'
import { AdminNavigation } from '@/components/AdminNavigation'
import { AlertCircle } from 'lucide-react'

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { user, isAdmin } = useAuthStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Check admin access
  useEffect(() => {
    if (mounted && !isAdmin()) {
      router.push('/')
    }
  }, [mounted, isAdmin, router])

  if (!mounted) {
    return null
  }

  if (!isAdmin()) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="card max-w-md text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Access Denied</h1>
          <p className="text-slate-400 mb-6">You do not have permission to access the admin panel.</p>
          <button 
            onClick={() => router.push('/')}
            className="btn btn-primary w-full"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavigation />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
      }
