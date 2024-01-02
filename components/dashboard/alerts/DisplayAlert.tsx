
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, PencilLine } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function DisplayAlert(props: any) {

    const data = props.data;
    
    return(
        <ScrollArea className='p-3 fixed'>
            <div className=' text-sm space-y-5'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='font-bold'>{data.creator}</p>
                        <Badge variant={"outline"}>{data.role}</Badge>
                        <PencilLine size={16} className='cursor-pointer text-slate-500'/> 
                    </div>        

                    <p className='font-light'>{data.date}</p>
                </div>
                
                <div className='space-y-2'>
                    <p className='font-bold text-lg'>{data.title}</p>
                    <p className=''>{data.text}</p>
                    <div className='h-[100px] hover:h-auto w-[100px] rounded-md overflow-hidden hover:overflow-visible hover:rounded-md'>
                        <Image  
                            alt='EventImage' 
                            src={data?.image} 
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                        />
                    </div>
                    
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <MessageSquare size={16}/>
                    <p className='text-sm'>3 replies</p>
                </div>
                <div className='flex flex-col gap-3'>
                    
                    <div className='flex flex-row gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='bg-slate-200 border rounded-lg text-black p-2 w-2/3'>
                            <p className='font-bold'>@ander</p>
                            <p>Hola que tal</p>
                        </div>
                    </div>
                    <div className='bg-slate-700 border rounded-lg text-white p-2 w-2/3 ml-auto'>
                        <p>Que pasa</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='bg-slate-200 border rounded-lg text-black p-2 w-2/3'>
                            <p className='font-bold'>@ander</p>
                            <p>Hola que tal</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='bg-slate-200 border rounded-lg text-black p-2 w-2/3'>
                            <p className='font-bold'>@ander</p>
                            <p>Hola que tal</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='bg-slate-200 border rounded-lg text-black p-2 w-2/3'>
                            <p className='font-bold'>@ander</p>
                            <p>Hola que tal</p>
                        </div>
                    </div>
                    <div className='bg-slate-700 border rounded-lg text-white p-2 w-2/3 ml-auto'>
                        <p>Que pasa</p>
                    </div>
                    <div className='bg-slate-700 border rounded-lg text-white p-2 w-2/3 ml-auto'>
                        <p>Que pasa</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='bg-slate-200 border rounded-lg text-black p-2 w-2/3'>
                            <p className='font-bold'>@ander</p>
                            <p>Hola que tal</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={data.image} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='bg-slate-200 border rounded-lg text-black p-2 w-2/3'>
                            <p className='font-bold'>@ander</p>
                            <p>Hola que tal</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </ScrollArea>
        
    );
}