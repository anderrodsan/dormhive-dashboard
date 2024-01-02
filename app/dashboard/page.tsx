import React, { Suspense } from 'react'


//Import React Icons
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Statistics from '@/components/dashboard/statistics/Statistics';

import LoadingStatistics from '@/components/dashboard/statistics/StatisticsLoading';
import { LayoutDashboard } from 'lucide-react';
import { DataTable } from '@/components/DataTable';
import { User, userColumns } from '@/components/dashboard/users/user-columns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserTable } from '@/components/dashboard/users/UserTable';
import { Request } from '@/lib/types/Tasks';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { columnsSmall } from '@/components/dashboard/tasks/columns-small';
import LoadingUsers from '@/components/dashboard/users/loading';
import FeatureHeader from '@/components/dashboard/FeatureHeader';
import UsersList from '@/components/dashboard/users';

async function getTasks(): Promise<any> {
  // Fetch data from your API here.

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);


  // Fetch data from supabase
  const { data, error } = await supabase
    .from('tasks')
    .select('id, room, location, title, description, img_url, priority, status, created_at, profile: profiles(email)')
    .order('created_at', { ascending: false });
    if (error) {
      console.error('Error fetching groups:', error);
    }


  return data
}


export default async function Dashboard() {

  const tasks = await getTasks();

  return (
      <div className='flex flex-col justify-start h-full'>
        <Suspense fallback={<LoadingStatistics/>}>
          <Statistics />
        </Suspense>
        
        
        <div className='grid grid-cols-3 gap-2 flex-grow rounded-lg mt-2'>
          <Card className='col-span-3 xl:col-span-1 p-5'>
            <CardTitle className=' text-sm font-medium pb-5'>Tenant List</CardTitle>
            <Suspense fallback={<LoadingUsers/>}>
              <UsersList />
            </Suspense>
          </Card> 

          <Card className='h-full col-span-3 xl:col-span-2 p-5 rounded-lg'>
            <CardTitle className='text-sm font-medium pb-5'>New Tasks</CardTitle>
            <DataTable columns={columnsSmall} data={tasks} />  
          </Card>

        </div> 
          
      </div>
  )
}
