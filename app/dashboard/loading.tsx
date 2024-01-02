import React from 'react'
import DateInfo from '@/hooks/useDate'
import { LayoutDashboard } from 'lucide-react'
import { CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <div className='h-screen flex items-center justify-center '>
        <CircularProgress/>
    </div>
  )
}
