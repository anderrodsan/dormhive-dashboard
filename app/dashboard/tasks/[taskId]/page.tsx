"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CalendarClock, MapPin, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TaskDetails({ 
    params 
}: {
    params: { taskId : string }
}) {


  const router = useRouter();


  return (
    <div className='flex flex-col gap-4'>
      <div
        onClick={() => router.back()}
        className="cursor-pointer rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </div>
      <Card>
        <CardHeader>
          <p className='text-sm text-slate-500'>#{params.taskId}</p>
          <h1 className='text-xl font-bold pb-1'>Title</h1>
          <div className='flex gap-2'>
            <Badge>R101</Badge>
            <Badge>Block 2V</Badge>
            <Badge>Bathroom</Badge>
          </div> 
          <div className='flex flex-row gap-2 items-center'>
            <User size={16}/>
            <p className='text-slate-500'>ander@gmail.com</p>
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <CalendarClock size={16}/>
            <p className='text-sm text-slate-500'>30 Dec 2023</p>
          </div>
          
          <p className='text-sm'></p>
        </CardHeader>
        <CardContent>
          
          <div className='flex flex-col gap-2'>
            <h1>Description</h1> 
            <p className='text-sm'>Welcome to the Random Phrase and Idiom Generator. There will be times when you may need more than a random word for what you want to accomplish, and this free online tool can help. The use of this tool is quite simple</p>          
          </div>


        </CardContent>
      </Card>
    
    </div>
  )
}
