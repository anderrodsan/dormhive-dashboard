"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { 
    DialogTrigger, 
    DialogTitle, 
    DialogDescription, 
    DialogHeader, 
    DialogFooter, 
    DialogContent, 
    Dialog, 
    DialogClose
} from "@/components/ui/dialog"

import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { User } from "lucide-react"
import { Group } from "@/lib/types/Groups"
import { Card } from "@/components/ui/card"
import { createClient } from "@/utils/supabase/client"
import { Profile } from "@/lib/types/Profile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { userColumns } from "../users/user-columns"
import { DataTable } from "../../DataTable"
import { UserTable } from "../users/UserTable"

export default function EditMembers({ 
    group
  }: {
    group: Group
  }) {

  const [users, setUsers] = React.useState(null);
  
  async function getData() {

    const supabase = createClient();
  
  
    // Fetch data from supabase
    const { data, error } = await supabase
      .from('group_members')
      .select('user_id, profile: profiles(email, username, avatar_url)')
      .eq('group_id', group.id)
      .order('created_at', { ascending: true });
      if (error) {
        console.error('Error fetching groups:', error);
      }  
    
    // Map the fetched data to restructure it according to the User type
    const transformedData = data.map(item => ({
      id: item.user_id,
      room: 200,
      username: item.profile.username,
      avatar_url: item.profile.avatar_url,
      email: item.profile.email,
  }));

  setUsers(transformedData);
  
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size={"sm"} 
          variant="secondary"
          onClick={() => getData()}
          >
          <div className="hover:scale-105 flex flex-row">
            <p className="pr-2">{group?.members}</p>
            <User size={16}/>
          </div>
          
        </Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
          <DialogHeader>
                <DialogTitle>Members</DialogTitle>
                <DialogDescription>Assign the tenants that have access to <span className="font-bold">"{group?.name}"</span>.</DialogDescription>
          </DialogHeader>
            {users ? (
              <UserTable columns={userColumns} data={users}/>  
            ):(
              <p>Add users</p>
            )}
          
            
          <DialogFooter>  
            <div className="flex flex-row justify-start w-full">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </div>
              
          </DialogFooter>
        </DialogContent>
      </form>
      
    </Dialog>
  )
}

