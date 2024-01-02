import { cookies } from "next/headers";
import { columns } from "@/components/dashboard/tasks/columns"
import { DataTable } from "@/components/dashboard/tasks/data-table";
import { createClient } from "@/utils/supabase/server";
import { Request } from "@/lib/types/Tasks";
import { columnsSmall } from "@/components/dashboard/tasks/columns-small"


async function getData(): Promise<any> {
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

export default async function Tasks() {

  const data = await getData()

  return (  
    <div className='flex flex-col h-full'>
      <div className="block md:hidden">
        <DataTable columns={columnsSmall} data={data} />  
      </div>
      <div className="hidden md:block">
        <DataTable columns={columns} data={data} />
      </div>  
    </div>
  )
}
