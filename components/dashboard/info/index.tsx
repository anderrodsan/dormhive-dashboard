"use client"

import React from 'react'
import InfoCard from './InfoCard';
import { Card } from '@/components/ui/card';
import InfoDisplay from './InfoDisplay';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookPlus } from 'lucide-react';

export default function InfoList(props:any) {

    const info = props.data

    const [filteredInfo, setFilteredInfo] = React.useState(info)

     // Filter the info by title
    function filterInfo(inputText:string) {
        const filtered = info.filter(({ id, ...rest }) =>
        Object.values(rest).some(field =>
          typeof field === 'string' &&
          field.toLowerCase().includes(inputText.toLowerCase())
        )
      );

    setFilteredInfo(filtered)
    }

    const [selectedInfo, setSelectedInfo] = React.useState(info[0])
    
    return(
        <div className='flex flex-row w-full h-full'>
            <div className='flex flex-col h-full w-full lg:w-1/2 gap-2'>
                <div className='flex flex-row justify-between items-center py-2 lg:pr-5 gap-2'>
                    <Input
                        name='filter'
                        placeholder='Search'
                        onChangeCapture={e => filterInfo(e.currentTarget.value)}
                    />
                    <Button size={"sm"}>
                        <BookPlus size={20} className=''/>
                        <p className='text-sm whitespace-nowrap hidden lg:block pl-2'>New Section</p>
                    </Button>
                </div>
                <ScrollArea className='h-full overflow-y-auto lg:pr-5'>
                    <div className='flex flex-col gap-3'>
                        {filteredInfo.map((info, index) => (
                            <div key={index} 
                                className='cursor-pointer' 
                                onClick={() => setSelectedInfo(info)}
                            >
                                <Card className={info.id === selectedInfo?.id ? "bg-slate-100 dark:bg-slate-900 h-full" : "h-full"}>
                                    <InfoCard data={info}/>
                                </Card>
                                
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            
            
            <Card className='hidden lg:block w-1/2 h-full'>
                <ScrollArea className='p-3 h-full overflow-y-auto'>
                    <InfoDisplay data={selectedInfo} />
                </ScrollArea>
                
            </Card>
        </div>
        
    );
}