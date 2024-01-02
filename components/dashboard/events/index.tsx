"use client"
import React from 'react'
import EventCard from '@/components/dashboard/events/EventCard'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import DateInfo from '@/hooks/useDate'
import { CalendarDays, CalendarPlus } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function EventList(props:any) {

  const previousData = props.data
  const upcomingData = props.data
  
  const [open, setOpen] = React.useState<boolean>(false)
  const [previousEvents, setPreviousEvents] = React.useState<any>(previousData.slice(0, 3))
  const [upcomingEvents, setUpcomingEvents] = React.useState<any>(upcomingData.slice(0, 3))
  const [expandUpcoming, setExpandUpcoming] = React.useState<boolean>(true)
  const [expandPrevious, setExpandPrevious] = React.useState<boolean>(true)

  function handleExpandUpcoming() {
    setExpandUpcoming(!expandUpcoming);

    console.log(expandUpcoming)
    if (!expandUpcoming) {
      setUpcomingEvents(props.data.slice(0, 3));
    } else {
      setUpcomingEvents(props.data);
    }
  };

  function handleExpandPrevious() {
    setExpandPrevious(!expandPrevious);

    if (!expandPrevious) {
      setPreviousEvents(props.data.slice(0, 3));
    } else {
      setPreviousEvents(props.data);
    }
  };
  

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <p className='font-bold'>Upcoming Events</p>
                <button 
                    className='text-slate-500 text-sm'
                    onClick={() => handleExpandUpcoming()}
                >{expandUpcoming ? '+ See All' : '- See Less'}</button>
            </div>
            <Button size={"sm"}>
                <CalendarPlus strokeWidth={2} className='lg:mr-1 p-1'/>
                <p className='text-sm whitespace-nowrap hidden lg:block'>New Event</p>
            </Button>
        </div>
        
        <div className='grid grid-cols-6 gap-3'>
            {upcomingEvents.map((event: any, index: number) => (
                <div key={index} className='col-span-6 sm:col-span-3 xl:col-span-2'>
                    <EventCard data={event} />
                </div>
            ))}
        </div>

        <div className='flex gap-3 items-center'>
            <p className='font-bold'>Past Events</p>
            <button 
                className='text-slate-500 text-sm'
                onClick={() => handleExpandPrevious()}
            >{expandPrevious ? '+ See All' : '- See Less'}</button>
        </div>
        
        <div className='grid grid-cols-6 gap-3'>
            {previousEvents.map((event: any, index: number) => (
                <div key={index} className='col-span-6 sm:col-span-3 xl:col-span-2' onClick={() => setOpen(true)}>
                    <EventCard data={event} />
                </div>
            ))}
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <p>Hola</p>
            </DialogContent>
        </Dialog>

    </div>
  );
}
