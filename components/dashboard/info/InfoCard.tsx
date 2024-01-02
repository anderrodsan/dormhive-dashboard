"use client"
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import InfoList from '.';
import { Badge } from '@/components/ui/badge';
  


export default function InfoCard(props:any) {

    const data = props.data
    const info = data.child
    
    return(
        <div className='p-3 space-y-2 text-sm'>
            <p className='font-bold'>{data?.id}. {data?.title}</p>
            <p className='line-clamp-3'>{data?.text}</p>
            <div className='flex flex-row flex-wrap gap-2'>
                {info.map((info, index) => (
                    <div key={index} className='cursor-pointer' onClick={() => console.log(info.child)}>
                        <Badge variant={"secondary"}>{info.title}</Badge>
                    </div>
                ))}
            </div>
            
        </div>
    );
}