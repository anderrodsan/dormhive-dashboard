import EventList from '@/components/dashboard/events'
import React from 'react'

async function getEvents(){

    await new Promise(resolve => setTimeout(resolve, 1000))

    const events = [
        {
            name: 'Event Name',
            date: '23 Feb 2024, 20:00',
            image: 'https://i.pinimg.com/564x/ef/2c/a9/ef2ca91bd27e35288c0d579c7884fe85.jpg',
            creator: 'ander',
        },
        {
            name: 'Event Name',
            date: '23 Feb 2024, 20:00',
            image: 'https://i.pinimg.com/564x/71/0e/10/710e102abec0f5604c6a6c9a40c767fe.jpg',
            creator: 'ander',
        },
        {
            name: 'Event Name',
            date: '23 Feb 2024, 20:00',
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'ander',
        },
        {
            name: 'Event Name',
            date: '23 Feb 2024, 20:00',
            image: 'https://i.pinimg.com/564x/24/ae/3a/24ae3a446a327998d404729123ea4be0.jpg',
            creator: 'ander',
        },
        {
            name: 'Event Name',
            date: '23 Feb 2024, 20:00',
            image: 'https://i.pinimg.com/564x/71/0e/10/710e102abec0f5604c6a6c9a40c767fe.jpg',
            creator: 'ander',
        },
        {
            name: 'Event Name',
            date: '23 Feb 2024, 20:00',
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'ander',
        },
      ]
      

      return events
}


export default async function Events() {

  const events = await getEvents()
  
  return (
    <div className='h-full'>
       <EventList data={events}/>
    </div>
  )
}
