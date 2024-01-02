"use client"

import * as React from "react"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from "@/components/ui/dialog"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { UserPlus } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Group, groupIcons } from "@/lib/types/Groups"
import { Tooltip } from "@mui/material"




export default function AddUser(){

    const [groups, setGroups] = React.useState(null)

    async function getGroups(){

        const supabase = createClient();
    
        const { data, error } = await supabase
            .from('groups')
            .select('*')
            .eq('dorm_id', '8b67a025-9c62-43bd-b4d8-a5fe852762c3')
            if (error) {
                console.error('Error fetching groups:', error);
                return null
            }
        setGroups(data)
    }

    // Sign up with password
    const handleNewUser = async (formData: FormData) => {

        const email = formData.get('email') as string
        const room = formData.get('room') as string

        console.log('email: ', email)
        console.log('room: ', room)
        console.log('group: ', value)
    }

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")  

    return(
        <Dialog>
            <Tooltip title="Add User" placement="top" arrow>
                <DialogTrigger asChild>
                
                    <Button 
                        size={"sm"} 
                        className="text-xs py-[-1]"
                        onClick={() => getGroups()}
                    >
                        <UserPlus size={16}/>
                    </Button> 
                
                </DialogTrigger>
            </Tooltip>
            <DialogContent>
                <form action={handleNewUser}>
                    <DialogHeader>
                        <DialogTitle>Add Tenant</DialogTitle>
                        <DialogDescription>
                            Add a new tenant by specifying their email and room.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                name="email"
                                placeholder="Introduce the email..."
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Room
                            </Label>
                            <Input
                                name="room"
                                placeholder="Introduce the room..."
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Group
                            </Label>
                            {groups? (
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between"
                                        >
                                        
                                        {value
                                            ? groups.find((group) => group.id === value)?.name
                                            : "Select group..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0 overflow-hidden">
                                        <Command>
                                        <CommandInput placeholder="Search group..." />
                                        <CommandEmpty>No group.</CommandEmpty>
                                        <ScrollArea className="h-[200px]">
                                            <CommandGroup className="">
                                            {groups.map((group) => {
                                                const selectedIcon = groupIcons.find((icon) => icon.value === group.icons);

                                                return (
                                                <CommandItem
                                                    key={group.id}
                                                    value={group.id}
                                                    onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? '' : currentValue);
                                                    setOpen(false);
                                                    }}
                                                >
                                                    <Check
                                                    className={cn('mr-2 h-4 w-4', value === group.id ? 'opacity-100' : 'opacity-0')}
                                                    />
                                                    {selectedIcon && <selectedIcon.icon className="mr-2 h-4 w-4" />} {/* Display the icon */}
                                                    {group.name}
                                                </CommandItem>
                                                );
                                            })}
                                            
                                            </CommandGroup>
                                        </ScrollArea>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            ):(
                                <p>No groups</p>
                            )}
                                
                            
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="submit">Create</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );

  }