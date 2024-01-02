
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CalendarCheck, CalendarClock, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function EventGhostCard() {
 

  return (
    <Card className='w-full'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-start gap-3'>
                <Skeleton className='w-[100px] h-[100px] rounded-md overflow-hidden'/>
                <div className='flex flex-col justify-between py-3'>
                    <Skeleton className='h-[10px] w-[200px]'/>
                    <Skeleton className='h-[20px] w-[300px]'/>
                    <div className='flex flex-row items-center text-slate-500 text-sm'>
                        <User  size={16}/>
                        <Skeleton className='h-[10px] w-[50px]'/>
                    </div>
                </div>
            </div>
        </div>          
        
    </Card>
  )
}
