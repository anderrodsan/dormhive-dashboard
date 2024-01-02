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
import { X } from 'lucide-react';
  


export default function InfoAccordion(props:any) {

    const data = props.data
    const subInfo = data.child
    
    return(
        <div className='px-3 space-y-2 text-sm'>

            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <p className='font-bold'>{data?.id}. {data?.title}</p>
                </AccordionTrigger>
                <AccordionContent className='space-y-2'>
                    <p>{data?.text}</p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='relative h-[100px] w-full overflow-hidden rounded-md'>
                            <Image  
                                alt='EventImage' 
                                src={data?.image} 
                                quality={100}
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                            />
                            <div className='absolute top-0 right-0 p-1 cursor-pointer bg-white rounded-bl-md'>
                                <X size={16}/>
                            </div>
                        </div>
                        <div className='relative h-[100px] w-full overflow-hidden rounded-md'>
                            <Image  
                                alt='EventImage' 
                                src={data?.image} 
                                quality={100}
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                            />
                            <div className='absolute top-0 right-0 p-1 cursor-pointer bg-white rounded-bl-md'>
                                <X size={16}/>
                            </div>
                        </div>
                    </div>
                    
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <div className='flex flex-row flex-wrap gap-2'>
                {subInfo?.map((info, index) => (
                    <div key={index}>
                        <InfoAccordion data={info}/>
                    </div>
                ))}
            </div>
            
        </div>
    );
}