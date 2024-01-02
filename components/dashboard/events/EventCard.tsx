
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CalendarCheck, CalendarClock, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function EventCard(props: any) {
 

  const event = props.data

  return (
    <Card>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-start gap-3'>
                <div className='relative w-[100px] h-[100px] rounded-md overflow-hidden'>
                    <Image  
                        alt='EventImage' 
                        src={event?.image}
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                
                <div className='flex flex-col justify-between py-3'>
                    <div className='flex flex-row gap-2 items-center font-light text-xs'>
                        <CalendarClock strokeWidth={1} size={16}/>
                        <p>{event?.date}</p>
                    </div>
                    <p className='font-bold truncate'>{event?.name}</p>
                    <div className='flex flex-row items-center text-slate-500 text-sm'>
                        <User  size={16}/>
                        <p>@{event?.creator}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between p-3'>
                <Button variant={"secondary"}><CalendarCheck className='pr-2' /> Join</Button>
                <p className='font-semibold text-xs text-slate-500 text-right'>+21 Going</p>
            </div>
        </div>          
        
    </Card>
  )
}
