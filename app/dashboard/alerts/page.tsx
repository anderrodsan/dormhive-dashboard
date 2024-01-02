


import FeatureHeader from '@/components/dashboard/FeatureHeader'
import AlertList from '@/components/dashboard/alerts'

import { BellDot, BellPlus } from 'lucide-react'
import React from 'react'




export default async function Alerts() {

    const alerts = [
        {
            id: 1,
            title: 'Critical System Failure',
            date: '5m ago',
            text: `The system has experienced a critical failure in the main server. Our technical team is actively working to resolve the issue.`,
            image: 'https://i.pinimg.com/564x/ef/2c/a9/ef2ca91bd27e35288c0d579c7884fe85.jpg',
            creator: 'System Admin',
            role: 'admin'
        },
        {
            id: 2,
            title: 'Security Breach Detected',
            date: '1h ago',
            text: `We have detected unauthorized access attempts to our network. Immediate action is being taken to strengthen security measures.`,
            image: 'https://i.pinimg.com/564x/71/0e/10/710e102abec0f5604c6a6c9a40c767fe.jpg',
            creator: 'Security Team',
            role: 'admin'
        },
        {
            id: 3,
            title: 'Product Update Available',
            date: '1d ago',
            text: `A new update for our software product is now available. This update includes several improvements and bug fixes.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'Product Development',
            role: 'user'
        },
        {
            id: 4,
            title: 'Upcoming Maintenance',
            date: '2d ago',
            text: `Scheduled maintenance is planned for our services on Saturday. Minimal disruptions are expected during this period.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'Operations Team',
            role: 'admin'
        },
        {
            id: 5,
            title: 'New Feature Announcement',
            date: '3d ago',
            text: `Exciting news! We're thrilled to introduce a new feature that will enhance user experience. Stay tuned for more details!`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'Product Management',
            role: 'user'
        },
        {
            id: 6,
            title: 'Server Maintenance Notice',
            date: '5d ago',
            text: `We'll be conducting server maintenance tomorrow. Please be aware of potential service interruptions during the maintenance window.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'IT Department',
            role: 'admin'
        },
        {
            id: 7,
            title: 'Server Maintenance Notice',
            date: '5d ago',
            text: `We'll be conducting server maintenance tomorrow. Please be aware of potential service interruptions during the maintenance window.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'IT Department',
            role: 'admin'
        },
        {
            id: 8,
            title: 'Server Maintenance Notice',
            date: '5d ago',
            text: `We'll be conducting server maintenance tomorrow. Please be aware of potential service interruptions during the maintenance window.`,
            image: 'https://i.pinimg.com/564x/e7/ad/bb/e7adbb99cbe50c7f61f70042adc156e8.jpg',
            creator: 'IT Department',
            role: 'admin'
        },
    ];
    

  


  return (
    <div className=''>
        <AlertList data={alerts}/>
    </div>
  )
}
