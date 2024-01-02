
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MessageSquare, PencilLine } from 'lucide-react';
import React from 'react'

export default function AlertCard(props: any) {

    const data = props.data;

    const selectedAlert = props.selected

    

    return(
        <Card className={data.id === selectedAlert?.id ? "bg-slate-100 dark:bg-slate-900 w-full" : "w-full"}>
            <div className='p-3 text-xs flex flex-row gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
                <div>
                    <Avatar className='h-10 w-10'>
                        <AvatarImage src={data.image} alt="avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className='space-y-2 text-left flex-grow'>
                    <div className='text-sm text-slate-500 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center gap-2'>
                        <p className='font-bold'>{data.creator}</p>
                        <Badge variant={"outline"}>{data.role}</Badge>
                        <PencilLine size={16} className='cursor-pointer text-slate-500'/> 
                        </div>
                        
                        <p className='font-light text-xs'>{data.date}</p>
                    </div>
                    <p className='text-sm font-bold'>{data.title}</p>
                    <p className='line-clamp-2'>{data.text}</p>
                    <div className='flex flex-row items-center gap-1'>
                        <MessageSquare size={16}/>
                        <p className='text-sm'>3 replies</p>
                    </div>
                    
                </div>
            </div>
            
           
        </Card>
    );
}