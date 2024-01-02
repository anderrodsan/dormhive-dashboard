"use client"

import * as React from "react"

import { createClient } from "@/utils/supabase/client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import { PopoverClose } from "@radix-ui/react-popover"
import { UUID } from "crypto"
import { PlusCircle } from "lucide-react"
import { revalidatePath } from "next/cache"
import { useRouter } from "next/navigation"
import { groupIcons } from "@/lib/types/Groups"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CreateGroup({ 
  title,
  size,
  dormID,
  parentID
}: {
  title: string
  size: number
  dormID: UUID,
  parentID: UUID | null,
}) {

  const [loading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();

  // Create new group
  const handleNewGroup = async (formData: FormData) => {
    
    setLoading(true);
    
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const icon = formData.get('icon') as string;

    const supabase = createClient();

    const { data, error } = await supabase
          .from('groups')
          .insert({
            name,
            description,
            parent_id: parentID,
            dorm_id: dormID,
            icons: icon,
          })
          .single();
    
    if (error) {
      console.error('Error creating a group:',   error);
    }
    else {
      router.refresh();
      
      setLoading(false);
    }
  }

  return (
    <Popover>
      
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <PopoverTrigger asChild>
              {title? (
                <div className="flex flex-row items-center cursor-pointer">
                  <PlusCircle size={size}/>
                  <p className="text-sm pl-2">{title}</p>
                </div>
              ) : (
                <div className="cursor-pointer">
                  <PlusCircle size={size} className="hover:scale-125"/>
                </div>
              )}
              </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent sideOffset={10} className="text-xs">New Group</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <PopoverContent side="top" className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Create Group</h4>
            <p className="text-sm text-muted-foreground">
              New Group
            </p>
          </div>
          <form action={handleNewGroup}>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  defaultValue=""
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="description">Description</Label>
                <Input
                  name="description"
                  defaultValue=""
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="description">Type</Label>
                <Select defaultValue="default" name="icon">
                  <SelectTrigger className="col-span-2">
                    <SelectValue placeholder={"Select icon"} />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Displaying icon options */}
                      {groupIcons.map((group) => (
                        <div
                          key={group.value}
                        >
                          <SelectItem value={group.value}>
                            <div className="flex flex-row gap-2 items-center">
                              <group.icon size={16}/>{group.label}
                            </div>
                            
                          </SelectItem>
                        </div>
                      ))}
                  </SelectContent>
                </Select>

              </div>


              <div className="flex flex-row justify-end gap-2">
                <PopoverClose asChild>
                  <Button variant={"outline"}>
                    Cancel
                  </Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button type="submit">
                    {loading? (
                      <p>...loading</p>
                    ):(
                      <p>Save</p>
                    )}
                  </Button>
                </PopoverClose>
              </div>
              
            </div>
          </form>
          
        </div>
      </PopoverContent>
    </Popover>
  )
}
