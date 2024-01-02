import EventGhostCard from '@/components/dashboard/events/EventGhostCard'
import { Button } from '@/components/ui/button'
import { CalendarPlus } from 'lucide-react'
import React from 'react'

export default function loading() {
  return (
    <div className='flex flex-col gap-3'>
        <p className='font-bold'>Upcoming Events</p>        
        <div className='flex flex-col lg:flex-row gap-3 w-full'>
            <EventGhostCard />
            <EventGhostCard />
        </div>
    </div>
  )
}
