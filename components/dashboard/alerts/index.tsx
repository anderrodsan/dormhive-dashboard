"use client"

import React from 'react'
import AlertCard from '@/components/dashboard/alerts/AlertCard'
import CreateAlert from '@/components/dashboard/alerts/CreateAlert'
import DisplayAlert from './DisplayAlert'
import EventCard from '@/components/dashboard/events/EventCard'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { BellPlus } from 'lucide-react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Input } from '@/components/ui/input'
import { Ialert } from '@/lib/types'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function AlertList(props:any) {

  const alerts = props.data;
  const [selectedAlert, setSelectedAlert] = React.useState(alerts[0])
  const [open, setOpen] = React.useState<boolean>(false)
  const [openNew, setOpenNew] = React.useState<boolean>(false)
  const [filteredAlerts, setFilteredAlerts] = React.useState(alerts)

  // Filter the alerts by anything excluding the id
  function filterAlerts(inputText) {
    const filtered = alerts.filter(({ id, ...rest }) =>
      Object.values(rest).some(field =>
        typeof field === 'string' &&
        field.toLowerCase().includes(inputText.toLowerCase())
      )
    );
  
    setFilteredAlerts(filtered);
  }

  function handleOpen(alert: Ialert) {
    setSelectedAlert(alert);
    setOpen(true);
  }


  return (
    <div className='relative flex gap-3 w-full h-full'>  
        <div className='relative flex flex-col w-full lg:w-1/2 h-full'>
            <div className='sticky top-0 z-10 flex flex-1 justify-between items-center py-2 gap-2 bg-slate-50 dark:bg-slate-950'>
                <Input
                    name='filter'
                    placeholder='Filter by...'
                    onChangeCapture={e => filterAlerts(e.currentTarget.value)}
                />
                <Button size={"sm"} onClick={() => setOpenNew(true)}>
                    <BellPlus strokeWidth={2} className='lg:mr-1 p-1'/>
                    <p className='text-sm whitespace-nowrap hidden lg:block'>New Alert</p>
                </Button>
            </div>
            
            <div className='space-y-3'>
                {filteredAlerts?.map((alert: any, index: number) => (
                    <div key={index} className='col-span-6 sm:col-span-3 xl:col-span-2'>
                        <div className='lg:hidden' onClick={() => handleOpen(alert)}>
                            <AlertCard data={alert} selected={selectedAlert}/>
                        </div>
                        <div className='hidden lg:block' onClick={() => setSelectedAlert(alert)}>
                            <AlertCard data={alert} selected={selectedAlert}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Card className='relative hidden lg:block lg:w-1/2'>
            {selectedAlert && <DisplayAlert data={selectedAlert} />} 
        </Card>
        <Dialog open={openNew} onOpenChange={setOpenNew}>
            <DialogContent>
                <CreateAlert />
            </DialogContent>
            
        </Dialog>

        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className='h-5/6'>
                <DisplayAlert data={selectedAlert}/>    
            </DrawerContent> 
        </Drawer>
        
    </div>
        
  );
}
