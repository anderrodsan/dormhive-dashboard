import { Users } from 'lucide-react'
import React from 'react'
import DateInfo from '@/hooks/useDate';
import { UUID } from 'crypto';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { GroupTable } from '@/components/dashboard/groups/group-table';
import { groupColumns } from '@/components/dashboard/groups/columns';
import { Group } from '@/lib/types/Groups';
import { ScrollArea } from '@/components/ui/scroll-area';

async function getData() {

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);


  // Fetch data from supabase
  const { data, error } = await supabase
    .from('groups')
    .select('id, name, members, parent_id, dorm_id, rooms, members, icons')
    .order('created_at', { ascending: true });
    if (error) {
      console.error('Error fetching groups:', error);
    }

    
  // Create hierarchy
  const map = new Map();

  // Create a map of id to data object
  data?.forEach(item => {
    map.set(item.id, { ...item, subRows: [] });
  });

  // Build the hierarchy
  const hierarchy: Group[] = [];
  map.forEach(item => {
    const parent = map.get(item.parent_id);
    if (parent) {
      parent.subRows.push(item);
    } else {
      hierarchy.push(item);
    }
  });
  

  //delay response
  //await new Promise((resolve) => setTimeout(resolve, 500));

  


  return hierarchy
}



export default async function Groups() {

  const groups = await getData();

  return (
    <div className='h-full'>
      <GroupTable columns={groupColumns} data={groups}/>
    </div>        
  )
}
