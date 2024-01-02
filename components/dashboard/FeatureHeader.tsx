"use client"

import { usePathname } from 'next/navigation';
import React from 'react'

// lucide icons
import { ClipboardList, Users, LayoutDashboard, Home, CalendarDays, BellDot, Mail, BookText, MessagesSquare } from "lucide-react"

export default function FeatureHeader(props: any) {

  

  const navigationItems = [
    { path: '/dashboard', icon: <LayoutDashboard fontSize={20} />, label: 'Dashboard' },
    { path: '/dashboard/tasks', icon: <Mail fontSize={20} />, label: 'Inbox' },
    { path: '/dashboard/users', icon: <Users fontSize={20} />, label: 'Users' },
    { path: '/dashboard/groups', icon: <MessagesSquare fontSize={20} />, label: 'Groups' },
    { path: '/dashboard/events', icon: <CalendarDays fontSize={20} />, label: 'Events' },
    { path: '/dashboard/alerts', icon: <BellDot fontSize={20} />, label: 'Alerts' },
    { path: '/dashboard/info', icon: <BookText fontSize={20} />, label: 'Information' },
  ];
  

  return(
      <div className='flex flex-row justify-between pb-3'>
        <div className='flex flex-row items-center justify-start gap-2'>
          <props.icon fontSize={30} />
          <h1 className='text-lg font-bold'>{props.title}</h1>
        </div>

      </div>
  );
}