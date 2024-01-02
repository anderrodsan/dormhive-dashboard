"use client"

import * as React from "react"

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
import { PenSquare } from "lucide-react"
import { PopoverClose } from "@radix-ui/react-popover"
import { groupIcons } from "@/lib/types/Groups"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function EditGroup({ 
    group 
}: {
    group: any
}) {

  const [loading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();

  // Create new group
  const handleEditGroup = async (formData: FormData) => {
    
    setLoading(true);
    
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const icon = formData.get('icon') as string;

    const supabase = createClient();

    const { data, error } = await supabase
    .from('groups')
    .update({
      name,
      description,
      icons: icon,
    })
    .eq('id', group?.id)
    .select()
    
    if (error) {
      console.error('Error creating a group:',   error);
    }
    else {
      router.refresh()
      setLoading(false);
    }
  }



  return (
    <Popover>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <PopoverTrigger asChild>
                <PenSquare size={16} className="hover:scale-125 cursor-pointer"/>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent sideOffset={10} className="text-xs">Edit Group</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      
      <PopoverContent side="top" className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit Group</h4>
            <p className="text-sm text-muted-foreground">
              Edit group information
            </p>
          </div>
          <form action={handleEditGroup}>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  defaultValue={group?.name}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="description">Description</Label>
                <Input
                  name="description"
                  defaultValue={group?.description}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="description">Type</Label>
                <Select defaultValue={group?.icons} name="icon">
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
                    Save
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
