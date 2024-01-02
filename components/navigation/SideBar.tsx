"use client"


import React from 'react'
import Link from 'next/link';



// ShadcnUI components
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

//React Icons

import { usePathname } from 'next/navigation';
import { ClipboardList, Users, LayoutDashboard, Home, CalendarDays, BellDot, Mail, BookText, MessagesSquare } from "lucide-react"



export default function Sidebar() {

  const pathname = usePathname()

  const navigationItems = [
    { path: '/dashboard', icon: <LayoutDashboard fontSize={20} />, label: 'Dashboard' },
    { path: '/dashboard/tasks', icon: <Mail fontSize={20} />, label: 'Inbox' },
    { path: '/dashboard/users', icon: <Users fontSize={20} />, label: 'Users' },
    { path: '/dashboard/groups', icon: <MessagesSquare fontSize={20} />, label: 'Groups' },
    { path: '/dashboard/events', icon: <CalendarDays fontSize={20} />, label: 'Events' },
    { path: '/dashboard/alerts', icon: <BellDot fontSize={20} />, label: 'Alerts' },
    { path: '/dashboard/info', icon: <BookText fontSize={20} />, label: 'Information' },
  ];

  return (
    <div className='flex flex-col justify-between items-center h-full border-r bg-white dark:bg-black'>
      <div className='flex flex-col justify-start text-slate-700 dark:text-slate-300'>        
        <div className='py-5 pl-6'>
          
          <Link href='/' className='flex flex-row gap-3'>
              <Home />
              <h1 className='font-bold text-md hidden xl:block'>DormHive</h1>
          </Link>
        </div>
        
        {/* Show tooltip and only icon in smaller screens */}
        <ul className='flex flex-col'>
          {navigationItems.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <li className='flex flex-row justify-start group'>
                    <div className={`h-full w-1 ${pathname === item.path ? 'bg-slate-500' : 'group-hover:bg-slate-500'}`} />
                    <Link
                      href={item.path}
                      className={`flex flex-grow flex-row items-center gap-3 py-5 px-5 ${pathname === item.path ? 'bg-slate-100 dark:bg-gray-900' : 'group-hover:bg-slate-100 dark:hover:bg-gray-900'}`}
                    >
                      {item.icon}
                      <p className='text-sm hidden xl:block'>{item.label}</p>
                    </Link>

                  </li>
                </TooltipTrigger>
                <TooltipContent className='xl:hidden' side='right'>{item.label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>  
          ))}
        </ul>
      </div>
    </div>
  );
}
