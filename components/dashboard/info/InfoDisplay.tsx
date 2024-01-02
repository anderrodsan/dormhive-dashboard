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
import InfoCard from './InfoCard';
import InfoAccordion from './InfoAccordion';
import { X } from 'lucide-react';
  


export default function InfoDisplay(props:any) {

    const data = props.data
    const subInfo = data.child
    
    return(
        <div className='space-y-2 text-sm'>
            <p className='font-bold text-base'>{data?.id}. {data?.title}</p>
            <p className=''>{data?.text}</p>
            <div className='relative h-[200px] w-full overflow-hidden rounded-md'>
                <Image  
                    alt='EventImage' 
                    src={data?.image} 
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div className='absolute top-0 right-0 p-2 cursor-pointer bg-white rounded-bl-md    '>
                    <X size={16}/>
                </div>
            </div>
            <div className='flex flex-col'>
                {subInfo?.map((info, index) => (
                    <div key={index}>
                        <InfoAccordion data={info}/>
                    </div>
                ))}
            </div>
            
        </div>
    );
}