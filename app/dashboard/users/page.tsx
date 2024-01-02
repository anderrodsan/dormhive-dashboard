
import React from 'react'

import Users from '@/components/dashboard/users'
import { BellDot, BellPlus } from 'lucide-react'
import UsersList from '@/components/dashboard/users'

export default async function Users() {  

  return (
    <div className='flex flex-col justify-start h-full overflow-hidden'>
        <UsersList />
        
    </div>
  )
}
