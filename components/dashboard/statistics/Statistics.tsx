import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import { Idorm } from '@/lib/types';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';


async function getStatistics(): Promise<Idorm>{
    "use server"

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from('dorms')
        .select('*')
        .eq('id', '8b67a025-9c62-43bd-b4d8-a5fe852762c3')
        if (error) {
            console.error('Error fetching groups:', error);
            return null
        }

    return data[0]
}

export default async function Statistics() {

  const info = await getStatistics();

  const cardInfo = [
    {
      title: 'Tenants',
      value: info? info.members : "",
      description: '+18 from last month',
    },
    {
      title: 'Total Capacity',
      value: info? info.capacity : '',
      description: '',
    },
    {
      title: 'Available Rooms',
      value: info? `${Math.round(info.capacity - info.members)}` : '',
      description: '-23 from last month',
    },
    {
      title: 'Occupancy Rate',
      value: info? `${Math.round((info.members / info.capacity) * 100)} %` : '',
      description: '+1% from last month',
    },
  ];

  return (
    <div className=''>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {cardInfo.map((card, index) => (
                <Card key={index}>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>
                    <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'>
                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                    <circle cx='9' cy='7' r='4' />
                    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>{card.value}</div>
                    <p className='text-xs text-muted-foreground truncate'>{card.description}</p>
                </CardContent>
                </Card>
            ))}
        </div>
    </div>
    
  )
}
