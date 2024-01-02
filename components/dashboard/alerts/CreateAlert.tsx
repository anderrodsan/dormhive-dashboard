"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';
import { ImagePlus, Paperclip, Users2 } from 'lucide-react';
import React from 'react'
import { Users } from 'lucide-react';

export default function CreateAlert(props: any) {

    // Create new group
    const handleNewAlert = async (formData: FormData) => {
        
    }

    return(
        <form action={handleNewAlert} className='p-3 space-y-3'>
            <p className='text-md text-center font-bold'>New Alert</p>
            <div className='space-y-1'>
                <Label htmlFor="title">Title</Label>
                <Input
                name="title"
                defaultValue=""
                className="col-span-2 h-8"
                />
            </div>
            <div className='space-y-1'>
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Type your message here." className='h-[200px] bg-white dark:bg-black'/>
            </div>
            <div className='flex flex-col gap-2 lg:flex-row justify-between items center'>
                <div className='flex flex-row gap-2'>
                    <Button size={"sm"}><ImagePlus size={16}/></Button>
                    <Button size={"sm"}><Paperclip size={16}/></Button>
                    
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Users strokeWidth={1}/>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">General</SelectItem>
                            <SelectItem value="dark">Block A</SelectItem>
                            <SelectItem value="system">Block 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='flex flex-row justify-end items center'>
                <Button className=''>Publish</Button>
            </div>
           
        </form>
    );
}