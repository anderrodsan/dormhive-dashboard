


import FeatureHeader from '@/components/dashboard/FeatureHeader'
import AlertList from '@/components/dashboard/alerts'
import InfoList from '@/components/dashboard/info';
import InfoCard from '@/components/dashboard/info/InfoCard';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import { BellDot, BellPlus, BookText } from 'lucide-react'
import React from 'react'




export default async function Info() {

    const info = [
        {
            id: 1,
            title: 'Facilities',
            text: `Egmont College's common facilities are distributed throughout the college. From the ground floor in the middle building you have access to the café, conference room and print and copy room. In the hall there is also the Fireplace Room, the welcome bar and the mailboxes.`,
            image: 'https://i.pinimg.com/564x/ba/54/ac/ba54ac73d4c6a58f6ecd45bf8700433c.jpg',
            child: [ 
                {
                    id: 2.1,
                    title: 'Laundry',
                    text: `The college has its own laundry in the basement. To use the laundromat, use the access chip that is handed out when you move in. The price for washing is deducted from the following month's rent. Drying rooms are located near the laundry.`,
                    image: 'https://i.pinimg.com/564x/71/0e/10/710e102abec0f5604c6a6c9a40c767fe.jpg',
                },
                {
                    id: 2.1,
                    title: 'Lounge',
                    text: `The lounge is a gathering place for all the collegians. A number of activities are gathered in the lounge, including table tennis, billiards, computer games, home cinema, TV and the World Room (foreign magazines etc.). In the lounge there is also a kitchenette.`,
                    image: 'https://i.pinimg.com/564x/71/0e/10/710e102abec0f5604c6a6c9a40c767fe.jpg',
                },
            ]
        },
        {
            id: 2,
            title: 'Rooms',
            text: `At Grønjordskollegiet we offer two different types of rooms (single and double). Each room has its own shower and toilet, as well as its own entrance hall with closets. In addition, as a resident, you share a kitchen with 11-12 other rooms. The dormitory houses about 1,000 residents and consists of 5 blocks with 8 floors, each of which has 21 single rooms and 2 double-walled axes.`,
            image: 'https://i.pinimg.com/564x/24/ae/3a/24ae3a446a327998d404729123ea4be0.jpg',
            child: [
                {
                    id: 2.1,
                    title: 'Single Rooms',
                    text: `The single rooms consist of an entrance hall with closets of 2 m², a room of 12 m² and a bathroom with toilet and shower of 2 m². A small but bright room, with a large window providing proper light. You can find floor plans for the single rooms here: Floorplan-singleroom`,
                    image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
                    child: [],
                },
                {
                    id: 2.2,
                    title: 'Double Rooms',
                    text: `The double rooms consist of an entrance hall, two interconnecting rooms totalling 24 m² and a bathroom with its own shower and toilet. In addition, there is significantly more closet space than there is in the single rooms. In all hallways there are 2 double rooms.`,
                    image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
                    child: [
                        {
                            id: 2.3,
                            title: 'Double Rooms',
                            text: `The double rooms consist of an entrance hall, two interconnecting rooms totalling 24 m² and a bathroom with its own shower and toilet. In addition, there is significantly more closet space than there is in the single rooms. In all hallways there are 2 double rooms.`,
                            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
                            child: [],
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            title: 'Price',
            text: `A new update for our software product is now available. This update includes several improvements and bug fixes.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            child: [],
        },
        {
            id: 4,
            title: 'Rules',
            text: `Scheduled maintenance is planned for our services on Saturday. Minimal disruptions are expected during this period.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            child: [],
        },
        {
            id: 5,
            title: 'Resident Council',
            text: `Exciting news! We're thrilled to introduce a new feature that will enhance user experience. Stay tuned for more details!`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            child: [],
        },
        {
            id: 6,
            title: 'Moving In/out',
            text: `We'll be conducting server maintenance tomorrow. Please be aware of potential service interruptions during the maintenance window.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            child: [],
        },
        {
            id: 7,
            title: 'Server Maintenance Notice',
            text: `We'll be conducting server maintenance tomorrow. Please be aware of potential service interruptions during the maintenance window.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            child: [],
        },
        {
            id: 8,
            title: 'Server Maintenance Notice',
            text: `We'll be conducting server maintenance tomorrow. Please be aware of potential service interruptions during the maintenance window.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            child: [],
        },
    ];
    
  return (
    <div className='flex flex-col justify-start h-full'>
        {/*<div className='flex flex-row flex-wrap gap-3 pb-2'>
            {info.map((info, index) => (
                <div key={index}>
                    <Badge variant={"outline"}>
                        <p className='text-xs whitespace-nowrap'>{info.title}</p>
                    </Badge>
                </div>
            ))}
        </div>  */}            
        <InfoList data={info} className="h-full"/>        
    </div>
  )
}
